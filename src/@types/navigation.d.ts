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
      CarDetails: undefined;
      Scheduling: undefined;
      SchedulingDetails: undefined;
      SchedulingComplete: undefined;
    }
  }
}
