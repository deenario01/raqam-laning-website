import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSession,
  getAdminEnv,
} from "@/lib/admin-session";

export async function GET() {
  const { sessionSecret } = getAdminEnv();
  const store = await cookies();
  const token = store.get(ADMIN_SESSION_COOKIE)?.value;
  const ok = verifyAdminSession(token, sessionSecret);
  return NextResponse.json({ ok });
}
