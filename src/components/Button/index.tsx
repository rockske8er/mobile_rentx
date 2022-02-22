import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Container, Name } from "./styles";

interface Props extends RectButtonProps {
  name: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

function Button({ name, color, enabled = true, loading, ...rest }: Props) {
  const { Colors } = useTheme();
  return (
    <Container enabled={enabled} backgroundColor={color} {...rest}>
      {loading ? (
        <ActivityIndicator color={Colors.ShapeLight} />
      ) : (
        <Name>{name}</Name>
      )}
    </Container>
  );
}

export { Button };
