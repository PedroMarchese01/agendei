import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Store } from "@/models/Store";

const dbName = process.env.MONGODB_DB;

export async function getStores() {
  const client = await clientPromise;
  return client.db(dbName).collection<Store>("stores").find().toArray();
}

export async function getStoreById(id: string) {
  const client = await clientPromise;
  return client.db(dbName).collection<Store>("stores").findOne({ _id: new ObjectId(id) });
}

export async function createStore(store: Store) {
  const client = await clientPromise;
  const result = await client.db(dbName).collection<Store>("stores").insertOne(store);
  return result.insertedId;
}

export async function updateStore(id: string, store: Partial<Store>) {
  const client = await clientPromise;
  await client.db(dbName).collection<Store>("stores").updateOne(
    { _id: new ObjectId(id) },
    { $set: store }
  );
}

export async function deleteStore(id: string) {
  const client = await clientPromise;
  await client.db(dbName).collection<Store>("stores").deleteOne({ _id: new ObjectId(id) });
}