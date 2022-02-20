import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Logo } from "@assets/index";

import { CarList, Container, Header, TotalCars } from "./styles";

import { ICar } from "@contracts/ICar";
import { api } from "@services/api";
import { Car, Loading } from "@components/index";
interface HomeProps {}

function Home({}: HomeProps) {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<ICar[]>([]);
  const { navigate } = useNavigation();

  const handleCarDetails = (car: ICar) => {
    navigate("CarDetails", { car });
  };

  useEffect(() => {
    async function getAllCars() {
      try {
        const { data } = await api.get("/cars");
        setCars(data);
      } catch (error) {
        return console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getAllCars();
  }, []);

  return (
    <Container>
      <Header>
        <Logo width={RFValue(100)} height={RFValue(16)} />
        <TotalCars>Total de 12 Carros</TotalCars>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            marginVertical: 16,
          }}
        />
      )}
    </Container>
  );
}

export { Home };
