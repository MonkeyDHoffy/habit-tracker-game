import { View } from "react-native";
import AppText from "../../../components/shared/typography/AppText";
import { runDrawerContentStyles } from "./RunDrawerContent.styles";

export default function RunDrawerContent() {
  return (
    <View style={runDrawerContentStyles.textBlock}>
      <AppText variant="sectionTitle">Kampfmenü</AppText>
      <AppText variant="bodySmall">Zieh nach oben, um Routinen für den Tageskampf anzuzeigen.</AppText>

      <View style={runDrawerContentStyles.menuList}>
        <AppText variant="body">• Gute Routinen (abhaken)</AppText>
        <AppText variant="body">• Schlechte Routinen (abhaken)</AppText>
        <AppText variant="body">• Tagesfortschritt</AppText>
        <AppText variant="body">• Kampf abschließen</AppText>
      </View>
    </View>
  );
}
