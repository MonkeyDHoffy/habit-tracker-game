import { View } from "react-native";
import AppText from "../../../components/shared/typography/AppText";
import { homeHeaderStyles } from "./HomeHeader.styles";

type HomeHeaderProps = {
  appTitle: string;
  screenTitle: string;
};

export default function HomeHeader({ appTitle, screenTitle }: HomeHeaderProps) {
  return (
    <View style={homeHeaderStyles.container}>
      {/* Main title of the app */}
      <AppText variant="appTitle">{appTitle}</AppText>
      {/* Secondary title for the current screen */}
      <AppText variant="screenTitle">{screenTitle}</AppText>
    </View>
  );
}