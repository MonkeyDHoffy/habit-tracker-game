import { View } from "react-native";
import AppCard from "../../../components/shared/cards/AppCard";
import AppText from "../../../components/shared/typography/AppText";
import { useTheme } from "../../../theme/ThemeProvider";
import { createBattleOverviewStyles } from "./BattleOverviewCard.styles";

type BattleOverviewCardProps = {
  pigHp: number;
  pigMaxHp: number;
  pigRage: number;
  playerHp: number;
  playerMaxHp: number;
  playerShield: number;
  runDay: number;
  dailyStreak: number;
  routinesDone: number;
  routinesTotal: number;
};

export default function BattleOverviewCard({
  pigHp,
  pigMaxHp,
  pigRage,
  playerHp,
  playerMaxHp,
  playerShield,
  runDay,
  dailyStreak,
  routinesDone,
  routinesTotal,
}: BattleOverviewCardProps) {
  const { colors } = useTheme();
  const styles = createBattleOverviewStyles(colors);

  const pigPercent = Math.round((pigHp / pigMaxHp) * 100);
  const playerPercent = Math.round((playerHp / playerMaxHp) * 100);

  return (
    <AppCard style={styles.card}>
      <AppText variant="sectionTitle" style={styles.title}>
        Kampfübersicht
      </AppText>

      {/* Pig health row */}
      <View style={styles.rowHeader}>
        <AppText variant="body">Schweinehund</AppText>
        <AppText variant="bodySmall" style={styles.badge}>
          Zorn: {pigRage}
        </AppText>
      </View>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, styles.pigBar, { width: `${pigPercent}%` }]} />
      </View>

      {/* Player health row */}
      <View style={styles.rowHeader}>
        <AppText variant="body">Spieler</AppText>
        <AppText variant="bodySmall" style={styles.badge}>
          Schild: {playerShield}
        </AppText>
      </View>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, styles.playerBar, { width: `${playerPercent}%` }]} />
      </View>

      {/* Meta stats */}
      <View style={styles.metaRow}>
        <View style={styles.metaBlock}>
          <AppText variant="bodySmall" style={styles.metaLabel}>
            Run-Tag
          </AppText>
          <AppText variant="body">Tag {runDay}</AppText>
        </View>
        <View style={styles.metaBlock}>
          <AppText variant="bodySmall" style={styles.metaLabel}>
            Daily Streak
          </AppText>
          <AppText variant="body">{dailyStreak} Tage</AppText>
        </View>
        <View style={styles.metaBlock}>
          <AppText variant="bodySmall" style={styles.metaLabel}>
            Routinen
          </AppText>
          <AppText variant="body">
            {routinesDone}/{routinesTotal}
          </AppText>
        </View>
      </View>
    </AppCard>
  );
}
