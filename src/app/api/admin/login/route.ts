import { NextResponse } from "next/server";

export async function POST() {
  console.log("ADMIN LOGIN ROUTE HIT");
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}