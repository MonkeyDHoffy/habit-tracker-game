import AppButton from "../../../components/shared/buttons/AppButton";
import AppText from "../../../components/shared/typography/AppText";
import SectionContainer from "../../../components/shared/containers/SectionContainer";
import { useTheme } from "../../../theme/ThemeProvider";
import { createRunCardStyles } from "./RunCard.styles";

type RunCardProps = {
  sectionTitle: string;
  runStatusLabel: string;
  startRunButtonLabel: string;
  onStartNewRun: () => void;
};

export default function RunCard({
  sectionTitle,
  runStatusLabel,
  startRunButtonLabel,
  onStartNewRun,
}: RunCardProps) {
  const { colors } = useTheme();
  const runCardStyles = createRunCardStyles(colors);

  return (
    <SectionContainer title={sectionTitle}>
      {/* Small status text about the current run */}
      <AppText variant="bodySmall" style={runCardStyles.runText}>
        {runStatusLabel}
      </AppText>
      {/* Primary action to start a new run */}
      <AppButton label={startRunButtonLabel} onPress={onStartNewRun} />
    </SectionContainer>
  );
}