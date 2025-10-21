import { NextResponse } from "next/server";
import * as userService from "../../../services/UserService";

export async function GET() {
  const users = await userService.getUsers();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const data = await req.json();
  const id = await userService.createUser(data);
  return NextResponse.json({ success: true, id });
}

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });

  const data = await req.json();
  await userService.updateUser(id, data);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });

  await userService.deleteUser(id);
  return NextResponse.json({ success: true });
}
