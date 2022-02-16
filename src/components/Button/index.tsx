import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Name } from "./styles";

interface Props extends RectButtonProps {
  name: string;
  color?: string;
}

function Button({ name, color, ...rest }: Props) {
  return (
    <Container backgroundColor={color} {...rest}>
      <Name>{name}</Name>
    </Container>
  );
}

export { Button };
