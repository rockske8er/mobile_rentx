import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.ShapeDark};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.Colors.BgPrimary};
  font-size: ${RFValue(16)}px;
`;
