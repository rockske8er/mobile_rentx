import styled from "styled-components/native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends RectButtonProps {
  backgroundColor: string;
  enabled?: boolean;
  loading?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: ${RFValue(56)}px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.Colors.Main};
  opacity: ${({ enabled, loading }) =>
    enabled === false || loading === true ? 0.5 : 1};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.Fonts.Primary500};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.Colors.BgSecondary};
`;
