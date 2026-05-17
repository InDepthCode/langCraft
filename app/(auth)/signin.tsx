import { VerificationModal } from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { Pressable, Text, View } from "@/tw";
import { useSignIn, useSignUp, useSSO } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import * as AuthSession from "expo-auth-session";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback, useEffect, useState } from "react";
import { Image, Platform, View as RNView, ScrollView, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

WebBrowser.maybeCompleteAuthSession();


export default function SignInScreen() {
  const router = useRouter();
  const { signIn, fetchStatus } = useSignIn();
  const { signUp } = useSignUp();
  const { startSSOFlow } = useSSO();


  const [emailAddress, setEmailAddress] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Warm up the browser to improve performance on native platforms
    if (Platform.OS !== "web") {
      WebBrowser.warmUpAsync();
    }
    return () => {
      if (Platform.OS !== "web") {
        WebBrowser.coolDownAsync();
      }
    };
  }, []);



  const onSignInPress = async () => {
    if (!signIn) return;

    try {
      // Create a sign-in attempt first to establish the client context
      const { error } = await (signIn as any).create({
        identifier: emailAddress,
      });

      if (error) {
        alert(error.message || "Failed to find account");
        return;
      }

      // After creating the attempt, we send the code if it's passwordless
      await (signIn as any).verifications.sendEmailCode();
      setShowModal(true);
    } catch (err: any) {
      console.error(err);
      alert("Something went wrong or email code is not supported");
    }
  };


  const onVerifyPress = async (code: string) => {
    if (!signIn) return;

    try {
      const { error } = await (signIn as any).verifications.verifyEmailCode({
        code,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (signIn.status === "complete") {
        await signIn.finalize({
          navigate: ({ decorateUrl }) => {
            router.replace(decorateUrl("/") as any);
          },
        });
      }
    } catch (err: any) {
      console.error(err);
      throw err;
    }
  };


  const onSocialPress = useCallback(async (strategy: "oauth_google" | "oauth_facebook" | "oauth_apple") => {
    try {
      const { createdSessionId, setActive: setSocialActive } = await startSSOFlow({
        strategy,
        redirectUrl: AuthSession.makeRedirectUri(),
        // signUp,
        // signIn,
      });

      if (createdSessionId) {
        await setSocialActive!({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      alert(err.errors?.[0]?.message || "Social login failed");
    }
  }, [startSSOFlow, signUp, signIn]);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="px-6 pt-4">
          {/* Back Button */}
          <Pressable
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center rounded-full border border-neutral-100 mb-6"
          >
            <Ionicons name="arrow-back" size={24} color="#0D132B" />
          </Pressable>

          {/* Title Section */}
          <Text className="text--h1 mb-2">Welcome back</Text>
          <Text className="text--body-md text-neutral-text-secondary">Continue your language journey today ✨</Text>
        </View>

        {/* Mascot Peeking */}
        <View className="items-center mt-2">
          <Image
            source={images.mascotAuth}
            style={{ width: 160, height: 100, marginBottom: -10 }}
            resizeMode="contain"
          />
        </View>

        {/* Form Fields */}
        <View className="px-6 gap-y-4">
          <View className="border-2 border-neutral-100 rounded-2xl p-4 bg-white">
            <Text className="text--caption text-neutral-text-secondary mb-1">Email</Text>
            <TextInput
              placeholder="alex@gmail.com"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={emailAddress}
              onChangeText={setEmailAddress}
            />
          </View>

          <Pressable
            className={`btn--primary mt-2 ${fetchStatus === "fetching" ? "opacity-50" : ""}`}
            onPress={onSignInPress}
            disabled={fetchStatus === "fetching"}
          >
            <Text className="btn--primary__label">{fetchStatus === "fetching" ? "Signing In..." : "Sign In"}</Text>
          </Pressable>

        </View>

        {/* Divider */}
        <View className="flex-row items-center px-6 my-8">
          <View className="flex-1 h-[1px] bg-neutral-100" />
          <Text className="px-4 text--caption text-neutral-text-secondary">or continue with</Text>
          <View className="flex-1 h-[1px] bg-neutral-100" />
        </View>

        {/* Social Buttons */}
        <View className="px-6 gap-y-4">
          <SocialButton
            icon={<Ionicons name="logo-google" size={20} color="#EA4335" />}
            label="Continue with Google"
            onPress={() => onSocialPress("oauth_google")}
          />
          <SocialButton
            icon={<Ionicons name="logo-facebook" size={20} color="#1877F2" />}
            label="Continue with Facebook"
            onPress={() => onSocialPress("oauth_facebook")}
          />
          <SocialButton
            icon={<Ionicons name="logo-apple" size={20} color="#000000" />}
            label="Continue with Apple"
            onPress={() => onSocialPress("oauth_apple")}
          />
        </View>

        {/* Footer */}
        <View className="flex-row justify-center py-10">
          <Text className="text--body-md text-neutral-text-secondary">{"Don't have an account? "}</Text>
          <Pressable onPress={() => router.push("/signup")}>
            <Text className="text--body-md text-brand-purple font-poppins-semibold">Sign up</Text>
          </Pressable>
        </View>
      </ScrollView>

      <VerificationModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onVerify={onVerifyPress}
      />
    </SafeAreaView>
  );
}

function SocialButton({ icon, label, onPress }: { icon: React.ReactNode; label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-center border-2 border-neutral-100 rounded-2xl py-4 bg-white px-6"
    >
      <RNView style={styles.socialIconContainer}>
        {icon}
      </RNView>
      <Text className="text--h4 text-neutral-text-primary">{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#0D132B",
    padding: 0,
  },
  socialIconContainer: {
    position: "absolute",
    left: 24,
  }
});
