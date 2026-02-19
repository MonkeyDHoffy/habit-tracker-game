import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";

export const createRunCardStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    runText: {
      fontSize: 14,
      color: colors.text,
    },
  });