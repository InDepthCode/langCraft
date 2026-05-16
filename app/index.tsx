import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "@/tw";
import { useRouter } from "expo-router";

/**
 * Design System Preview
 * Temporary screen to verify all tokens are wired up correctly.
 * Replace with real app screens as features are built.
 */
export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-y-8">
        <Text className="text--h1 text-center text-brand-purple">LangCraft</Text>
        
        <Pressable 
          className="btn--primary" 
          onPress={() => router.push("/onboarding")}
        >
          <Text className="btn--primary__label">Go to Onboarding</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
