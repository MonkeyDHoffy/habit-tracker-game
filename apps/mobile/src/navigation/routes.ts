export const routes = {
  home: "Home",
  run: "Run",
  settings: "Settings",
  profile: "Profile",
  stats: "Stats",
  help: "Help",
} as const;

export type RouteName = (typeof routes)[keyof typeof routes];

export type RootStackParamList = {
  Home: undefined;
  Run: undefined;
  Settings: undefined;
  Profile: undefined;
  Stats: undefined;
  Help: undefined;
};