import { NextResponse } from "next/server";

const COOKIE_NAME = "admin_session";
const MAX_AGE = 60 * 60 * 24 * 7;

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { password } = body;

  if (!password) {
    return NextResponse.json(
      { error: "Password required" },
      { status: 400 },
    );
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Invalid password" },
      { status: 401 },
    );
  }

  const token = process.env.ADMIN_SESSION_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Server misconfigured" }, 
      { status : 500 }
    );
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });

  return res;


}

export async function GET() {
  return NextResponse.json({ ok: true });
}