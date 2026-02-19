import { ReactNode } from "react";
import { SafeAreaView, ScrollView, StyleProp, View, ViewStyle } from "react-native";
import { useTheme } from "../../../theme/ThemeProvider";
import { createScreenContainerStyles } from "./ScreenContainer.styles";

type ScreenContainerProps = {
  children: ReactNode;
  withScroll?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
};

export default function ScreenContainer({ children, withScroll = false, contentStyle }: ScreenContainerProps) {
  const { colors } = useTheme();
  const screenContainerStyles = createScreenContainerStyles(colors);

  if (withScroll) {
    return (
      <SafeAreaView style={screenContainerStyles.root}>
        {/* ScrollView is used when the screen content might be taller than the device */}
        <ScrollView contentContainerStyle={[screenContainerStyles.content, contentStyle]}>
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={screenContainerStyles.root}>
      {/* Use a simple View when scrolling is not needed */}
      <View style={[screenContainerStyles.content, contentStyle]}>{children}</View>
    </SafeAreaView>
  );
}