import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function AppRoute() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
