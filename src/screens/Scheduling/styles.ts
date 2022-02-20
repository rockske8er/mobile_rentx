import styled, { css } from "styled-components/native";
import { Dimensions, ScrollView } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const { width } = Dimensions.get("screen");

interface DateStartEndProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(40)}px;
  background-color: ${({ theme }) => theme.Colors.Header};
  justify-content: center;
  padding: ${RFValue(24)}px;
`;

export const Heading = styled.Text`
  width: ${width - RFPercentage(16)}px;
  font-family: ${({ theme }) => theme.Fonts.Secondary600};
  color: ${({ theme }) => theme.Colors.BgSecondary};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  margin-top: ${RFValue(16)}px;
`;

export const Wrapper = styled(ScrollView)``;

export const RentPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`;

export const Date = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.Text};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const DateStart = styled.Text<DateStartEndProps>`
  font-family: ${({ theme }) => theme.Fonts.Primary500};
  color: ${({ theme }) => theme.Colors.BgSecondary};
  font-size: ${RFValue(14)}px;

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.Colors.Text};
      padding-bottom: 5px;
    `}
`;

export const DateEnd = styled.Text<DateStartEndProps>`
  font-family: ${({ theme }) => theme.Fonts.Primary500};
  color: ${({ theme }) => theme.Colors.BgSecondary};
  font-size: ${RFValue(14)}px;

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.Colors.Text};
      padding-bottom: 5px;
    `}
`;

export const Footer = styled.View`
  padding: 24px;
`;
