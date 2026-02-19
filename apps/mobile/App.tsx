import RootNavigator from "./src/navigation/RootNavigator";
import { ThemeProvider } from "./src/theme/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}