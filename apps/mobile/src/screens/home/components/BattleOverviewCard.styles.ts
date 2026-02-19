import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";
import { radius } from "../../../theme/radius";

export const createBattleOverviewStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    rowHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: spacing.sm,
    },
    badge: {
      color: colors.subtitle,
    },
    barTrack: {
      height: 12,
      backgroundColor: colors.barBackground,
      borderRadius: radius.sm,
      overflow: "hidden",
      marginTop: spacing.xs,
    },
    barFill: {
      height: "100%",
    },
    pigBar: {
      backgroundColor: colors.pigHp,
    },
    playerBar: {
      backgroundColor: colors.playerHp,
    },
    metaRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: spacing.md,
    },
    metaLabel: {
      color: colors.subtitle,
    },
  });
