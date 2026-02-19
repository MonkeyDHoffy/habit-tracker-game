import { useEffect, useRef, useState } from "react";
import { Animated, Image, Pressable, useWindowDimensions, View } from "react-native";
import AppIconButton from "../../components/shared/buttons/AppIconButton";
import BottomDrawer from "../../components/shared/containers/BottomDrawer";
import { useTheme } from "../../theme/ThemeProvider";
import HomeScreen from "../home/HomeScreen";
import RunDrawerContent from "./components/RunDrawerContent";
import { createRunScreenStyles } from "./RunScreen.styles";

const battleBackground = require("../../../assets/background/four.png");
const pigEnemyImage = require("../../../assets/pigpics/pigone.png");
const gearIconImage = require("../../../assets/icons/gear.png");
const closeIconImage = require("../../../assets/icons/close.png");
const DEBUG_LAYOUT = false;
const DRAWER_HEIGHT_RATIO = 0.58;
const DRAWER_MAX_HEIGHT = 460;
const DRAWER_PEEK_HEIGHT = 92;

// Presets for pig size/position above the drawer.
// Change only this one value to test a different look: "small" | "medium" | "large" | "cinematic"
const PIG_PRESET: "small" | "medium" | "large" | "cinematic" = "cinematic";

const PIG_PRESET_CONFIG = {
  small: {
    sizeRatio: 0.3,
    maxSize: 140,
    bottomGap: 6,
    horizontalOffset: 0,
  },
  medium: {
    sizeRatio: 0.36,
    maxSize: 170,
    bottomGap: 10,
    horizontalOffset: 0,
  },
  large: {
    sizeRatio: 0.42,
    maxSize: 205,
    bottomGap: 14,
    horizontalOffset: 0,
  },
  cinematic: {
    sizeRatio: 0.68,
    maxSize: 335,
    bottomGap: -65,
    horizontalOffset: 0,
  },
} as const;

export default function RunScreen() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const { colors } = useTheme();
  const runScreenStyles = createRunScreenStyles(colors);
  const debugStyle = DEBUG_LAYOUT ? runScreenStyles.debugOutline : undefined;

  const drawerHeight = Math.min(DRAWER_MAX_HEIGHT, Math.round(screenHeight * DRAWER_HEIGHT_RATIO));
  const selectedPigPreset = PIG_PRESET_CONFIG[PIG_PRESET];

  // Pig should sit centered above the drawer when the drawer is fully opened.
  const enemySize = Math.min(selectedPigPreset.maxSize, Math.round(screenWidth * selectedPigPreset.sizeRatio));
  const enemyBottomOffset = drawerHeight + selectedPigPreset.bottomGap;
  const enemyLeft = (screenWidth - enemySize) / 2 + selectedPigPreset.horizontalOffset;

  const [isBattleDrawerOpen, setIsBattleDrawerOpen] = useState(false);
  const [isHomeOverlayVisible, setIsHomeOverlayVisible] = useState(false);
  const homeTranslateX = useRef(new Animated.Value(screenWidth)).current;

  useEffect(() => {
    if (!isHomeOverlayVisible) {
      homeTranslateX.setValue(screenWidth);
    }
  }, [homeTranslateX, isHomeOverlayVisible, screenWidth]);

  function openHomeOverlay() {
    setIsHomeOverlayVisible(true);
    Animated.timing(homeTranslateX, {
      toValue: 0,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }

  function closeHomeOverlay() {
    Animated.timing(homeTranslateX, {
      toValue: screenWidth,
      duration: 220,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setIsHomeOverlayVisible(false);
      }
    });
  }

  return (
    <View style={[runScreenStyles.root, debugStyle]}>
      <View style={[runScreenStyles.imageWrapper, debugStyle]}>
        <Image source={battleBackground} style={runScreenStyles.image} resizeMode="stretch" />
      </View>

      {/* Small gear button in the top-right corner */}
      <Pressable style={[runScreenStyles.gearButton, debugStyle]} onPress={openHomeOverlay}>
        <Image source={gearIconImage} style={runScreenStyles.gearIconImage} resizeMode="contain" />
      </Pressable>

      {/* Pig enemy container: centered and placed just above max-open drawer */}
      <View
        pointerEvents="none"
        style={[
          runScreenStyles.enemyContainer,
          debugStyle,
          { width: enemySize, height: enemySize, left: enemyLeft, bottom: enemyBottomOffset },
        ]}
      >
        <Image source={pigEnemyImage} style={runScreenStyles.enemyImage} resizeMode="contain" />
      </View>

      <BottomDrawer
        mode="persistent-peek"
        isOpen={isBattleDrawerOpen}
        onOpenChange={setIsBattleDrawerOpen}
        drawerHeightRatio={DRAWER_HEIGHT_RATIO}
        drawerMaxHeight={DRAWER_MAX_HEIGHT}
        peekHeight={DRAWER_PEEK_HEIGHT}
      >
        <RunDrawerContent />
      </BottomDrawer>

      {/* Home screen slides in from right and sits above Run screen */}
      {isHomeOverlayVisible && (
        <Animated.View
          style={[runScreenStyles.homeOverlay, debugStyle, { transform: [{ translateX: homeTranslateX }] }]}
        >
          <HomeScreen />
          <AppIconButton
            imageSource={closeIconImage}
            onPress={closeHomeOverlay}
            style={runScreenStyles.closeOverlayButton}
            accessibilityLabel="Overlay schließen"
          />
        </Animated.View>
      )}
    </View>
  );
}