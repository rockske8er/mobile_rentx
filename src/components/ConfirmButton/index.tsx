import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Name } from "./styles";

interface Props extends RectButtonProps {
  name: string;
}

const ConfirmButton = ({ name, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Name>{name}</Name>
    </Container>
  );
};

export { ConfirmButton };
