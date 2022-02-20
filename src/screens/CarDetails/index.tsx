import { useNavigation, useRoute } from "@react-navigation/native";
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
  Accessories,
  About,
  Footer,
} from "./styles";

import { BackButton, Slider, Button, Accessory } from "@components/index";

import { ICar } from "@contracts/ICar";

import { getAllAccessoryIcon } from "@utils/getAllAccessoryIcon";

type Params = {
  car: ICar;
};

export function CarDetails() {
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const handleScheduling = () => {
    navigate("Scheduling");
  };
  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()} />
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
            <Period> {car.rent.period} </Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.name}
              name={accessory.name}
              icon={getAllAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Wrapper>

      <Footer>
        <Button
          name="Escolher periodo do Aluguel"
          onPress={() => handleScheduling()}
        />
      </Footer>
    </Container>
  );
}
