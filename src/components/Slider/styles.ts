import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const width = Dimensions.get("window").width;

type SliderDotProps = {
  active: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const SliderDotsBox = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const SliderDot = styled.View<SliderDotProps>`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(8)}px;
  background-color: ${({ theme, active }) =>
    active ? theme.Colors.Title : theme.Colors.ShapeLight};
  margin-left: ${RFValue(8)}px;
`;

export const SliderWrapper = styled.View`
  width: ${width}px;
  height: ${RFValue(140)}px;
  justify-content: center;
  align-items: center;
`;

export const SliderImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(140)}px;
`;
