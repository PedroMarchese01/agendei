import { ObjectId } from "mongodb";

export interface Store {
  _id?: ObjectId;
  name: string;
  ownerId: string; // id do usuário dono
  address: string;
  openingHours: { start: string; end: string }[]; // ex: [{start: "09:00", end: "18:00"}]
  products: {
    name: string;
    duration: number; // em minutos
    price: number;
  }[];
}