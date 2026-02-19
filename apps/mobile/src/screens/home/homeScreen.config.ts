import { spacing } from "../../theme/spacing";

export type HomeMenuItemId = "run" | "profile" | "stats" | "settings" | "help";

export type HomeMenuItem = {
  id: HomeMenuItemId;
  label: string;
};

// Central place to tweak home screen copy and lightweight layout values.
export const homeScreenConfig = {
  header: {
    appTitle: "Menü",
    screenTitle: "",
  },
  habitsButtonLabel: "Habits",
  runMenuItemLabel: "Neuen Run starten",
  contentGap: spacing.lg,
} as const;

export const homeMenuItems: HomeMenuItem[] = [
  { id: "run", label: homeScreenConfig.runMenuItemLabel },
  { id: "profile", label: "Profil" },
  { id: "stats", label: "Statistiken" },
  { id: "settings", label: "Einstellungen" },
  { id: "help", label: "Hilfe" },
];