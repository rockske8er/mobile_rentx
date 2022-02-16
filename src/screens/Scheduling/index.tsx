import { useTheme } from "styled-components";

import { Calendar } from "@components/Calendar";
import { BackButton } from "@components/index";
import { ArrowIcon } from "@assets/index";
import {
  Container,
  Header,
  Heading,
  Wrapper,
  RentPeriod,
  Date,
  DateTitle,
  DateStart,
  DateEnd,
} from "./styles";

interface Props {}

function Scheduling({}: Props) {
  const { Colors } = useTheme();
  return (
    <Container>
      <Header>
        <BackButton
          color={Colors.BgSecondary}
          onPress={() => console.log("Back")}
        />

        <Heading>Escolha uma data de início e fim do aluguel</Heading>

        <RentPeriod>
          <Date>
            <DateTitle>De</DateTitle>
            <DateStart selected={false} />
          </Date>

          <ArrowIcon />

          <Date>
            <DateTitle>Até</DateTitle>
            <DateEnd selected={false} />
          </Date>
        </RentPeriod>
      </Header>

      <Wrapper>
        <Calendar />
      </Wrapper>
    </Container>
  );
}

export { Scheduling };
