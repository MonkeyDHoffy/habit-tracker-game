import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { radius } from "../../../theme/radius";
import { spacing } from "../../../theme/spacing";

export const createAppIconButtonStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    pressable: {
      borderRadius: 18,
    },
    pressed: {
      transform: [{ translateY: 1 }],
    },
    mount: {
      width: 46,
      height: 46,
      borderRadius: 23,
      backgroundColor: colors.drawerWoodDark,
      borderWidth: 1,
      borderColor: colors.buttonPlaqueBorder,
      padding: 2,
      shadowColor: colors.drawerWoodDark,
      shadowOpacity: 0.22,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    imageOnlyMount: {
      width: 46,
      height: 46,
      borderRadius: 23,
      overflow: "hidden",
      shadowColor: colors.drawerWoodDark,
      shadowOpacity: 0.2,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    imageOnlyFill: {
      width: "100%",
      height: "100%",
    },
    shield: {
      flex: 1,
      borderRadius: 18,
      borderWidth: 2,
      borderColor: colors.buttonGoldBorder,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
    },
    icon: {
      color: colors.buttonLabel,
      fontWeight: "800",
      fontSize: 17,
      lineHeight: 20,
    },
    nail: {
      position: "absolute",
      width: 4,
      height: 4,
      borderRadius: radius.sm,
      backgroundColor: colors.buttonNail,
      borderWidth: 0.75,
      borderColor: colors.buttonNailHighlight,
      zIndex: 2,
      shadowColor: colors.drawerWoodDark,
      shadowOpacity: 0.22,
      shadowRadius: 1,
      shadowOffset: { width: 0, height: 1 },
    },
    nailTopLeft: { top: 5, left: 5 },
    nailTopRight: { top: 5, right: 5 },
  });

export type AppIconButtonStyle = StyleProp<ViewStyle>;
