import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Appointment } from "@/models/Appointment";

const dbName = process.env.MONGODB_DB;

export async function getAppointments() {
  const client = await clientPromise;
  return client.db(dbName).collection<Appointment>("appointments").find().toArray();
}

export async function getAppointmentById(id: string) {
  const client = await clientPromise;
  return client.db(dbName).collection<Appointment>("appointments").findOne({ _id: new ObjectId(id) });
}

export async function createAppointment(appointment: Appointment) {
  const client = await clientPromise;
  const result = await client.db(dbName).collection<Appointment>("appointments").insertOne(appointment);
  return result.insertedId;
}

export async function updateAppointment(id: string, appointment: Partial<Appointment>) {
  const client = await clientPromise;
  await client.db(dbName).collection<Appointment>("appointments").updateOne(
    { _id: new ObjectId(id) },
    { $set: appointment }
  );
}

export async function deleteAppointment(id: string) {
  const client = await clientPromise;
  await client.db(dbName).collection<Appointment>("appointments").deleteOne({ _id: new ObjectId(id) });
}