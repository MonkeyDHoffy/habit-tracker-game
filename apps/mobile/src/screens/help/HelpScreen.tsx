import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import AppText from "../../components/shared/typography/AppText";

export default function HelpScreen() {
  return (
    <ScreenContainer>
      <AppText variant="appTitle">Hilfe</AppText>
      <AppText variant="body">Hier findest du bald FAQ, Spielregeln und klare Erklärungen zu Routinen und Runs.</AppText>
    </ScreenContainer>
  );
}