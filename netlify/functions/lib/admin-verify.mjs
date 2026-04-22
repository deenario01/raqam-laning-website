import crypto from "crypto";
import adminConfig from "../../../config/admin.json";

const COOKIE = "admin_session";

function verifyAdminSession(token, secret) {
  if (!token || !secret) return false;
  const dot = token.lastIndexOf(".");
  if (dot <= 0) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = crypto.createHmac("sha256", secret).update(payload).digest("base64url");
  try {
    if (sig.length !== expected.length) return false;
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  } catch {
    return false;
  }
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (typeof data.exp !== "number" || data.exp < Date.now()) return false;
    return true;
  } catch {
    return false;
  }
}

function getCookieValue(cookieHeader, name) {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const k = part.slice(0, idx).trim();
    if (k === name) return part.slice(idx + 1).trim();
  }
  return null;
}

export function isAuthorizedAdminRequest(req) {
  const sessionSecret = String(adminConfig.sessionSecret ?? "").trim();
  if (!sessionSecret) return { ok: false, reason: "not_configured" };
  const token = getCookieValue(req.headers.get("cookie"), COOKIE);
  if (!token || !verifyAdminSession(token, sessionSecret)) {
    return { ok: false, reason: "unauthorized" };
  }
  return { ok: true };
}
