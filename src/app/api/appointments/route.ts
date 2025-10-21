import { NextResponse } from "next/server";
import * as appointmentService from "../../../services/appointmentService";

export async function GET() {
  const appointments = await appointmentService.getAppointments();
  return NextResponse.json(appointments);
}

export async function POST(req: Request) {
  const data = await req.json();

  // calcula totalDuration e totalPrice automaticamente
  const totalDuration = data.products.reduce((sum: number, p: any) => sum + p.duration * p.quantity, 0);
  const totalPrice = data.products.reduce((sum: number, p: any) => sum + p.price * p.quantity, 0);

  const appointment = { ...data, totalDuration, totalPrice };
  const id = await appointmentService.createAppointment(appointment);
  return NextResponse.json({ success: true, id });
}

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });

  const data = await req.json();
  await appointmentService.updateAppointment(id, data);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });

  await appointmentService.deleteAppointment(id);
  return NextResponse.json({ success: true });
}
