import { StyleSheet, View } from "react-native";
import ScreenContainer from "../../components/shared/containers/ScreenContainer";
import SectionContainer from "../../components/shared/containers/SectionContainer";
import AppButton from "../../components/shared/buttons/AppButton";
import AppText from "../../components/shared/typography/AppText";
import { useTheme } from "../../theme/ThemeProvider";

export default function SettingsScreen() {
  const { mode, setMode, isDark } = useTheme();

  return (
    <ScreenContainer>
      <AppText variant="appTitle">Einstellungen</AppText>
      {/* First settings section: theme selection */}
      <SectionContainer title="Theme">
        <AppText variant="bodySmall">Aktuell: {mode === "system" ? "System" : isDark ? "Dark" : "Light"}</AppText>
        <View style={settingsStyles.buttonGroup}>
          <AppButton label="System" variant="menu" onPress={() => setMode("system")} />
          <AppButton label="Light" variant="menu" onPress={() => setMode("light")} />
          <AppButton label="Dark" variant="menu" onPress={() => setMode("dark")} />
        </View>
      </SectionContainer>
      <AppText variant="body">Hier kommen spaeter deine App-Einstellungen hin.</AppText>
    </ScreenContainer>
  );
}

const settingsStyles = StyleSheet.create({
  buttonGroup: {
    gap: 8,
    marginTop: 8,
  },
});