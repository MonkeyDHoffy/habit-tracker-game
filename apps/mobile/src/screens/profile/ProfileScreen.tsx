import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import AppText from "../../components/shared/typography/AppText";

export default function ProfileScreen() {
  return (
    <ScreenContainer>
      <AppText variant="appTitle">Profil</AppText>
      <AppText variant="body">Hier entsteht dein Spielerprofil.</AppText>
    </ScreenContainer>
  );
}