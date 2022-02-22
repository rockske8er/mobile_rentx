import { useEffect, useState } from "react";

import { ICar } from "@contracts/ICar";
import { api } from "@services/api";
import { BackButton, Car, Loading } from "@components/index";

import {
  Container,
  Header,
  Heading,
  SubHeading,
  Wrapper,
  Appointments,
  AppointmentTitle,
  AppointmentQuantity,
  CarWrapper,
  CarFooter,
  CarRentalTitle,
  CarRentalPeriod,
  CarRentalDateEnd,
  CarRentalDateStart,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface MyCarsProps {}

type CarProps = {
  id: string;
  user_id: string;
  car: ICar;
  startDate: string;
  endDate: string;
};

function MyCars({}: MyCarsProps) {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { goBack, navigate } = useNavigation();
  const { Colors } = useTheme();

  useEffect(() => {
    const getMyCars = async () => {
      try {
        const { data } = await api("/schedules_byuser?user_id=1");
        setCars(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMyCars();
  }, []);
  return (
    <Container>
      <Header>
        <BackButton color={Colors.BgSecondary} onPress={goBack} />
        <Heading>Seus agendamentos, estão aqui.</Heading>
        <SubHeading>Conforto, segurança e praticidade.</SubHeading>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Appointments>
            <AppointmentTitle>Agendamentos feitos</AppointmentTitle>
            <AppointmentQuantity>{cars.length}</AppointmentQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarRentalTitle>Periodo</CarRentalTitle>
                  <CarRentalPeriod>
                    <CarRentalDateStart>{item.startDate}</CarRentalDateStart>
                    <AntDesign
                      name={"arrowright"}
                      size={20}
                      color={Colors.Title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarRentalDateEnd>{item.endDate}</CarRentalDateEnd>
                  </CarRentalPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Wrapper>
      )}
    </Container>
  );
}

export { MyCars };
