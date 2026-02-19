import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import { useTheme } from "../../theme/ThemeProvider";
import AppButton from "../../components/shared/buttons/AppButton";
import { createHomeScreenStyles } from "./HomeScreen.styles";
import { RootStackParamList, routes } from "../../navigation/routes";
import { homeMenuItems, homeScreenConfig, HomeMenuItemId } from "./homeScreen.config";

type HomeNavigation = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>();
  const { colors } = useTheme();
  const homeScreenStyles = createHomeScreenStyles(colors);

  function handleStartNewRun() {
    navigation.navigate(routes.run);
  }

  function handleOpenHabits() {
    navigation.navigate(routes.routines);
  }

  function handleMenuSelect(menuItemId: HomeMenuItemId) {
    if (menuItemId === "run") {
      handleStartNewRun();
      return;
    }

    if (menuItemId === "profile") {
      navigation.navigate(routes.profile);
      return;
    }

    if (menuItemId === "stats") {
      navigation.navigate(routes.stats);
      return;
    }

    if (menuItemId === "settings") {
      navigation.navigate(routes.settings);
      return;
    }

    navigation.navigate(routes.help);
  }

  return (
    <ScreenContainer contentStyle={homeScreenStyles.content}>
      <Image source={require("../../../assets/background/wood.png")} style={homeScreenStyles.backgroundImage} resizeMode="cover" />
      <View pointerEvents="none" style={homeScreenStyles.backgroundOverlay} />

      <View style={homeScreenStyles.actionsList}>
        <View style={[homeScreenStyles.actionSlot, homeScreenStyles.firstActionSlot]}>
          <AppButton label={homeScreenConfig.habitsButtonLabel} variant="menu" onPress={handleOpenHabits} />
        </View>
        {homeMenuItems.map((menuItem) => (
          <View key={menuItem.id} style={homeScreenStyles.actionSlot}>
            <AppButton label={menuItem.label} variant="menu" onPress={() => handleMenuSelect(menuItem.id)} />
          </View>
        ))}
      </View>
    </ScreenContainer>
  );
}