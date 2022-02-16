import { LogoBackgroundIcon, DoneIcon } from "@assets/index";
import { ConfirmButton } from "@components/ConfirmButton";
import { useNavigation } from "@react-navigation/native";

import { Text, useWindowDimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Wrapper, Title, Message, Footer } from "./styles";

interface Props {}

function SchedulingComplete({}: Props) {
  const { width } = useWindowDimensions();

  const { navigate } = useNavigation();

  const handle = () => {
    navigate("Home");
  };
  return (
    <Container>
      <LogoBackgroundIcon width={width} />
      <Wrapper>
        <DoneIcon width={RFValue(80)} height={RFValue(80)} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir até a concessionária da RENTX pegar o seu
          automóvel.
        </Message>

        <Footer>
          <ConfirmButton name="OK" onPress={handle} />
        </Footer>
      </Wrapper>
    </Container>
  );
}

export { SchedulingComplete };
