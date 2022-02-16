import { GasolineIcon } from "@assets/index";
import { useNavigation } from "@react-navigation/native";
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

type CarData = {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};

interface Props extends RectButtonProps {
  data: CarData;
}

const Car = ({ data, ...rest }: Props) => {
  const { navigate } = useNavigation();

  const handleCarDetails = () => {
    navigate("CarDetails");
  };

  return (
    <Container {...rest} onPress={handleCarDetails}>
      <CarDetail>
        <CarBrand>{data.brand}</CarBrand>
        <CarName>{data.name}</CarName>

        <CarInfo>
          <Rent>
            <RentPeriod>{data.rent.period}</RentPeriod>
            <RentPrice>R$: {data.rent.price}</RentPrice>
          </Rent>

          <Type>
            <GasolineIcon />
          </Type>
        </CarInfo>
      </CarDetail>

      <CarImage
        resizeMode="contain"
        source={{
          uri: "https://cdn.autopapo.com.br/carro/nissan/gtr-38-v6-premium-4wd-2017/destaque-v3.png",
        }}
      />
    </Container>
  );
};

export { Car };
