import { useUser, useAuth } from "@clerk/expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "@/tw";
import { useRouter } from "expo-router";

export default function Index() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-y-8 px-6">
        <Text className="text--h1 text-center text-brand-purple">LangCraft</Text>
        
        <View className="items-center">
          <Text className="text--h3 mb-2">Welcome!</Text>
          <Text className="text--body-md text-neutral-text-secondary text-center">
            You are signed in as:{"\n"}
            <Text className="text-neutral-text-primary font-poppins-semibold">
              {user?.primaryEmailAddress?.emailAddress}
            </Text>
          </Text>
        </View>

        <Pressable 
          className="btn--secondary w-full" 
          onPress={() => signOut()}
        >
          <Text className="btn--secondary__label">Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

