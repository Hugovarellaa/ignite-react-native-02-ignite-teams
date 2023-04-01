import { Group } from "@screens/Group";
import theme from "@theme/index";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Group />
    </ThemeProvider>
  );
}
