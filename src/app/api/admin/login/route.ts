import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("ADMIN LOGIN ROUTE HIT");

  // Read request
  const body = await req.json().catch(() => ({}));
  const { password } = body;

  // Validate input
  if (!password) {
    return NextResponse.json(
      { error: "Password required" },
      { status: 400 }

    )
  }

  // Check against .env password
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Invalid password "},
      { status: 401 }
    )
  }

  // Passed all the cases! Success!!
  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}