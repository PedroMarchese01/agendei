import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  role: "client" | "owner"; // dono da loja ou cliente
  storeId?: string; // se for dono da loja
  cpf?: string;
  cellphone?: string;
  gender?: string;
  birthday?: string;
}