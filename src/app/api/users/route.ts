import { NextResponse } from "next/server";
import * as userService from "../../../services/userService";

export async function GET() {
  const users = await userService.getUsers();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const id = await userService.createUser(data);
    return NextResponse.json({ success: true, id });
  } catch (err: any) {
    console.error("Erro no POST /api/users:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });

    const data = await req.json();
    await userService.updateUser(id, data);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Erro no PUT /api/users:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });

    await userService.deleteUser(id);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Erro no DELETE /api/users:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}