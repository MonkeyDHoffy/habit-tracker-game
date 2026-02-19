import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import AppText from "../../components/shared/typography/AppText";

export default function RoutinesScreen() {
  return (
    <ScreenContainer>
      <AppText variant="appTitle">Habits</AppText>
      <AppText variant="body">Hier legst und verwaltest du deine Routinen.</AppText>
    </ScreenContainer>
  );
}
