import { StyleSheet } from "react-native";
import { ThemeColors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";
import { radius } from "../../../theme/radius";

export const createBattleOverviewStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.drawerWoodHandle,
      borderWidth: 1,
      borderColor: colors.drawerWoodLight,
    },
    title: {
      color: colors.drawerWoodDark,
    },
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
      gap: spacing.sm,
    },
    metaLabel: {
      color: colors.drawerWoodDark,
    },
    metaBlock: {
      flex: 1,
      backgroundColor: colors.cardBackground,
      borderRadius: radius.sm,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
    },
  });
