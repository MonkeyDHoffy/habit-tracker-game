import { spacing } from "../../theme/spacing";

export type HomeMenuItemId = "profile" | "stats" | "settings" | "help";

export type HomeMenuItem = {
  id: HomeMenuItemId;
  label: string;
};

// Central place to tweak home screen copy and lightweight layout values.
export const homeScreenConfig = {
  header: {
    appTitle: "Schweinehund",
    screenTitle: "Startseite",
  },
  menuSectionTitle: "Mehr",
  runSectionTitle: "Run",
  newRunButtonLabel: "Neuen Run starten",
  noActiveRunText: "Kein aktiver Run",
  contentGap: spacing.lg,
} as const;

export const homeMenuItems: HomeMenuItem[] = [
  { id: "profile", label: "Profil" },
  { id: "stats", label: "Statistiken" },
  { id: "settings", label: "Einstellungen" },
  { id: "help", label: "Hilfe" },
];

export function formatActiveRunText(runId: string, startedAt: string): string {
  return `Aktiver Run: ${runId} (${startedAt})`;
}