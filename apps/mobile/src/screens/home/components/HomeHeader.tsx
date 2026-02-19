import { View } from "react-native";
import AppText from "../../../components/shared/typography/AppText";
import { useTheme } from "../../../theme/ThemeProvider";
import { createHomeHeaderStyles } from "./HomeHeader.styles";

type HomeHeaderProps = {
  appTitle: string;
  screenTitle: string;
};

export default function HomeHeader({ appTitle, screenTitle }: HomeHeaderProps) {
  const { colors } = useTheme();
  const homeHeaderStyles = createHomeHeaderStyles(colors);

  return (
    <View style={homeHeaderStyles.container}>
      {/* Main title of the app */}
      <AppText variant="appTitle" style={homeHeaderStyles.appTitle}>
        {appTitle}
      </AppText>
      {/* Secondary title for the current screen */}
      {!!screenTitle && (
        <View style={homeHeaderStyles.subtitlePlaque}>
          <AppText variant="screenTitle" style={homeHeaderStyles.screenTitle}>
            {screenTitle}
          </AppText>
        </View>
      )}
    </View>
  );
}