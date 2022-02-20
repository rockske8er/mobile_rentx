import { ICar } from "@contracts/ICar";

export type ProductNavigationProps = {
  id?: string;
};

export type OrderNavigationProps = {
  id: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: {
        car: ICar;
      };
      Scheduling: undefined;
      SchedulingDetails: undefined;
      SchedulingComplete: undefined;
    }
  }
}
