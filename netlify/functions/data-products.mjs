import { getSiteStore, BLOB_KEY } from "./lib/site-store.mjs";
import { siteOrigin } from "./lib/site-origin.mjs";
import { jsonResponse } from "./lib/json-response.mjs";
import { isValidProductsPayload } from "./lib/validate.mjs";

async function fetchBundledConfig(req) {
  const origin = siteOrigin(req);
  const res = await fetch(`${origin}/data/products.json`, { cache: "no-store" });
  if (!res.ok) return null;
  try {
    return await res.json();
  } catch {
    return null;
  }
}

export default async (req) => {
  if (req.method === "GET") {
    const store = getSiteStore();
    const fromBlob = await store.get(BLOB_KEY.products, { type: "json" });
    const data =
      isValidProductsPayload(fromBlob) ? fromBlob : await fetchBundledConfig(req);
    if (!data) {
      return jsonResponse({ error: "No products data available" }, { status: 500 });
    }
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  }
  return new Response("Method Not Allowed", { status: 405 });
};
