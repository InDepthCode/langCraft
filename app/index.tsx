import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "@/tw";
import { View, Text } from "@/tw";

/**
 * Design System Preview
 * Temporary screen to verify all tokens are wired up correctly.
 * Replace with real app screens as features are built.
 */
export default function Index() {
  return (
    <SafeAreaView>
      <Text className="text-h6 mt-90 text-center text-brand-purple">LangCraft</Text>
    </SafeAreaView>
  );
}
