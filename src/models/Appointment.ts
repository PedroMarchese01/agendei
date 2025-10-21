import { ObjectId } from "mongodb";

export interface Appointment {
  _id?: ObjectId;
  storeId: string;
  userId?: string; // quem marcou, opcional se ainda não confirmado
  date: string; // ISO date
  products: {
    name: string;
    quantity: number;
    duration: number; // em minutos
    price: number;
  }[];
  status: "pending" | "confirmed" | "cancelled";
  totalDuration: number; // soma dos products.duration
  totalPrice: number; // soma dos products.price
}