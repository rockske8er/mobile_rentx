import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Home,
  CarDetails,
  Scheduling,
  SchedulingDetails,
  SchedulingComplete,
} from "@screens/index";

const { Screen, Navigator, Group } = createNativeStackNavigator();

const StackAppRoutes = () => {
  return (
    <Navigator>
      <Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="CarDetails" component={CarDetails} />
        <Screen name="Scheduling" component={Scheduling} />
        <Screen name="SchedulingDetails" component={SchedulingDetails} />
        <Screen name="SchedulingComplete" component={SchedulingComplete} />
      </Group>
    </Navigator>
  );
};

export { StackAppRoutes };
