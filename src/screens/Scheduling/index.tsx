import { useTheme } from "styled-components";

import { Button, BackButton, Calendar } from "@components/index";

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

      <Wrapper
        contentContainerStyle={{
          paddingBottom: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Calendar />
      </Wrapper>

      <Footer>
        <Button name="Confirmar" />
      </Footer>
    </Container>
  );
}

export { Scheduling };
