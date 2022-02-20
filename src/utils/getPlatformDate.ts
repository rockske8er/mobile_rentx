import { addDays } from "date-fns";

const getPlatformDate = (date: Date) => {
  return addDays(date, 1);
};

export { getPlatformDate };
