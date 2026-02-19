import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import AppText from "../../components/shared/typography/AppText";

export default function HelpScreen() {
  return (
    <ScreenContainer>
      <AppText variant="appTitle">Hilfe</AppText>
      <AppText variant="body">Hier kommen später FAQs und Erklärungen hin.</AppText>
    </ScreenContainer>
  );
}