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
  CarAccessories,
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

import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ICar } from "@contracts/ICar";
import { getAllAccessoryIcon } from "@utils/getAllAccessoryIcon";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { api } from "@services/api";
import { Alert } from "react-native";

interface Props {}

type Params = {
  car: ICar;
  dates: string[];
};

type RentalPeriodProps = {
  startDate: string;
  endDate: string;
};

type ApiData = {
  id: string;
  unavailable_dates?: string[];
};

const SchedulingDetails = ({}: Props) => {
  const [loading, setLoading] = useState(false);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps
  );
  const { Colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const handleSchedulingSuccess = async () => {
    const { data } = await api.get<ApiData>(`/schedules_bycars/${car.id}`);

    const unavailable_dates = {
      ...data.unavailable_dates,
      ...dates,
    };

    api.post("/schedules_byuser", {
      user_id: 1,
      car,
      id: 1,
    });

    try {
      setLoading(true);

      await api
        .put<ApiData>(`/schedules_bycars/${car.id}`, {
          id: car.id,
          unavailable_dates,
        })
        .then((res) => navigate("SchedulingComplete"))
        .catch(() => {
          setLoading(false);
          Alert.alert("Erro ");
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRentalPeriod({
      startDate: format(parseISO(dates[0]), "dd/MM/yyyy"),
      endDate: format(parseISO(dates[dates.length - 1]), "dd/MM/yyyy"),
    });
  }, []);

  const rentTotal = Number(dates.length * car.rent.price);

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack} />
      </Header>

      <CarImages>
        <Slider imagesUrl={car.photos} />
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
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <CarAccessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={getAllAccessoryIcon(accessory.type)}
            />
          ))}
        </CarAccessories>

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
            <DateStart>{rentalPeriod.startDate}</DateStart>
          </Date>

          <Feather
            name="chevron-right"
            size={RFValue(12)}
            color={Colors.TextDetail}
          />

          <Date>
            <DateTitle>Ate</DateTitle>
            <DateEnd>{rentalPeriod.endDate}</DateEnd>
          </Date>
        </RentalPeriod>

        <RentalPrice>
          <RentalTitle>Total</RentalTitle>
          <RentalPriceDetails>
            <RentalPriceQuote>
              R$ {car.rent.price} x {dates.length} Diarias
            </RentalPriceQuote>
            <RentalPriceTotal>R$: {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Wrapper>

      <Footer>
        <Button
          name="Alugar Agora"
          color={Colors.Success}
          onPress={handleSchedulingSuccess}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>
  );
};

export { SchedulingDetails };
