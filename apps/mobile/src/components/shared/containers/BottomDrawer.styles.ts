import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

export const createBottomDrawerStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "flex-end",
      zIndex: 60,
    },
    backdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.background,
      opacity: 0.82,
    },
    persistentContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "flex-end",
      zIndex: 25,
    },
    drawer: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.drawerWoodBase,
      borderTopLeftRadius: radius.md,
      borderTopRightRadius: radius.md,
      borderTopWidth: 2,
      borderColor: colors.drawerWoodLight,
      overflow: "hidden",
    },
    drawerBackground: {
      flex: 1,
    },
    drawerBackgroundImage: {
      opacity: 0.95,
    },
    drawerContent: {
      paddingHorizontal: spacing.xl,
      paddingTop: spacing.sm,
      paddingBottom: spacing.xl,
      gap: spacing.sm,
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
  });
