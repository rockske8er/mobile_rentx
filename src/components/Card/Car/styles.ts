import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(18)}px;

  background-color: ${({ theme }) => theme.Colors.BgSecondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const CarDetail = styled.View``;

export const CarBrand = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  font-weight: 500;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.Colors.TextDetail};
  text-transform: uppercase;
`;

export const CarName = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.Colors.Title};
`;

export const CarInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Rent = styled.View`
  margin-top: ${RFValue(16)}px;
  margin-right: ${RFValue(24)}px;
`;

export const RentPeriod = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  font-weight: 500;
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.Colors.TextDetail};
  text-transform: uppercase;
`;

export const RentPrice = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  font-weight: 500;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.Colors.Main};
`;

export const Type = styled.View`
  flex-direction: column;
`;

export const CarImage = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(80)}px;
`;
