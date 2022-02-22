import { ICar } from "@contracts/ICar";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: {
        car: ICar;
      };
      Scheduling: {
        car: ICar;
      };
      SchedulingDetails: {
        car: ICar;
        dates: string[];
      };
      SchedulingComplete: undefined;
      MyCars: NavigationStackProp<any, any>;
    }
  }
}

// declare namespace ReactNavigation {
//   export interface RootParamList extends RootStackParamList {
//     Home: NavigationStackProp<any, any>;
//     CarDetails: NavigationStackProp<any, any>;
//     Scheduling: NavigationStackProp<any, any>;
//     SchedulingDetails: NavigationStackProp<any, any>;
//     Confirmation: NavigationStackProp<any, any>;
//     MyCars: NavigationStackProp<any, any>;
//     SignIn: NavigationStackProp<any, any>;
//     FirstStep: NavigationStackProp<any, any>;
//     SecondStep: NavigationStackProp<any, any>;
//   }
// }
