import { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createInitialBattleState } from "@schweinehund/game-core";
import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import HomeHeader from "./components/HomeHeader";
import BattleOverviewCard from "./components/BattleOverviewCard";
import MainMenu from "./components/MainMenu";
import RunCard from "./components/RunCard";
import { homeScreenStyles } from "./HomeScreen.styles";
import { RootStackParamList, routes } from "../../navigation/routes";
import { formatActiveRunText, homeMenuItems, homeScreenConfig, HomeMenuItemId } from "./homeScreen.config";

type Run = {
  id: string;
  startedAt: string;
};

type HomeNavigation = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>();
  const [activeRun, setActiveRun] = useState<Run | null>(null);

  const runStatusLabel = useMemo(() => {
    if (!activeRun) {
      return homeScreenConfig.noActiveRunText;
    }

    return formatActiveRunText(activeRun.id, activeRun.startedAt);
  }, [activeRun]);

  function handleStartNewRun() {
    const initialState = createInitialBattleState();
    const newRunId = `RUN-${initialState.day}-${Date.now().toString().slice(-5)}`;
    const startedAt = new Date().toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setActiveRun({ id: newRunId, startedAt });
    navigation.navigate(routes.run);
  }

  function handleMenuSelect(menuItemId: HomeMenuItemId) {
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
      <HomeHeader appTitle={homeScreenConfig.header.appTitle} screenTitle={homeScreenConfig.header.screenTitle} />
      <BattleOverviewCard
        pigHp={740}
        pigMaxHp={1000}
        pigRage={3}
        playerHp={620}
        playerMaxHp={1000}
        playerShield={4}
        runDay={7}
        dailyStreak={6}
        routinesDone={5}
        routinesTotal={6}
      />
      <MainMenu
        sectionTitle={homeScreenConfig.menuSectionTitle}
        menuItems={homeMenuItems}
        onSelectMenuItem={handleMenuSelect}
      />
      <RunCard
        sectionTitle={homeScreenConfig.runSectionTitle}
        runStatusLabel={runStatusLabel}
        startRunButtonLabel={homeScreenConfig.newRunButtonLabel}
        onStartNewRun={handleStartNewRun}
      />
      
     
    </ScreenContainer>
  );
}