import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { typography } from "../../../theme/typography";

export const createAppTextStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    base: {
      color: colors.text,
    },
    appTitle: {
      ...typography.appTitle,
      color: colors.title,
    },
    screenTitle: {
      ...typography.screenTitle,
      color: colors.subtitle,
    },
    sectionTitle: {
      ...typography.sectionTitle,
      color: colors.title,
    },
    body: {
      ...typography.body,
      color: colors.text,
    },
    bodySmall: {
      ...typography.bodySmall,
      color: colors.text,
    },
  });