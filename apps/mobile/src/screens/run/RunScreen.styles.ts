import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export const createRunScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    root: {
      flex: 1,
      overflow: "hidden",
      backgroundColor: colors.background,
    },
    imageWrapper: {
      ...StyleSheet.absoluteFillObject,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    gearButton: {
      position: "absolute",
      top: spacing.xl,
      right: spacing.lg,
      width: 46,
      height: 46,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 20,
    },
    gearIconImage: {
      width: "100%",
      height: "100%",
    },
    enemyContainer: {
      position: "absolute",
      zIndex: 30,
    },
    enemyImage: {
      width: "100%",
      height: "100%",
    },
    homeOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.background,
      zIndex: 40,
    },
    closeOverlayButton: {
      position: "absolute",
      top: spacing.xl,
      right: spacing.lg,
      zIndex: 50,
    },
    debugOutline: {
      borderWidth: 2,
      borderStyle: "dashed",
      borderColor: "red",
    },
  });
