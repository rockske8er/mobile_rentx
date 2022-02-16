import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import {
  CarImages,
  Container,
  Header,
  Wrapper,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  CarAcessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  Date,
  DateTitle,
  DateStart,
  DateEnd,
  RentalPrice,
  RentalTitle,
  RentalPriceDetails,
  RentalPriceQuote,
  RentalPriceTotal,
} from "./styles";

import { Acessory, BackButton, Slider, Button } from "@components/index";

import {
  SpeedIcon,
  AccelerationIcon,
  EnergyIcon,
  GasolineIcon,
  ExchangeIcon,
  ForceIcon,
  PeopleIcon,
} from "@assets/index";

import { RFValue } from "react-native-responsive-fontsize";

interface Props {}

const SchedulingDetails = ({}: Props) => {
  const { Colors } = useTheme();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => console.log("Back")} />
      </Header>

      <CarImages>
        <Slider
          imagesUrl={[
            "https://cdn.autopapo.com.br/carro/nissan/gtr-38-v6-premium-4wd-2017/destaque-v3.png",
          ]}
        />
      </CarImages>

      <Wrapper
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignItems: "center",
        }}
      >
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period> Ao dia </Period>
            <Price>R$ 200,00</Price>
          </Rent>
        </Details>

        <CarAcessories>
          <Acessory name={"300KM/H"} icon={SpeedIcon} />
          <Acessory name={"3.2s"} icon={AccelerationIcon} />
          <Acessory name={"800 HP"} icon={ForceIcon} />
          <Acessory name={"Gasolina"} icon={GasolineIcon} />
          <Acessory name={"Auto"} icon={ExchangeIcon} />
          <Acessory name={"2 Pessoas"} icon={PeopleIcon} />
        </CarAcessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name={"calendar"}
              size={RFValue(24)}
              color={Colors.ShapeLight}
            />
          </CalendarIcon>

          <Date>
            <DateTitle>De</DateTitle>
            <DateStart>12/03/2022</DateStart>
          </Date>

          <Feather
            name="chevron-right"
            size={RFValue(12)}
            color={Colors.TextDetail}
          />

          <Date>
            <DateTitle>Ate</DateTitle>
            <DateEnd>12/02/2022</DateEnd>
          </Date>
        </RentalPeriod>

        <RentalPrice>
          <RentalTitle>Total</RentalTitle>
          <RentalPriceDetails>
            <RentalPriceQuote>R$: 580,00 x 3 Diarias</RentalPriceQuote>
            <RentalPriceTotal>R$: 2800,00</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Wrapper>

      <Footer>
        <Button name="Alugar Agora" color={Colors.Success} />
      </Footer>
    </Container>
  );
};

export { SchedulingDetails };