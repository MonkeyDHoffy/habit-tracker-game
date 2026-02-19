import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import { createAppCardStyles } from "./AppCard.styles";

type AppCardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function AppCard({ children, style }: AppCardProps) {
  const { colors } = useTheme();
  const appCardStyles = createAppCardStyles(colors);

  return <View style={[appCardStyles.card, style]}>{children}</View>;
}