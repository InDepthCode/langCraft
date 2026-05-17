import { Tabs } from "expo-router";
import { View, Text, Pressable } from "@/tw";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dimensions, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import React, { useEffect } from "react";

const { width } = Dimensions.get("window");
const tabWidth = width / 5;
const circleSize = 54;

function TabItem({
  route,
  isActive,
  onPress,
  onLongPress,
  label,
  tabWidth,
}: {
  route: any;
  isActive: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  tabWidth: number;
}) {
  const activeProgress = useSharedValue(isActive ? 1 : 0);

  useEffect(() => {
    activeProgress.value = withSpring(isActive ? 1 : 0, {
      damping: 18,
      stiffness: 150,
    });
  }, [isActive, activeProgress]);

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(activeProgress.value, [0, 1], [0, -2], Extrapolate.CLAMP),
        },
        {
          scale: interpolate(activeProgress.value, [0, 1], [1, 1.15], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(activeProgress.value, [0, 1], [1, 0], Extrapolate.CLAMP),
      transform: [
        {
          scale: interpolate(activeProgress.value, [0, 1], [1, 0.7], Extrapolate.CLAMP),
        },
        {
          translateY: interpolate(activeProgress.value, [0, 1], [0, 10], Extrapolate.CLAMP),
        },
      ],
    };
  });

  const getIconConfig = (name: string, active: boolean) => {
    switch (name) {
      case "home":
        return active ? "home" : "home-outline";
      case "learn":
        return active ? "book" : "book-outline";
      case "ai-teacher":
        return active ? "school" : "school-outline";
      case "chat":
        return active ? "chatbubble-ellipses" : "chatbubble-ellipses-outline";
      case "profile":
        return active ? "person" : "person-outline";
      default:
        return active ? "help-circle" : "help-circle-outline";
    }
  };

  const iconName = getIconConfig(route.name, isActive);

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className="flex-1 items-center justify-center h-full relative"
      style={{ width: tabWidth }}
    >
      <Animated.View style={[animatedIconStyle, { alignItems: "center", justifyContent: "center" }]}>
        <Ionicons
          name={iconName as any}
          size={24}
          color={isActive ? "#FFFFFF" : "#6B7280"}
        />
      </Animated.View>

      <Animated.View style={[animatedLabelStyle, { position: "absolute", bottom:3, alignItems: "center" }]}>
        <Text className="text-[11px] font-poppins-medium text-neutral-text-secondary">
          {label}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

function CustomTabBar({ state, descriptors, navigation }: any) {
  const insets = useSafeAreaInsets();
  const translateX = useSharedValue(state.index * tabWidth);

  useEffect(() => {
    translateX.value = withSpring(state.index * tabWidth, {
      damping: 18,
      stiffness: 150,
      mass: 0.8,
    });
  }, [state.index, translateX]);

  const animatedCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value + (tabWidth - circleSize) / 2,
        },
      ],
    };
  });

  return (
    <View 
      style={[
        styles.tabBar, 
        { 
          height: 85 + insets.bottom, 
          paddingBottom: insets.bottom,
        }
      ]}
    >
      {/* Animated Sliding Background Circle */}
      <Animated.View style={[styles.circle, animatedCircleStyle]} />

      {/* Tab Buttons */}
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isActive = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabItem
            key={route.key}
            route={route}
            isActive={isActive}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label}
            tabWidth={tabWidth}
          />
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="learn" options={{ title: "Learn" }} />
      <Tabs.Screen name="ai-teacher" options={{ title: "AI Teacher" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0,
    borderTopColor: "#E5E7EB",
    height: 76,
    position: "relative",
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: -4},
        shadowOpacity: 0.04,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  circle: {
    position: "absolute",
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: "#6C4EF5",
    top: 13,
  },
});
