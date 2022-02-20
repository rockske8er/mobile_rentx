import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  /* padrao 110 */
  width: ${RFValue(width) / 4 - 8}px;
  height: ${RFValue(90)}px;
  background-color: ${({ theme }) => theme.Colors.BgPrimary};
  justify-content: center;
  align-items: center;
  padding: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary500};
  color: ${({ theme }) => theme.Colors.Text};
  font-size: ${RFValue(14)}px;
`;
