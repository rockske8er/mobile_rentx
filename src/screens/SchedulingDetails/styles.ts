import styled, { css } from "styled-components/native";
import { ScrollView } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  /* padrao 18 */
  margin-top: ${getStatusBarHeight() + RFValue(12)}px;
  /* Padrao 24 */
  margin-left: 16px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(32)}px;
`;

export const Wrapper = styled(ScrollView)``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* Padrao 38 */
  margin-top: ${RFValue(32)}px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.TextDetail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.Title};
  font-size: ${RFValue(24)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.TextDetail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.Main};
  font-size: ${RFValue(24)}px;
`;

export const CarAccessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(18)}px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px 24px ${getBottomSpace() + 24}px;
  background-color: ${({ theme }) => theme.Colors.BgPrimary};
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.Colors.Line};
  padding-bottom: 16px;
`;

export const CalendarIcon = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.Colors.Main};
  justify-content: center;
  align-items: center;
`;

export const Date = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.Text};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const DateStart = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary500};
  color: ${({ theme }) => theme.Colors.Title};
  font-size: ${RFValue(16)}px;
`;

export const DateEnd = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary500};
  color: ${({ theme }) => theme.Colors.Title};
  font-size: ${RFValue(16)}px;
`;

export const RentalPrice = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const RentalTitle = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.Text};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuote = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary500};
  color: ${({ theme }) => theme.Colors.Title};
  font-size: ${RFValue(14)}px;
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.Success};
  font-size: ${RFValue(18)}px;
`;
