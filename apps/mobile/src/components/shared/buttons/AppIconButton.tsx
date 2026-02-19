import { useState } from "react";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../../theme/ThemeProvider";
import { AppIconButtonStyle, createAppIconButtonStyles } from "./AppIconButton.styles";

type AppIconButtonProps = {
  icon?: string;
  imageSource?: ImageSourcePropType;
  onPress: () => void;
  style?: AppIconButtonStyle;
  accessibilityLabel?: string;
};

export default function AppIconButton({ icon, imageSource, onPress, style, accessibilityLabel }: AppIconButtonProps) {
  const { colors } = useTheme();
  const appIconButtonStyles = createAppIconButtonStyles(colors);
  const [isHovered, setIsHovered] = useState(false);

  const gradientColors = isHovered
    ? ([colors.buttonGoldHoverStart, colors.buttonGoldHoverMid, colors.buttonGoldHoverEnd] as const)
    : ([colors.buttonGoldStart, colors.buttonGoldMid, colors.buttonGoldEnd] as const);

  if (imageSource) {
    return (
      <Pressable
        onPress={onPress}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        style={({ pressed }) => [appIconButtonStyles.pressable, style, pressed && appIconButtonStyles.pressed]}
      >
        <View style={appIconButtonStyles.imageOnlyMount}>
          <Image source={imageSource} style={appIconButtonStyles.imageOnlyFill} resizeMode="cover" />
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [appIconButtonStyles.pressable, style, pressed && appIconButtonStyles.pressed]}
    >
      <View style={appIconButtonStyles.mount}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={appIconButtonStyles.shield}
        >
          <View style={[appIconButtonStyles.nail, appIconButtonStyles.nailTopLeft]} />
          <View style={[appIconButtonStyles.nail, appIconButtonStyles.nailTopRight]} />
          {icon ? <Text style={appIconButtonStyles.icon}>{icon}</Text> : null}
        </LinearGradient>
      </View>
    </Pressable>
  );
}
