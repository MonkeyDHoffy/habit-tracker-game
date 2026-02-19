import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { darkColors, lightColors, ThemeColors } from "./colors";

export type ThemeMode = "light" | "dark" | "system";

type ThemeContextValue = {
  colors: ThemeColors;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>("system");

  const resolvedMode = mode === "system" ? systemScheme || "light" : mode;
  const isDark = resolvedMode === "dark";
  const colors = isDark ? darkColors : lightColors;

  const value = useMemo(
    () => ({
      colors,
      mode,
      setMode,
      isDark,
    }),
    [colors, mode, isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
