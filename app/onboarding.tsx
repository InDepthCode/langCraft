import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "@/tw";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Top Header */}
      <View className="flex-row items-center justify-center pt-8 pb-4">
        <Image 
          source={images.mascotLogo} 
          className="w-10 h-10 mr-2" 
          resizeMode="contain"
          style={{ width: 40, height: 40, marginRight: 8 }}
        />
        <Text className="text--h2 text-brand-purple">
          langcraft
        </Text>
      </View>

      {/* Center Content */}
      <View className="flex-1 items-center justify-center px-8">
        <Image 
          source={images.mascotWelcome} 
          className="w-64 h-64 mb-8" 
          resizeMode="contain"
          style={{ width: 256, height: 256, marginBottom: 32 }}
        />
        <Text className="text--h2 text-center mb-4">
          The free, fun, and effective way to learn a language!
        </Text>
      </View>

      {/* Bottom Buttons */}
      <View className="px-6 pb-12 gap-y-4">
        <Pressable 
          className="btn--primary"
          onPress={() => {}}
        >
          <Text className="btn--primary__label">GET STARTED</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
