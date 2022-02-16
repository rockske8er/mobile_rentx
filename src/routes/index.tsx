import { NavigationContainer } from "@react-navigation/native";

import { StackAppRoutes } from "./Stack.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <StackAppRoutes />
    </NavigationContainer>
  );
};

export { Routes };
