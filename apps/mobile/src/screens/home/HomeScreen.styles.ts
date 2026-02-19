import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { homeScreenConfig } from "./homeScreen.config";

export const createHomeScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    content: {
      gap: homeScreenConfig.contentGap,
    },
    // Wooden frame around each big section on HomeScreen.
    sectionFrame: {
      backgroundColor: colors.drawerWoodBase,
      borderRadius: radius.md,
      borderWidth: 2,
      borderColor: colors.drawerWoodLight,
      padding: 6,
    },
  });