export interface ICar {
  id: string;
  brand: string;
  name: string;
  about: string;
  fuel_type: string;
  thumbnail: string;
  rent: {
    period: string;
    price: number;
  };
  accessories: {
    type: string;
    name: string;
  }[];
  photos: string[];
}
