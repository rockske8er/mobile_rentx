import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Logo } from "@assets/index";

import { CarList, Container, Header, TotalCars } from "./styles";

import { ICar } from "@contracts/ICar";
import { api } from "@services/api";
import { Car, Loading } from "@components/index";
import { MyCarsButton } from "@components/MyCarsButton";
import { useTheme } from "styled-components";
import { View } from "react-native";
interface HomeProps {}

function Home({}: HomeProps) {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<ICar[]>([]);
  const { navigate } = useNavigation();

  const handleCarDetails = (car: ICar) => {
    navigate("CarDetails", { car });
  };

  const handleMyCars = () => {
    navigate("MyCars");
  };

  useEffect(() => {
    console.log("executou a funcao");

    const getAllCars = async () => {
      try {
        const { data } = await api.get("/cars");

        console.log(data)

        setCars(data);
      } catch (error) {
        return console.log(error);
      } finally {
        //setLoading(false);
      }
    };
    getAllCars();
  }, []);

  const { Colors } = useTheme();

  return (
    <Container>
      <Header>
        <Logo width={RFValue(100)} height={RFValue(16)} />
        <TotalCars>Total de {cars.length} Carros</TotalCars>
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
      <View
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <MyCarsButton onPress={handleMyCars}>
          <Ionicons
            size={32}
            name={"ios-car-sport"}
            color={Colors.ShapeLight}
          />
        </MyCarsButton>
      </View>
    </Container>
  );
}

export { Home };
