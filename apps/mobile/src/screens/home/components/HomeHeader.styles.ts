import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

export const createHomeHeaderStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      gap: spacing.sm,
      backgroundColor: colors.drawerWoodDark,
      borderRadius: radius.md,
      borderWidth: 2,
      borderColor: colors.drawerWoodLight,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
    },
    appTitle: {
      color: colors.cardBackground,
    },
    subtitlePlaque: {
      alignSelf: "flex-start",
      backgroundColor: colors.drawerWoodHandle,
      borderRadius: radius.sm,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.xs,
    },
    screenTitle: {
      color: colors.drawerWoodDark,
    },
  });