import { ReactNode } from "react";

import { RectButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";

interface MyCarsButtonProps extends RectButtonProps {
  children: ReactNode;
}

function MyCarsButton({ children, ...rest }: MyCarsButtonProps) {
  return <Container {...rest}>{children}</Container>;
}

export { MyCarsButton };
