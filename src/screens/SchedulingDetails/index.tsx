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

import { Accessory, BackButton, Slider, Button } from "@components/index";

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
import { useNavigation } from "@react-navigation/native";

interface Props {}

const SchedulingDetails = ({}: Props) => {
  const { Colors } = useTheme();

  const { navigate, goBack } = useNavigation();

  const handleSchedulingSuccess = () => {
    navigate("SchedulingComplete");
  };
  return (
    <Container>
      <Header>
        <BackButton onPress={goBack} />
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
          <Accessory name={"300KM/H"} icon={SpeedIcon} />
          <Accessory name={"3.2s"} icon={AccelerationIcon} />
          <Accessory name={"800 HP"} icon={ForceIcon} />
          <Accessory name={"Gasolina"} icon={GasolineIcon} />
          <Accessory name={"Auto"} icon={ExchangeIcon} />
          <Accessory name={"2 Pessoas"} icon={PeopleIcon} />
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
        <Button
          name="Alugar Agora"
          color={Colors.Success}
          onPress={handleSchedulingSuccess}
        />
      </Footer>
    </Container>
  );
};

export { SchedulingDetails };
