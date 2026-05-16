import { useCssElement } from "react-native-css";
import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { Image as RNImage } from "expo-image";

const AnimatedExpoImage = Animated.createAnimatedComponent(RNImage);

export type ImageProps = React.ComponentProps<typeof CSSImage> & {
  className?: string;
};

function CSSImage(props: React.ComponentProps<typeof AnimatedExpoImage>) {
  // @ts-expect-error: Remap objectFit / objectPosition to Expo Image props
  const { objectFit, objectPosition, ...style } =
    StyleSheet.flatten(props.style) || {};

  return (
    <AnimatedExpoImage
      contentFit={objectFit}
      contentPosition={objectPosition}
      {...props}
      source={
        typeof props.source === "string" ? { uri: props.source } : props.source
      }
      // @ts-expect-error: Style is remapped above
      style={style}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Image = (props: ImageProps): any => {
  // @ts-ignore - react-native-css type depth
  return useCssElement(CSSImage, props, { className: "style" });
};

Image.displayName = "CSS(Image)";
