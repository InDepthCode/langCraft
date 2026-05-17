import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "@/tw";

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text--h2 text-center mb-2">AI Teacher Tab</Text>
        <Text className="text--body-md text-neutral-text-secondary text-center">
          Real-time video AI lessons and active pronunciation support will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
