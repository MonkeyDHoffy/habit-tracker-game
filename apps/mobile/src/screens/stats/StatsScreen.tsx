import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import AppText from "../../components/shared/typography/AppText";

export default function StatsScreen() {
  return (
    <ScreenContainer>
      <AppText variant="appTitle">Statistiken</AppText>
      <AppText variant="body">Hier zeigen wir später Progress und Trends.</AppText>
    </ScreenContainer>
  );
}