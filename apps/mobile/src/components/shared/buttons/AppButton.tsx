import { Pressable, Text } from "react-native";
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

  return (
    <Pressable style={[appButtonStyles.base, appButtonStyles[variant]]} onPress={onPress}>
      {/* Pick the correct label style based on the button variant */}
      <Text style={[appButtonStyles.label, appButtonStyles[`${variant}Label`]]}>{label}</Text>
    </Pressable>
  );
}