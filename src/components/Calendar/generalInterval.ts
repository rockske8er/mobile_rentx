import { eachDayOfInterval, format, parseISO } from "date-fns";
import { MarkedDatesProps, DayProps } from ".";
import theme from "@theme/index";

const generalInterval = (startDate: DayProps, endDate: DayProps) => {
  let interval: MarkedDatesProps = {};

  console.log(startDate, endDate);
  eachDayOfInterval({
    start: parseISO(startDate.dateString),
    end: parseISO(endDate.dateString),
  }).forEach((item) => {
    const date = format(item, "yyyy-MM-dd");

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
