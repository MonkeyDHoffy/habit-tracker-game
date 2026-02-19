import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

export const createAppButtonStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    base: {
      borderRadius: radius.sm,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
    },
    primary: {
      backgroundColor: colors.primary,
    },
    menu: {
      backgroundColor: colors.menuButton,
    },
    label: {
      textAlign: "center",
      fontWeight: "700",
    },
    primaryLabel: {
      color: colors.onPrimary,
    },
    menuLabel: {
      color: colors.text,
      textAlign: "left",
      fontWeight: "500",
      fontSize: 15,
    },
  });