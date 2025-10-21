import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { User } from "@/models/User";

const dbName = process.env.MONGODB_DB;

export async function getUsers() {
  const client = await clientPromise;
  return client.db(dbName).collection<User>("users").find().toArray();
}

export async function getUserById(id: string) {
  const client = await clientPromise;
  return client.db(dbName).collection<User>("users").findOne({ _id: new ObjectId(id) });
}

export async function createUser(user: User) {
  const client = await clientPromise;
  const result = await client.db(dbName).collection<User>("users").insertOne(user);
  return result.insertedId;
}

export async function updateUser(id: string, user: Partial<User>) {
  const client = await clientPromise;
  await client.db(dbName).collection<User>("users").updateOne(
    { _id: new ObjectId(id) },
    { $set: user }
  );
}

export async function deleteUser(id: string) {
  const client = await clientPromise;
  await client.db(dbName).collection<User>("users").deleteOne({ _id: new ObjectId(id) });
}
