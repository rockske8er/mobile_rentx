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
import { useNavigation } from "@react-navigation/native";

import {
  Calendar,
  DayProps,
  generalInterval,
  MarkedDatesProps,
} from "@components/Calendar";
import { useState } from "react";
import { format, parseISO } from "date-fns";
import { getPlatformDate } from "@utils/getPlatformDate";

interface RentalPeriodProps {
  start: number;
  startDateFormatted: string;
  end: number;
  endDateFormatted: string;
}

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

  const { navigate, goBack } = useNavigation();
  const { Colors } = useTheme();

  const handleSchedulingDetails = () => {
    navigate("SchedulingDetails");
  };

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
      start: startDate.timestamp,
      end: endDate.timestamp,
      startDateFormatted: format(
        getPlatformDate(parseISO(firstDate)),
        "dd/MM/yyyy"
      ),
      endDateFormatted: format(
        getPlatformDate(parseISO(lastDate)),
        "dd/MM/yyyy"
      ),
    });

    console.log(rentalPeriod.startDateFormatted);
    console.log(rentalPeriod.endDateFormatted);
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
        <Button name="Confirmar" onPress={handleSchedulingDetails} />
      </Footer>
    </Container>
  );
}

export { Scheduling };
