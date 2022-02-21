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
      SchedulingDetails: undefined;
      SchedulingComplete: undefined;
    }
  }
}
