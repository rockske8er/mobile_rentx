import { useTheme } from "styled-components";
import { Button, BackButton } from "@components/index";
import { ArrowIcon } from "@assets/index";

import {
  Container,
  Header,
  Heading,
  RentPeriod,
  Date,
  DateTitle,
  DateStart,
  DateEnd,
  Wrapper,
  Footer,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Calendar,
  DayProps,
  generalInterval,
  MarkedDatesProps,
} from "@components/Calendar";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import { Alert } from "react-native";
import { ICar } from "@contracts/ICar";

interface RentalPeriodProps {
  startDateFormatted: string;
  endDateFormatted: string;
}

type Params = {
  car: ICar;
};

function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  const [markedDate, setMarkedDate] = useState<MarkedDatesProps>(
    {} as MarkedDatesProps
  );

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );

  const { Colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const handleChangeDate = (date: DayProps) => {
    let startDate = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let endDate = date;

    if (startDate.timestamp > endDate.timestamp) {
      startDate = endDate;
      endDate = startDate;
    }

    setLastSelectedDate(endDate);

    const interval = generalInterval(startDate, endDate);

    setMarkedDate(interval);

    const firstDate = Object.keys(interval)[0];
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startDateFormatted: format(parseISO(firstDate), "dd/MM/yyyy"),
      endDateFormatted: format(parseISO(lastDate), "dd/MM/yyyy"),
    });
  };

  const handleSchedulingDetails = () => {
    navigate("SchedulingDetails", {
      car,
      dates: Object.keys(markedDate),
    });
  };

  return (
    <Container>
      <Header>
        <BackButton color={Colors.BgSecondary} onPress={goBack} />

        <Heading>Escolha uma data de início e fim do aluguel</Heading>

        <RentPeriod>
          <Date>
            <DateTitle>De</DateTitle>
            <DateStart selected={!!rentalPeriod.startDateFormatted}>
              {rentalPeriod.startDateFormatted}
            </DateStart>
          </Date>

          <ArrowIcon />

          <Date>
            <DateTitle>Até</DateTitle>
            <DateEnd selected={!!rentalPeriod.endDateFormatted}>
              {rentalPeriod.endDateFormatted}
            </DateEnd>
          </Date>
        </RentPeriod>
      </Header>

      <Wrapper
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Calendar markedDates={markedDate} onDayPress={handleChangeDate} />
      </Wrapper>

      <Footer>
        <Button
          name="Confirmar"
          onPress={handleSchedulingDetails}
          enabled={!!rentalPeriod.endDateFormatted}
        />
      </Footer>
    </Container>
  );
}

export { Scheduling };
