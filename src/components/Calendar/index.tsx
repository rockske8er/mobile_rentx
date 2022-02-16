import { Calendar as RNCaledar, LocaleConfig } from "react-native-calendars";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

interface Props {}

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

function Calendar({}: Props) {
  const { Colors, Fonts } = useTheme();
  return (
    <RNCaledar
      // minDate={String(new Date())}

      minDate={String(new Date())}
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
      firstDay={1}
    />
  );
}

export { Calendar };
