import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { homeScreenConfig } from "./homeScreen.config";

export const createHomeScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    backgroundImage: {
      ...StyleSheet.absoluteFillObject,
    },
    backgroundOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.background,
      opacity: 0.2,
    },
    content: {
      gap: homeScreenConfig.contentGap,
      paddingBottom: spacing.xl,
    },
    actionsList: {
      gap: spacing.sm,
    },
    firstActionSlot: {
      marginTop: 56,
    },
    actionSlot: {
      padding: 0,
    },
  });