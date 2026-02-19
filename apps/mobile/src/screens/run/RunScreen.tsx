import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import AppText from "../../components/shared/typography/AppText";

export default function RunScreen() {
  return (
    <ScreenContainer>
      <AppText variant="appTitle">Run</AppText>
      <AppText variant="body">Hier entsteht der aktive Run-Bildschirm.</AppText>
    </ScreenContainer>
  );
}