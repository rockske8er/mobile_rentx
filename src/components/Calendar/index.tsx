import {
  Calendar as RNCaledar,
  LocaleConfig,
  CalendarProps,
} from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { ptBR } from "./LocaleConfig";
import { generalInterval } from "./generalInterval";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

type MarkedDatesProps = {
  [dates: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
};

type DayProps = {
  year: number;
  month: number;
  day: number;
  timestamp: number;
  dateString: string;
};

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const { Colors, Fonts } = useTheme();
  return (
    <RNCaledar
      headerStyle={{
        backgroundColor: Colors.BgSecondary,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.TextDetail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={Colors.Text}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      theme={{
        textDayFontFamily: Fonts.Primary400,
        textDayHeaderFontFamily: Fonts.Primary500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: Colors.Title,
        textMonthFontFamily: Fonts.Secondary600,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      minDate={String(new Date())}
      firstDay={1}
      markingType={"period"}
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
};

export { Calendar, MarkedDatesProps, DayProps, generalInterval };
