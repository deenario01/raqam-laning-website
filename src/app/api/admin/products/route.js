import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin } from "@/lib/admin-guard";
import {
  writeProductsPayloadAsync,
  readProductsPayloadAsync,
} from "@/lib/site-products";

function normalizeProduct(p) {
  return {
    id: String(p.id ?? "").trim(),
    name: String(p.name ?? "").trim(),
    primaryImage: String(p.primaryImage ?? "").trim(),
    description: String(p.description ?? "").trim(),
    features: Array.isArray(p.features) ? p.features.map(String) : [],
    applications: Array.isArray(p.applications) ? p.applications.map(String) : [],
  };
}

function validatePayload(body) {
  if (!body || typeof body !== "object") return "Invalid body";
  const { items, featuredIds } = body;
  if (!Array.isArray(items)) return "items must be an array";
  if (!Array.isArray(featuredIds)) return "featuredIds must be an array";
  const normalized = items.map(normalizeProduct);
  for (const p of normalized) {
    if (!p.id) return "Each product needs an id";
    if (!p.name) return "Each product needs a name";
    if (!p.primaryImage) return "Each product needs primaryImage";
  }
  const ids = new Set(normalized.map((p) => p.id));
  if (ids.size !== normalized.length) return "Duplicate product ids";
  for (const fid of featuredIds) {
    if (!ids.has(String(fid))) return `featuredIds contains unknown id: ${fid}`;
  }
  return null;
}

export async function GET() {
  const deny = await unauthorizedIfNotAdmin();
  if (deny) return deny;
  const data = await readProductsPayloadAsync();
  return NextResponse.json(data);
}

export async function PUT(request) {
  const deny = await unauthorizedIfNotAdmin();
  if (deny) return deny;

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const err = validatePayload(body);
  if (err) return NextResponse.json({ error: err }, { status: 400 });

  const payload = {
    items: body.items.map(normalizeProduct),
    featuredIds: body.featuredIds.map((id) => String(id).trim()),
  };
  try {
    await writeProductsPayloadAsync(payload);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to save products (storage unavailable)." },
      { status: 500 },
    );
  }
  return NextResponse.json(await readProductsPayloadAsync());
}
