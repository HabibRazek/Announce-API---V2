// src/app/model/announce.model.ts

export interface Announce {
  adress: string | undefined;
  categoryId: number;
  city: string;
  country: string;
  description: string;
  date: string;
  userId: string;
  latitude: string;
  longitude: string;
  price: number;
  zipCode: string | null;
  isFavorite: boolean;
  id: string;
  website: string | null;
  vocal: string;
  pictures: string[];
  priceState: string;
  state: string;
  title: string;
  user: {
    adress: string;
    firstName: string;
    lastName: string;
    inscriptionType: string;
    imageUrl: string;
    type: string;
  };
}
