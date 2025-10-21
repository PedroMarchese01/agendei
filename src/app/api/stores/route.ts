import { NextResponse } from "next/server";
import * as storeService from "../../../services/storeService";

export async function GET() {
  const stores = await storeService.getStores();
  return NextResponse.json(stores);
}

export async function POST(req: Request) {
  const data = await req.json();
  const id = await storeService.createStore(data);
  return NextResponse.json({ success: true, id });
}

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });

  const data = await req.json();
  await storeService.updateStore(id, data);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "ID não fornecido" }, { status: 400 });

  await storeService.deleteStore(id);
  return NextResponse.json({ success: true });
}