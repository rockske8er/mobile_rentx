import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Main};
  border-radius: 30px;
`;
