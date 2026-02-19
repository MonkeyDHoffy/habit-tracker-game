import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import AppText from "../../components/shared/typography/AppText";

export default function SettingsScreen() {
  return (
    <ScreenContainer>
      <AppText variant="appTitle">Einstellungen</AppText>
      <AppText variant="body">Schweinehund folgt einer einheitlichen, rustikalen Designlinie.</AppText>
      <AppText variant="body">Hier verwaltest du künftig Sprache, Benachrichtigungen und Kontooptionen.</AppText>
    </ScreenContainer>
  );
}