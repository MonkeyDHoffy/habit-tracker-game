export const lightColors = {
  background: "#f4efe6",
  cardBackground: "#ffffff",
  title: "#1d2d44",
  text: "#243b53",
  subtitle: "#324a5f",
  primary: "#2a9d8f",
  menuButton: "#e8f1f2",
  onPrimary: "#ffffff",
  playerHp: "#2a9d8f",
  pigHp: "#d0553b",
  shield: "#3b82f6",
  rage: "#f97316",
  streak: "#8b5cf6",
  barBackground: "#e4e7eb",
};

export const darkColors = {
  background: "#0f1215",
  cardBackground: "#1a2025",
  title: "#f2f6f9",
  text: "#d0d6db",
  subtitle: "#a7b0b8",
  primary: "#2a9d8f",
  menuButton: "#20292f",
  onPrimary: "#ffffff",
  playerHp: "#34d399",
  pigHp: "#fb7185",
  shield: "#60a5fa",
  rage: "#fb923c",
  streak: "#c084fc",
  barBackground: "#2a3238",
};

export type ThemeColors = typeof lightColors;

// Default palette (keeps existing imports working)
export const colors = lightColors;