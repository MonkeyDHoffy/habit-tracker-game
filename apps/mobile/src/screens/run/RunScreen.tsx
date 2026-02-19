import { useEffect, useRef, useState } from "react";
import { Animated, Image, PanResponder, Pressable, useWindowDimensions, View } from "react-native";
import AppText from "../../components/shared/typography/AppText";
import { useTheme } from "../../theme/ThemeProvider";
import HomeScreen from "../home/HomeScreen";
import { createRunScreenStyles } from "./RunScreen.styles";

const battleBackground = require("../../../assets/background/four.png");
const pigEnemyImage = require("../../../assets/pigpics/pigone.png");
const DEBUG_LAYOUT = false;

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

  // Drawer sizing: small visible handle when closed, larger menu when opened.
  const drawerHeight = Math.min(460, Math.round(screenHeight * 0.58));
  const closedOffset = drawerHeight - 92;
  const selectedPigPreset = PIG_PRESET_CONFIG[PIG_PRESET];

  // Pig should sit centered above the drawer when the drawer is fully opened.
  const enemySize = Math.min(selectedPigPreset.maxSize, Math.round(screenWidth * selectedPigPreset.sizeRatio));
  const enemyBottomOffset = drawerHeight + selectedPigPreset.bottomGap;
  const enemyLeft = (screenWidth - enemySize) / 2 + selectedPigPreset.horizontalOffset;

  const drawerTranslateY = useRef(new Animated.Value(closedOffset)).current;
  const dragStartY = useRef(closedOffset);
  const [isHomeOverlayVisible, setIsHomeOverlayVisible] = useState(false);
  const homeTranslateX = useRef(new Animated.Value(screenWidth)).current;

  useEffect(() => {
    if (!isHomeOverlayVisible) {
      homeTranslateX.setValue(screenWidth);
    }
  }, [homeTranslateX, isHomeOverlayVisible, screenWidth]);

  function animateDrawer(toValue: number) {
    Animated.spring(drawerTranslateY, {
      toValue,
      useNativeDriver: true,
      bounciness: 0,
      speed: 16,
    }).start();
  }

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

  const drawerPanResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 6,
      onPanResponderGrant: () => {
        drawerTranslateY.stopAnimation((value) => {
          dragStartY.current = value;
        });
      },
      onPanResponderMove: (_, gestureState) => {
        const nextValue = Math.max(0, Math.min(closedOffset, dragStartY.current + gestureState.dy));
        drawerTranslateY.setValue(nextValue);
      },
      onPanResponderRelease: (_, gestureState) => {
        const currentValue = Math.max(0, Math.min(closedOffset, dragStartY.current + gestureState.dy));

        // If user drags enough upward, open drawer, else snap back closed.
        if (currentValue < closedOffset * 0.55 || gestureState.vy < -0.45) {
          animateDrawer(0);
          return;
        }

        animateDrawer(closedOffset);
      },
    })
  ).current;

  return (
    <View style={[runScreenStyles.root, debugStyle]}>
      <View style={[runScreenStyles.imageWrapper, debugStyle]}>
        <Image source={battleBackground} style={runScreenStyles.image} resizeMode="stretch" />
      </View>

      {/* Small gear button in the top-right corner */}
      <Pressable style={[runScreenStyles.gearButton, debugStyle]} onPress={openHomeOverlay}>
        <AppText variant="body" style={runScreenStyles.gearIcon}>
          ⚙️
        </AppText>
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

      <Animated.View
        style={[
          runScreenStyles.bottomDrawer,
          debugStyle,
          { height: drawerHeight, transform: [{ translateY: drawerTranslateY }] },
        ]}
        {...drawerPanResponder.panHandlers}
      >
        <View style={runScreenStyles.handle} />
        <View style={runScreenStyles.grainLineStrong} />
        <View style={runScreenStyles.grainLineSoft} />
        <View style={runScreenStyles.textBlock}>
          <AppText variant="sectionTitle">Kampfmenü</AppText>
          <AppText variant="bodySmall">Zieh nach oben, um Routinen für den Tageskampf anzuzeigen.</AppText>

          {/* Placeholder content: this will later become the routine check menu */}
          <View style={runScreenStyles.menuList}>
            <AppText variant="body">• Gute Routinen (abhaken)</AppText>
            <AppText variant="body">• Schlechte Routinen (abhaken)</AppText>
            <AppText variant="body">• Tagesfortschritt</AppText>
            <AppText variant="body">• Kampf abschließen</AppText>
          </View>
        </View>
      </Animated.View>

      {/* Home screen slides in from right and sits above Run screen */}
      {isHomeOverlayVisible && (
        <Animated.View
          style={[runScreenStyles.homeOverlay, debugStyle, { transform: [{ translateX: homeTranslateX }] }]}
        >
          <HomeScreen />
          <Pressable style={runScreenStyles.closeOverlayButton} onPress={closeHomeOverlay}>
            <AppText variant="body" style={runScreenStyles.closeOverlayIcon}>
              ✕
            </AppText>
          </Pressable>
        </Animated.View>
      )}
    </View>
  );
}