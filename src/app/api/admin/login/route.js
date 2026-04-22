import { NextResponse } from "next/server";
import {
  createAdminSessionToken,
  ADMIN_SESSION_COOKIE,
  getAdminEnv,
} from "@/lib/admin-session";

const COOKIE_MAX_AGE_SEC = 60 * 60 * 24 * 7;

export async function POST(request) {
  const { passcode, sessionSecret } = getAdminEnv();
  if (!passcode || !sessionSecret) {
    return NextResponse.json(
      { error: "Admin is not configured. Set passcode and sessionSecret in config/admin.json." },
      { status: 503 }
    );
  }
  if (!/^\d{6}$/.test(passcode)) {
    return NextResponse.json(
      { error: "Server misconfiguration: passcode in config/admin.json must be exactly 6 digits." },
      { status: 503 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const submitted = String(body.passcode ?? "").trim();
  if (submitted !== passcode) {
    return NextResponse.json({ error: "Invalid passcode" }, { status: 401 });
  }

  const token = createAdminSessionToken(sessionSecret);
  if (!token) {
    return NextResponse.json({ error: "Could not create session" }, { status: 500 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SEC,
  });
  return res;
}
