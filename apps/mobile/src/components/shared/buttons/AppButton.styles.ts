import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

export const createAppButtonStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pressable: {
      borderRadius: radius.sm,
    },
    pressed: {
      transform: [{ translateY: 1 }],
    },
    mount: {
      borderRadius: radius.sm,
      padding: 0,
      shadowColor: colors.drawerWoodDark,
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    shield: {
      borderRadius: radius.sm,
      borderWidth: 2,
      borderColor: colors.buttonGoldBorder,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.md,
      overflow: "hidden",
      position: "relative",
    },
    primary: {
      justifyContent: "center",
    },
    menu: {
      justifyContent: "center",
    },
    label: {
      color: colors.buttonLabel,
      fontWeight: "700",
      fontSize: 15,
    },
    primaryLabel: {
      textAlign: "center",
      letterSpacing: 0.3,
    },
    menuLabel: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 15,
    },
    nail: {
      position: "absolute",
      width: 6,
      height: 6,
      borderRadius: radius.sm,
      backgroundColor: colors.buttonNail,
      borderWidth: 0.75,
      borderColor: colors.buttonNailHighlight,
      zIndex: 2,
      shadowColor: colors.drawerWoodDark,
      shadowOpacity: 0.25,
      shadowRadius: 1.5,
      shadowOffset: { width: 0, height: 1 },
    },
    nailTopLeft: { top: 7, left: 10 },
    nailTopRight: { top: 7, right: 10 },
  });