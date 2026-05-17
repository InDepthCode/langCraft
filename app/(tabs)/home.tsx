import { useUser, useAuth } from "@clerk/expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "@/tw";
import { Image } from "@/tw/image";
import { useRouter } from "expo-router";
import { useLanguageStore } from "@/store/language-store";
import { languages } from "@/data/languages";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();
  
  const { selectedLanguageId, setSelectedLanguageId } = useLanguageStore();
  const selectedLanguage = languages.find((lang) => lang.id === selectedLanguageId);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center gap-y-8 px-6">
        <Text className="text--h1 text-center text-brand-purple">LangCraft</Text>
        
        <View className="items-center">
          <Text className="text--h4 mb-2">Welcome, {user?.firstName}!</Text>
          <Text className="text--body-md text-neutral-text-secondary text-center">
            You are all set! {"Let's"} start your learning adventure.
          </Text>
        </View>

        {/* Selected Language Display Card */}
        {selectedLanguage && (
          <View className="w-full card--surface flex-row items-center p-4 border border-neutral-border gap-x-4">
            <View className="w-12 h-12 rounded-full overflow-hidden border border-neutral-border items-center justify-center bg-white">
              <Image 
                source={{ uri: selectedLanguage.flag }} 
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <View className="flex-1">
              <Text className="text-[11px] text-neutral-text-secondary uppercase tracking-wider font-poppins-semibold mb-0.5">
                Current Language
              </Text>
              <Text className="text--h4 text-neutral-text-primary font-poppins-semibold">
                {selectedLanguage.name} ({selectedLanguage.nativeName})
              </Text>
            </View>
          </View>
        )}

        <View className="w-full gap-y-4">
          <Pressable 
            className="btn--primary w-full flex-row items-center justify-center py-4" 
            onPress={() => router.push("/choose-language")}
          >
            <Text className="btn--primary__label">Select Language</Text>
          </Pressable>

          <Pressable 
            className="btn--secondary w-full py-4" 
            onPress={() => signOut()}
          >
            <Text className="btn--secondary__label">Sign Out</Text>
          </Pressable>

          <Pressable 
            className="btn--danger w-full py-4" 
            onPress={async () => {
              setSelectedLanguageId(null);
              await AsyncStorage.removeItem("language-storage");
            }}
          >
            <Text className="btn--danger__label">Clear Language Selection (Test)</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
