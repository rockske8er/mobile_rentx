import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.Header};
  padding-top: 80px;
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary600};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.Colors.BgSecondary};
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary400};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  color: ${({ theme }) => theme.Colors.TextDetail};
  text-align: center;
  width: ${width - RFPercentage(16)}px;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
  align-items: center;
`;
