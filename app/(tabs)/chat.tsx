import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "@/tw";

export default function ChatScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text--h2 text-center mb-2">AI Chat Tab</Text>
        <Text className="text--body-md text-neutral-text-secondary text-center">
          Interactive chat-based AI tutor sessions and practice conversations will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
