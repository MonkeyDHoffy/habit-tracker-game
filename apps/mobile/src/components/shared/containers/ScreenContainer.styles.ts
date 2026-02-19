import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";

export const createScreenContainerStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flexGrow: 1,
      padding: spacing.xl,
      gap: spacing.lg,
    },
  });