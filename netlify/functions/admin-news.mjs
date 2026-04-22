import { getSiteStore, BLOB_KEY } from "./lib/site-store.mjs";
import { siteOrigin } from "./lib/site-origin.mjs";
import { jsonResponse } from "./lib/json-response.mjs";
import { isAuthorizedAdminRequest } from "./lib/admin-verify.mjs";
import { isValidNewsPayload, validateNewsBody } from "./lib/validate.mjs";

async function readPayload(req) {
  const store = getSiteStore();
  const fromBlob = await store.get(BLOB_KEY.news, { type: "json" });
  if (isValidNewsPayload(fromBlob)) return fromBlob;
  const origin = siteOrigin(req);
  const res = await fetch(`${origin}/data/news.json`, { cache: "no-store" });
  if (!res.ok) return null;
  try {
    return await res.json();
  } catch {
    return null;
  }
}

export default async (req) => {
  const auth = isAuthorizedAdminRequest(req);
  if (auth.ok === false) {
    if (auth.reason === "not_configured") {
      return jsonResponse(
        { error: "Admin is not configured. Set passcode and sessionSecret in config/admin.json." },
        { status: 503 }
      );
    }
    return jsonResponse({ error: "Unauthorized" }, { status: 401 });
  }

  if (req.method === "PUT") {
    let body;
    try {
      body = await req.json();
    } catch {
      return jsonResponse({ error: "Invalid JSON" }, { status: 400 });
    }
    const result = validateNewsBody(body);
    if (result.error) {
      return jsonResponse({ error: result.error }, { status: 400 });
    }
    const store = getSiteStore();
    await store.setJSON(BLOB_KEY.news, result.payload);
    const data = await readPayload(req);
    if (!data) {
      return jsonResponse({ error: "Failed to read back news" }, { status: 500 });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  }

  return new Response("Method Not Allowed", { status: 405 });
};
