import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable, ScrollView } from "@/tw";
import { Image } from "@/tw/image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@clerk/expo";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/language-store";
import { images } from "@/constants/images";

export default function ChooseLanguageScreen() {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const { selectedLanguageId, setSelectedLanguageId } = useLanguageStore();
  
  // Track temporary selection locally before confirming
  const [tempSelectedId, setTempSelectedId] = useState<string>(selectedLanguageId || "es");

  const handleSelectLanguage = (id: string, isActive: boolean) => {
    if (!isActive) {
      // For inactive languages, show a friendly warning/toast or simply do nothing
      return;
    }
    setTempSelectedId(id);
  };

  const handleConfirm = () => {
    setSelectedLanguageId(tempSelectedId);
    
    // Always redirect to home, as authentication is completed before reaching this screen
    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Premium Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-neutral-border">
        <Pressable 
          className="w-10 h-10 items-center justify-center rounded-full bg-neutral-surface border border-neutral-border"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={20} color="#0D132B" />
        </Pressable>
        <Text className="text--h4 text-neutral-text-primary font-poppins-semibold">
          Choose a language
        </Text>
        {/* Placeholder for visual balance */}
        <View className="w-10 h-10" />
      </View>

      {/* Main Scrollable Content */}
      <ScrollView 
        className="flex-1 px-6"
        contentContainerStyle={{ paddingBottom: 120, paddingTop: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Headline */}
        <View className="mb-8">
          <Text className="text--h2 mb-2">What would you like to learn?</Text>
          <Text className="text--body-md text-neutral-text-secondary leading-5">
            Select an active language to start your playful AI language journey today!
          </Text>
        </View>

        {/* Languages List */}
        <View className="gap-y-4">
          {languages.map((language) => {
            const isSelected = tempSelectedId === language.id;
            const isActive = language.isActive;

            return (
              <Pressable
                key={language.id}
                onPress={() => handleSelectLanguage(language.id, isActive)}
                className="w-full"
              >
                <View
                  className={`flex-row items-center justify-between p-4 rounded-2xl border transition-all duration-200 ${
                    !isActive 
                      ? "border-neutral-border bg-neutral-surface/60 opacity-60" 
                      : isSelected
                        ? "border-brand-purple bg-[#F0EEFF]"
                        : "border-neutral-border bg-white"
                  }`}
                  style={
                    isActive && isSelected
                      ? {
                          shadowColor: "#6C4EF5",
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: 0.1,
                          shadowRadius: 8,
                          elevation: 3,
                        }
                      : {
                          elevation: 0,
                        }
                  }
                >
                  {/* Left side (Flag + Name details) */}
                  <View className="flex-row items-center flex-1 pr-4">
                    {/* Rounded Flag Container */}
                    <View className="w-12 h-12 rounded-full overflow-hidden border border-neutral-border mr-4 items-center justify-center bg-white">
                      <Image
                        source={{ uri: language.flag }}
                        className="w-full h-full"
                        resizeMode="cover"
                      />
                    </View>
  
                    {/* Text Column */}
                    <View className="flex-1 justify-center">
                      <Text className={`text--h4 ${!isActive ? "text-neutral-text-secondary" : "text-neutral-text-primary"} font-poppins-semibold mb-0.5`}>
                        {language.name}
                      </Text>
                      <Text className="text--body-sm text-neutral-text-secondary">
                        {language.nativeName}
                      </Text>
                    </View>
                  </View>
  
                  {/* Right side (Status / Indicator) */}
                  <View>
                    {!isActive ? (
                      <View className="bg-neutral-border/50 px-3 py-1 rounded-full">
                        <Text className="text-[11px] font-poppins-semibold text-neutral-text-secondary">
                          Soon
                        </Text>
                      </View>
                    ) : isSelected ? (
                      <View className="w-6 h-6 rounded-full bg-brand-purple items-center justify-center">
                        <Ionicons name="checkmark" size={14} color="white" />
                      </View>
                    ) : (
                      <View className="w-6 h-6 rounded-full border border-neutral-border bg-white" />
                    )}
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Decorative Earth Image */}
        <View className="items-center justify-center mt-12 mb-4">
          <Image
            source={images.earth}
            className="w-36 h-36 opacity-90"
            resizeMode="contain"
          />
          <Text className="text--body-sm text-neutral-text-secondary mt-2 font-poppins-medium">
            Learn together, connect globally
          </Text>
        </View>
      </ScrollView>

      {/* Sticky Bottom Action Button */}
      <View 
        className="absolute bottom-0 left-0 right-0 bg-white border-t border-neutral-border px-6 pt-4 pb-8 z-10"
        style={{
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 5,
        }}
      >
        <Pressable 
          className="btn--primary w-full flex-row items-center justify-center py-4"
          onPress={handleConfirm}
        >
          <Text className="btn--primary__label text-center">Confirm Selection</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
