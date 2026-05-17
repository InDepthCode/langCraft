import "../global.css";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { tokenCache } from "@/lib/token-cache";
import { ClerkLoaded, ClerkProvider } from "@clerk/expo";

import { useAuth } from "@clerk/expo";
import { useRouter, useSegments } from "expo-router";
import { useLanguageStore } from "@/store/language-store";

// Keep splash screen visible until fonts are loaded
SplashScreen.preventAutoHideAsync();

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const selectedLanguageId = useLanguageStore((state) => state.selectedLanguageId);

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === "(auth)";
    const isOnboarding = segments[0] === "onboarding";
    const isChooseLanguage = segments[0] === "choose-language";

    if (isSignedIn) {
      if (!selectedLanguageId) {
        // Redirect to choose-language if signed in and trying to access private routes without language selected
        if (!isChooseLanguage) {
          router.replace("/choose-language");
        }
      } else {
        // Redirect to home if signed in, has language, and trying to access auth/onboarding
        if (inAuthGroup || isOnboarding) {
          router.replace("/");
        }
      }
    } else {
      // Redirect to onboarding if not signed in and trying to access private routes
      if (!inAuthGroup && !isOnboarding && !isChooseLanguage) {
        router.replace("/onboarding");
      }
    }
  }, [isSignedIn, isLoaded, segments, selectedLanguageId]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#FFFFFF" },
      }}
    />
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const _hasHydrated = useLanguageStore((state) => state._hasHydrated);

  useEffect(() => {
    if ((fontsLoaded || fontError) && _hasHydrated) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError, _hasHydrated]);

  // Wait for fonts and store hydration before rendering
  if ((!fontsLoaded && !fontError) || !_hasHydrated) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
}


