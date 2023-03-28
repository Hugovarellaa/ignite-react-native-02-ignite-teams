import { Loading } from "@components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Group } from "@screens/Group";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoading] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoading ? <Group /> : <Loading />}
    </ThemeProvider>
  );
}