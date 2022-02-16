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
  About,
  CarAcessories,
  Footer,
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
import { useNavigation } from "@react-navigation/native";

interface Props {}

function CarDetails({}: Props) {
  const { navigate, goBack } = useNavigation();

  const handleScheduling = () => {
    navigate("Scheduling");
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
          <Acessory name={"300KM/H"} icon={SpeedIcon} />
          <Acessory name={"3.2s"} icon={AccelerationIcon} />
          <Acessory name={"800 HP"} icon={ForceIcon} />
          <Acessory name={"Gasolina"} icon={GasolineIcon} />
          <Acessory name={"Auto"} icon={ExchangeIcon} />
          <Acessory name={"2 Pessoas"} icon={PeopleIcon} />
        </CarAcessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Wrapper>

      <Footer>
        <Button name="Escolher periodo do Aluguel" onPress={handleScheduling} />
      </Footer>
    </Container>
  );
}

export { CarDetails };
