import { StyleSheet } from "react-native";
import { ThemeColors } from "../../theme/colors";
import { radius } from "../../theme/radius";
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
      zIndex: 15,
    },
    enemyImage: {
      width: "100%",
      height: "100%",
    },
    bottomDrawer: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.drawerWoodBase,
      borderTopLeftRadius: radius.md,
      borderTopRightRadius: radius.md,
      borderTopWidth: 2,
      borderColor: colors.drawerWoodLight,
      paddingHorizontal: spacing.xl,
      paddingTop: spacing.sm,
      paddingBottom: spacing.xl,
    },
    handle: {
      width: 52,
      height: 6,
      borderRadius: radius.sm,
      backgroundColor: colors.drawerWoodHandle,
      alignSelf: "center",
      marginBottom: spacing.md,
    },
    grainLineStrong: {
      height: 2,
      borderRadius: radius.sm,
      backgroundColor: colors.drawerWoodDark,
      opacity: 0.35,
      marginBottom: spacing.xs,
    },
    grainLineSoft: {
      height: 1,
      borderRadius: radius.sm,
      backgroundColor: colors.drawerWoodLight,
      opacity: 0.28,
      marginBottom: spacing.sm,
    },
    textBlock: {
      gap: spacing.sm,
    },
    menuList: {
      marginTop: spacing.sm,
      gap: spacing.sm,
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
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.45)",
      zIndex: 50,
    },
    closeOverlayIcon: {
      color: "#ffffff",
      fontWeight: "700",
    },
    debugOutline: {
      borderWidth: 2,
      borderStyle: "dashed",
      borderColor: "red",
    },
  });
