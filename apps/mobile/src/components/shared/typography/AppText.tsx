import { ReactNode } from "react";
import { Text, TextProps } from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import { createAppTextStyles } from "./AppText.styles";

export type AppTextVariant = "appTitle" | "screenTitle" | "sectionTitle" | "body" | "bodySmall";

type AppTextProps = TextProps & {
  children: ReactNode;
  variant?: AppTextVariant;
};

export default function AppText({ children, variant = "body", style, ...rest }: AppTextProps) {
  const { colors } = useTheme();
  const appTextStyles = createAppTextStyles(colors);

  return (
    // Combine the base text style with the chosen variant style
    <Text style={[appTextStyles.base, appTextStyles[variant], style]} {...rest}>
      {children}
    </Text>
  );
}