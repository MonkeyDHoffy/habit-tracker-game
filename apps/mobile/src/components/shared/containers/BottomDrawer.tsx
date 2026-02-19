import { ReactNode, useEffect, useRef } from "react";
import { Animated, ImageBackground, PanResponder, Pressable, useWindowDimensions, View } from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import { createBottomDrawerStyles } from "./BottomDrawer.styles";

type BottomDrawerMode = "modal" | "persistent-peek";

type BottomDrawerProps = {
  isOpen: boolean;
  onClose?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
  children: ReactNode;
  drawerHeightRatio?: number;
  drawerMaxHeight?: number;
  mode?: BottomDrawerMode;
  peekHeight?: number;
};

export default function BottomDrawer({
  isOpen,
  onClose,
  onOpenChange,
  children,
  drawerHeightRatio = 0.58,
  drawerMaxHeight = 460,
  mode = "modal",
  peekHeight = 92,
}: BottomDrawerProps) {
  const { colors } = useTheme();
  const bottomDrawerStyles = createBottomDrawerStyles(colors);
  const { height: screenHeight } = useWindowDimensions();

  const drawerHeight = Math.min(drawerMaxHeight, Math.round(screenHeight * drawerHeightRatio));
  const closedOffset = mode === "persistent-peek" ? Math.max(0, drawerHeight - peekHeight) : drawerHeight;
  const drawerTranslateY = useRef(new Animated.Value(isOpen ? 0 : closedOffset)).current;
  const dragStartY = useRef(isOpen ? 0 : closedOffset);

  function animateTo(nextOpen: boolean) {
    Animated.spring(drawerTranslateY, {
      toValue: nextOpen ? 0 : closedOffset,
      useNativeDriver: true,
      bounciness: 0,
      speed: 16,
    }).start(({ finished }) => {
      if (!finished) {
        return;
      }

      if (!nextOpen) {
        onClose?.();
      }

      if (onOpenChange && nextOpen !== isOpen) {
        onOpenChange(nextOpen);
      }
    });
  }

  useEffect(() => {
    drawerTranslateY.setValue(isOpen ? 0 : closedOffset);
  }, [closedOffset, drawerTranslateY, isOpen]);

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

        if (mode === "persistent-peek") {
          if (currentValue < closedOffset * 0.55 || gestureState.vy < -0.45) {
            animateTo(true);
            return;
          }

          animateTo(false);
          return;
        }

        if (currentValue > closedOffset * 0.4 || gestureState.vy > 0.45) {
          animateTo(false);
          return;
        }

        animateTo(true);
      },
    })
  ).current;

  if (mode === "modal" && !isOpen) {
    return null;
  }

  if (mode === "persistent-peek") {
    return (
      <View pointerEvents="box-none" style={bottomDrawerStyles.persistentContainer}>
        <Animated.View
          style={[
            bottomDrawerStyles.drawer,
            {
              height: drawerHeight,
              transform: [{ translateY: drawerTranslateY }],
            },
          ]}
          {...drawerPanResponder.panHandlers}
        >
          <ImageBackground
            source={require("../../../../assets/background/wood.png")}
            style={bottomDrawerStyles.drawerBackground}
            imageStyle={bottomDrawerStyles.drawerBackgroundImage}
          >
            <View style={bottomDrawerStyles.drawerContent}>
              <View style={bottomDrawerStyles.handle} />
              <View style={bottomDrawerStyles.grainLineStrong} />
              <View style={bottomDrawerStyles.grainLineSoft} />
              {children}
            </View>
          </ImageBackground>
        </Animated.View>
      </View>
    );
  }

  return (
    <View pointerEvents="box-none" style={bottomDrawerStyles.overlay}>
      <Pressable style={bottomDrawerStyles.backdrop} onPress={() => animateTo(false)} />
      <Animated.View
        style={[
          bottomDrawerStyles.drawer,
          {
            height: drawerHeight,
            transform: [{ translateY: drawerTranslateY }],
          },
        ]}
        {...drawerPanResponder.panHandlers}
      >
        <ImageBackground
          source={require("../../../../assets/background/wood.png")}
          style={bottomDrawerStyles.drawerBackground}
          imageStyle={bottomDrawerStyles.drawerBackgroundImage}
        >
          <View style={bottomDrawerStyles.drawerContent}>
            <View style={bottomDrawerStyles.handle} />
            <View style={bottomDrawerStyles.grainLineStrong} />
            <View style={bottomDrawerStyles.grainLineSoft} />
            {children}
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
}
