import {
  SpeedIcon,
  AccelerationIcon,
  EnergyIcon,
  GasolineIcon,
  HybridIcon,
  ExchangeIcon,
  ForceIcon,
  PeopleIcon,
  CarIcon,
} from "@assets/index";

const getAllAccessoryIcon = (type: string) => {
  switch (type) {
    case "speed":
      return SpeedIcon;

    case "acceleration":
      return AccelerationIcon;

    case "seats":
      return PeopleIcon;

    case "turning_diameter":
      return ForceIcon;

    case "gasoline_motor":
      return GasolineIcon;

    case "electric_motor":
      return EnergyIcon;

    case "hybrid_motor":
      return HybridIcon;

    case "exchange":
      return ExchangeIcon;

    default:
      return CarIcon;
  }
};

export { getAllAccessoryIcon };
