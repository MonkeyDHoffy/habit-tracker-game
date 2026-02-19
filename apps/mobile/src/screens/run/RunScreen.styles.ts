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
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.35)",
      zIndex: 20,
    },
    gearIcon: {
      color: "#ffffff",
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
