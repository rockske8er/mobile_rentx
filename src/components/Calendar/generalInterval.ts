import { eachDayOfInterval, format } from "date-fns";
import { MarkedDatesProps, DayProps } from ".";
import theme from "@theme/index";
import { getPlatformDate } from "@utils/getPlatformDate";

const generalInterval = (startDate: DayProps, endDate: DayProps) => {
  let interval: MarkedDatesProps = {};

  console.log(startDate, endDate);
  eachDayOfInterval({
    start: new Date(startDate.timestamp),
    end: new Date(endDate.timestamp),
  }).forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          startDate.dateString === date || endDate.dateString === date
            ? theme.Colors.Main
            : theme.Colors.MainLight,
        textColor:
          startDate.dateString === date || endDate.dateString === date
            ? theme.Colors.MainLight
            : theme.Colors.Main,
      },
    };
  });

  return interval;
};

export { generalInterval };
