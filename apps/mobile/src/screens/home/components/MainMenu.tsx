import { useState } from "react";
import { Pressable, View } from "react-native";
import AppButton from "../../../components/shared/buttons/AppButton";
import AppCard from "../../../components/shared/cards/AppCard";
import AppText from "../../../components/shared/typography/AppText";
import { useTheme } from "../../../theme/ThemeProvider";
import { HomeMenuItem, HomeMenuItemId } from "../homeScreen.config";
import { createMainMenuStyles } from "./MainMenu.styles";

type MainMenuProps = {
  sectionTitle: string;
  menuItems: HomeMenuItem[];
  onSelectMenuItem: (menuItemId: HomeMenuItemId) => void;
};

export default function MainMenu({ sectionTitle, menuItems, onSelectMenuItem }: MainMenuProps) {
  const { colors } = useTheme();
  const mainMenuStyles = createMainMenuStyles(colors);

  // The menu starts collapsed and opens when the user taps the header.
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <AppCard>
      <Pressable style={mainMenuStyles.header} onPress={handleToggleMenu}>
        <AppText variant="sectionTitle">{sectionTitle}</AppText>
        <AppText variant="bodySmall" style={mainMenuStyles.toggleHint}>
          {isOpen ? "▲" : "▼"}
        </AppText>
      </Pressable>
      {isOpen && (
        <View style={mainMenuStyles.menuContent}>
          {/* Render one menu button per item */}
          {menuItems.map((menuItem) => (
            <AppButton
              key={menuItem.id}
              label={menuItem.label}
              variant="menu"
              // When pressed, pass the item id back to the parent screen
              onPress={() => onSelectMenuItem(menuItem.id)}
            />
          ))}
        </View>
      )}
    </AppCard>
  );
}