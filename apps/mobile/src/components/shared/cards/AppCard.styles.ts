import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

export const createAppCardStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: radius.md,
      padding: spacing.lg,
      gap: spacing.sm,
    },
  });