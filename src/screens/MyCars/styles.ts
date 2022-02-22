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
  height: ${RFPercentage(30)}px;
  background-color: ${({ theme }) => theme.Colors.Header};
  justify-content: center;
  padding: ${RFValue(24)}px;
`;

export const Heading = styled.Text`
  width: ${width - RFPercentage(4)}px;
  font-family: ${({ theme }) => theme.Fonts.Secondary600};
  color: ${({ theme }) => theme.Colors.BgSecondary};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(18)}px;
`;

export const SubHeading = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary400};
  color: ${({ theme }) => theme.Colors.BgSecondary};
  font-size: ${RFValue(16)}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.Colors.BgPrimary};
`;

export const Appointments = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;

export const AppointmentTitle = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary400};
  color: ${({ theme }) => theme.Colors.Text};
  font-size: ${RFValue(16)}px;
`;

export const AppointmentQuantity = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.Title};
  font-size: ${RFValue(16)}px;
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarRentalPeriod = styled.View`
  flex-direction: row;
`;

export const CarRentalTitle = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Secondary500};
  color: ${({ theme }) => theme.Colors.TextDetail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px 24px;
  margin-top: -10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.BgSecondary};
`;

export const CarRentalDateStart = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary400};
  color: ${({ theme }) => theme.Colors.Title};
  font-size: ${RFValue(14)}px;
`;
export const CarRentalDateEnd = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary400};
  color: ${({ theme }) => theme.Colors.Title};
  font-size: ${RFValue(14)}px;
`;
