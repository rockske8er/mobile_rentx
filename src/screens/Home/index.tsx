import { CarList, Container, Header, TotalCars } from "./styles";

import { Logo } from "./../../assets";
import { RFValue } from "react-native-responsive-fontsize";

import { Car } from "@components/Card/Car";

interface HomeProps {}

function Home({}: HomeProps) {
  const data = {
    brand: "string",
    name: "string",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail:
      "https://cdn.autopapo.com.br/carro/nissan/gtr-38-v6-premium-4wd-2017/destaque-v3.png",
  };
  return (
    <Container>
      <Header>
        <Logo width={RFValue(100)} height={RFValue(16)} />
        <TotalCars>Total de 12 Carros</TotalCars>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        keyExtractor={(i) => String(i)}
        renderItem={({ item }) => <Car data={data} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          marginVertical: 16,
        }}
      />
    </Container>
  );
}

export { Home };
