import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import RunScreen from "../screens/run/RunScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import StatsScreen from "../screens/stats/StatsScreen";
import HelpScreen from "../screens/help/HelpScreen";
import { RootStackParamList, routes } from "./routes";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={routes.run}>
        <RootStack.Screen name={routes.home} component={HomeScreen} options={{ headerShown: false }} />
        <RootStack.Screen name={routes.run} component={RunScreen} options={{ headerShown: false }} />
        <RootStack.Screen name={routes.settings} component={SettingsScreen} options={{ title: "Einstellungen" }} />
        <RootStack.Screen name={routes.profile} component={ProfileScreen} options={{ title: "Profil" }} />
        <RootStack.Screen name={routes.stats} component={StatsScreen} options={{ title: "Statistiken" }} />
        <RootStack.Screen name={routes.help} component={HelpScreen} options={{ title: "Hilfe" }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}