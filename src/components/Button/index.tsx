import { Container, Name } from "./styles";

interface Props {
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
