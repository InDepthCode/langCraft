import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "@/tw";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Top Header */}
      <View className="flex-row items-center justify-center pt-6">
        <Image 
          source={images.mascotLogo} 
          className="w-10 h-10 mr-2" 
          resizeMode="contain"
          style={{ width: 38, height: 38, marginRight: 8 }}
        />
        <Text className="text--h2" style={{ fontFamily: "Poppins-Bold" }}>
          langcraft
        </Text>
      </View>

      {/* Hero Content */}
      <View className="px-8 pt-10">
        <Text className="text--h1" style={{ fontSize: 36, lineHeight: 42 }}>
          Your AI language
        </Text>
        <Text className="text--h1 text-brand-purple" style={{ fontSize: 36, lineHeight: 42 }}>
          teacher.
        </Text>
        <Text className="text--body-lg mt-6 text-neutral-text-secondary leading-6">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>
      </View>

      {/* Mascot Illustration with Speech Bubbles */}
      <View className="flex-1 items-center justify-center relative mt-8">
        {/* Hello Bubble */}
        <View 
          className="absolute left-10 top-12 bg-[#E8F1FF] px-4 py-2 rounded-2xl shadow-sm"
          style={{ borderBottomLeftRadius: 4 }}
        >
          <Text className="text--h4 text-[#4D8BFF]">Hello!</Text>
        </View>

        {/* Hola Bubble */}
        <View 
          className="absolute right-12 top-0 bg-[#F0EEFF] px-4 py-2 rounded-2xl shadow-sm"
          style={{ borderBottomRightRadius: 4 }}
        >
          <Text className="text--h4 text-brand-purple">¡Hola!</Text>
        </View>

        {/* Chinese Bubble */}
        <View 
          className="absolute right-8 bottom-48 bg-[#FFF2F0] px-4 py-2 rounded-2xl shadow-sm"
          style={{ borderBottomRightRadius: 4 }}
        >
          <Text className="text--h4 text-[#FF4D4F]">你好!</Text>
        </View>

        <Image 
          source={images.mascotWelcome} 
          className="w-full h-full" 
          resizeMode="contain"
          style={{ width: 320, height: 320 }}
        />
      </View>

      {/* Bottom Button */}
      <View className="px-6 pb-12">
        <Pressable 
          className="btn--primary flex-row items-center justify-between px-6"
          onPress={() => router.push("/signup")}
        >
          <View style={{ width: 24 }} />
          <Text className="btn--primary__label text-center">Get Started</Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

