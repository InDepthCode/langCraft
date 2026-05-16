import * as TW from "./index";
import RNAnimated from "react-native-reanimated";

/**
 * Animated wrappers that support NativeWind className.
 * Usage: <Animated.View className="..." style={animatedStyle} />
 */
export const Animated = {
  ...RNAnimated,
  View: RNAnimated.createAnimatedComponent(TW.View),
};
