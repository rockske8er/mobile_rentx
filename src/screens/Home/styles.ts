import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ICar } from "../../contracts/ICar";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.Colors.BgPrimary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  background-color: ${({ theme }) => theme.Colors.Header};
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  padding: 0 ${RFValue(16)}px;
  padding-bottom: ${RFValue(28)}px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.Fonts.Primary400};
  font-weight: 400;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.Colors.Text};
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<ICar>) => FlatList<ICar>
)``;
