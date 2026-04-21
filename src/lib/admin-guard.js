import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  verifyAdminSession,
  getAdminEnv,
} from "@/lib/admin-session";

export async function unauthorizedIfNotAdmin() {
  const { sessionSecret } = getAdminEnv();
  const store = await cookies();
  const token = store.get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminSession(token, sessionSecret)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
