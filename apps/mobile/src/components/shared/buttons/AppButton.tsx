import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../../../theme/ThemeProvider";
import { createAppButtonStyles } from "./AppButton.styles";

type AppButtonVariant = "primary" | "menu";

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: AppButtonVariant;
};

export default function AppButton({ label, onPress, variant = "primary" }: AppButtonProps) {
  const { colors } = useTheme();
  const appButtonStyles = createAppButtonStyles(colors);
  const [isHovered, setIsHovered] = useState(false);

  const gradientColors = isHovered
    ? ([colors.buttonGoldHoverStart, colors.buttonGoldHoverMid, colors.buttonGoldHoverEnd] as const)
    : ([colors.buttonGoldStart, colors.buttonGoldMid, colors.buttonGoldEnd] as const);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={({ pressed }) => [appButtonStyles.pressable, pressed && appButtonStyles.pressed]}
    >
      <View style={appButtonStyles.mount}>
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[appButtonStyles.shield, appButtonStyles[variant]]}
        >
          <View style={[appButtonStyles.nail, appButtonStyles.nailTopLeft]} />
          <View style={[appButtonStyles.nail, appButtonStyles.nailTopRight]} />
          <Text style={[appButtonStyles.label, appButtonStyles[`${variant}Label`]]}>{label}</Text>
        </LinearGradient>
      </View>
    </Pressable>
  );
}