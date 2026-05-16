/**
 * Lingua Design System — Typography Tokens
 *
 * Font: Poppins (Bold, SemiBold, Medium, Regular)
 *
 * Scale from design reference:
 *   H1:         32px  Bold      lh 1.2   Page / Screen Title
 *   H2:         24px  SemiBold  lh 1.3   Section Title
 *   H3:         20px  SemiBold  lh 1.3   Card / Module Title
 *   H4:         16px  Medium    lh 1.4   Subheading
 *   Body Large: 16px  Regular   lh 1.6   Important content
 *   Body Medium:14px  Regular   lh 1.6   Body text
 *   Body Small: 13px  Regular   lh 1.6   Supporting text
 *   Caption:    11px  Regular   lh 1.4   Labels / meta text
 */

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 13,
  caption: 11,
} as const;

export const lineHeight = {
  h1: 1.2,
  h2: 1.3,
  h3: 1.3,
  h4: 1.4,
  bodyLarge: 1.6,
  bodyMedium: 1.6,
  bodySmall: 1.6,
  caption: 1.4,
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
} as const;

export type FontFamily = typeof fontFamily;
export type FontSize = typeof fontSize;
