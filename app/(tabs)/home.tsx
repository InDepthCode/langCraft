import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { lessons } from "@/data/lessons";
import { units } from "@/data/units";
import { useLanguageStore } from "@/store/language-store";
import { useLearningStore } from "@/store/learning-store";
import { Pressable, ScrollView, Text, View } from "@/tw";
import { Image } from "@/tw/image";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { user } = useUser();
  const router = useRouter();

  const { selectedLanguageId } = useLanguageStore();
  const { completedActivityIds, xp, streak, toggleActivityCompleted } = useLearningStore();

  const selectedLanguage = languages.find((lang) => lang.id === selectedLanguageId) || languages[0];

  // Fetch unit and lesson data dynamically
  const activeUnit = units.find((u) => u.languageId === selectedLanguage.id) || units[0];
  const activeLessons = lessons.filter((l) => l.unitId === activeUnit.id);
  const activeLesson = activeLessons[0] || lessons[0];
  const activeActivities = activeLesson ? activeLesson.activities : [];

  // Localized greetings based on active selected language
  const getGreetingText = () => {
    const firstName = user?.firstName || "Explorer";
    switch (selectedLanguage.id) {
      case "es":
        return `Hola, ${firstName}! 👋`;
      case "fr":
        return `Bonjour, ${firstName}! 👋`;
      case "ja":
        return `こんにちは, ${firstName}! 👋`;
      default:
        return `Hello, ${firstName}! 👋`;
    }
  };

  // Maps activity types to customized visual tokens (backgrounds, squircles, and Ionicons)
  const getActivityConfig = (type: string) => {
    switch (type) {
      case "video":
        return {
          iconBg: "bg-indigo-500",
          icon: "play" as const,
          label: "AI Teacher Video",
        };
      case "audio":
        return {
          iconBg: "bg-emerald-500",
          icon: "mic" as const,
          label: "Audio Practice",
        };
      case "chat":
        return {
          iconBg: "bg-amber-500",
          icon: "chatbubbles" as const,
          label: "AI Tutor Chat",
        };
      case "multiple-choice":
        return {
          iconBg: "bg-blue-500",
          icon: "list" as const,
          label: "Quiz",
        };
      case "translation":
        return {
          iconBg: "bg-rose-500",
          icon: "language" as const,
          label: "Translation",
        };
      case "vocabulary-match":
        return {
          iconBg: "bg-orange-500",
          icon: "grid" as const,
          label: "Vocab Match",
        };
      default:
        return {
          iconBg: "bg-slate-500",
          icon: "book" as const,
          label: "Activity",
        };
    }
  };

  // Calculate daily goal percentage capped at 100%
  const goalXpTarget = 50;
  const progressPercent = Math.min(100, (xp / goalXpTarget) * 100);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffffff" }}>
      {/* Scrollable Container */}
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 110, paddingTop: 19 }}
      >
        {/* ─── 1. HEADER SECTION ─── */}
        <View className="flex-row items-center justify-between mb-6">
          <View className="flex-row items-center flex-1">
            {/* Circular selected language flag */}
            <Pressable
              onPress={() => router.push("/choose-language")}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-neutral-border items-center justify-center bg-neutral-surface"
            >
              <Image
                source={{ uri: selectedLanguage.flag }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </Pressable>

            {/* Greeting using BEM and explicit fontFamily to guarantee correct rendering */}
            <View className="ml-3 justify-center">
              <Text className="text--h3 text-neutral-text-primary" style={{ fontFamily: "Poppins-Bold" }}>
                {getGreetingText()}
              </Text>
            </View>
          </View>

          {/* Counters & Utility Column */}
          <View className="flex-row items-center gap-x-4">
            {/* Streak Counter */}
            <View className="flex-row items-center bg-neutral-surface px-3 py-1.5 rounded-full border border-neutral-border">
              <Image
                source={images.streakFire}
                className="w-5 h-5 mr-1.5"
                resizeMode="contain"
              />
              <Text className="text--body-md text-neutral-text-primary" style={{ fontFamily: "Poppins-SemiBold" }}>
                {streak}
              </Text>
            </View>

            {/* Notification Bell */}
            <Pressable className="w-10 h-10 items-center justify-center rounded-full bg-neutral-surface border border-neutral-border">
              <Ionicons name="notifications-outline" size={20} color="#0D132B" />
            </Pressable>
          </View>
        </View>

        {/* ─── 2. DAILY GOAL / XP CARD ─── */}
        <View
          className="w-full bg-[#FFFDF5] border border-[#FDE68A] rounded-3xl p-5 mb-5 flex-row items-center justify-between"
          style={styles.shadowSubtle}
        >
          <View className="flex-1 pr-4">
            <View className="flex-row items-center justify-between mb-1">
              <Text className="text--caption text-neutral-text-secondary uppercase tracking-wider" style={{ fontFamily: "Poppins-SemiBold" }}>
                Daily goal
              </Text>
            </View>
            <View className="flex-row items-baseline mb-3">
              <Text className="text--h1 text-[#0D132B]" style={{ fontSize: 28, fontFamily: "Poppins-Bold" }}>
                {xp}
              </Text>
              <Text className="text--body-md text-neutral-text-secondary ml-1" style={{ fontFamily: "Poppins-Medium" }}>
                / {goalXpTarget} XP
              </Text>
            </View>

            {/* Rounded progress bar */}
            <View className="w-full h-2 bg-[#FFEDD5] rounded-full overflow-hidden">
              <View
                className="h-full bg-[#F97316] rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </View>
          </View>

          {/* 3D Chest Illustration */}
          <Image
            source={images.treasure}
            className="w-20 h-20"
            resizeMode="contain"
          />
        </View>

        {/* ─── 3. CONTINUE LEARNING / UNIT GRADIENT CARD ─── */}
        <View
          className="w-full bg-brand-purple rounded-3xl p-5 mb-6 relative overflow-hidden flex-row"
          style={styles.shadowSubtle}
        >
          {/* Main Card Content */}
          <View className="flex-1 z-10 pr-24 justify-center">
            <Text className="text--caption text-white/80 uppercase tracking-widest mb-1" style={{ fontFamily: "Poppins-SemiBold" }}>
              Continue learning
            </Text>
            <Text className="text--h2 text-white mb-0.5" style={{ fontFamily: "Poppins-Bold" }}>
              {selectedLanguage.name}
            </Text>
            <Text className="text--body-md text-white/80 mb-5" style={{ fontFamily: "Poppins-Medium" }}>
              Unit {activeUnit.number} • {activeUnit.title}
            </Text>

            {/* White action button */}
            <Pressable
              onPress={() => router.push(`/lesson?lessonId=${activeLesson.id}` as any)}
              className="bg-white rounded-full py-2.5 px-6 self-start active:opacity-90"
            >
              <Text className="text--body-md text-brand-purple" style={{ fontFamily: "Poppins-Bold" }}>
                Start Lesson
              </Text>
            </Pressable>
          </View>

          {/* Gold Castle Illustration absolutely positioned at bottom right */}
          <View className="absolute bottom-0 right-0 w-28 h-28 items-end justify-end pointer-events-none">
            <Image
              source={images.palace}
              className="w-[110px] h-[110px]"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* ─── 4. TODAY'S PLAN SECTION ─── */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text--h3 text-[#0D132B]" style={{ fontFamily: "Poppins-Bold" }}>
              Today&apos;s plan
            </Text>
            <Pressable>
              <Text className="text--body-md text-brand-purple" style={{ fontFamily: "Poppins-SemiBold" }}>
                View all
              </Text>
            </Pressable>
          </View>

          {/* Activities List */}
          <View className="gap-y-3">
            {activeActivities.map((activity, index) => {
              const isCompleted = completedActivityIds.includes(activity.id);
              const config = getActivityConfig(activity.type);

              return (
                <Pressable
                  key={activity.id}
                  onPress={() => toggleActivityCompleted(activity.id, activity.xpReward)}
                  className="flex-row items-center justify-between p-4 bg-white border border-neutral-border rounded-2xl active:bg-neutral-surface/40"
                >
                  <View className="flex-row items-center flex-1 mr-4">
                    {/* Activity squircle icon */}
                    <View className={`w-12 h-12 rounded-2xl ${config.iconBg} items-center justify-center mr-3.5`}>
                      <Ionicons name={config.icon} size={22} color="white" />
                    </View>

                    {/* Text Details using explicit Poppins style declarations to avoid Android Yoga layout squashing */}
                    <View className="flex-1 justify-center">
                      <Text className="text--caption text-neutral-text-secondary uppercase tracking-wider mb-0.5" style={{ fontFamily: "Poppins-SemiBold" }}>
                        {config.label}
                      </Text>
                      <Text className="text--body-md text-neutral-text-primary leading-5" style={{ fontFamily: "Poppins-Bold" }}>
                        {activity.title}
                      </Text>
                    </View>
                  </View>

                  {/* Interactively togglable checkmark indicator */}
                  <View>
                    {isCompleted ? (
                      <View className="w-6 h-6 rounded-full bg-brand-purple items-center justify-center">
                        <Ionicons name="checkmark" size={14} color="white" />
                      </View>
                    ) : (
                      <View className="w-6 h-6 rounded-full border-2 border-[#CBD5E1] bg-white" />
                    )}
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadowSubtle: {
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.03,
        shadowRadius: 10,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
