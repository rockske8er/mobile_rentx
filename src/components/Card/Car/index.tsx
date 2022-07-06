import { RectButtonProps } from "react-native-gesture-handler";

import {
  Container,
  CarDetail,
  CarBrand,
  CarName,
  CarInfo,
  Rent,
  RentPeriod,
  RentPrice,
  Type,
  CarImage,
} from "./styles";
import { ICar } from "@contracts/ICar";
import { getAllAccessoryIcon } from "@utils/getAllAccessoryIcon";

interface Props extends RectButtonProps {
  data: ICar;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAllAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <CarDetail>
        <CarBrand>{data.brand}</CarBrand>
        <CarName>{data.name}</CarName>

        <CarInfo>
          <Rent>
            <RentPeriod>{data.rent.period}</RentPeriod>
            <RentPrice>R$: {data.rent.price}</RentPrice>
          </Rent>

          <Type>
            <MotorIcon /> 
          </Type>
        </CarInfo>
      </CarDetail>

      <CarImage
        resizeMode="contain"
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
