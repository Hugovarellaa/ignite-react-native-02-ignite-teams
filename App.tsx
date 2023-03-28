import { Group } from "@screens/Group";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Group />
    </ThemeProvider>
  );
}
