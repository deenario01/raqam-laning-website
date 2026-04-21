import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin } from "@/lib/admin-guard";
import { writeNewsPayloadAsync, readNewsPayloadAsync } from "@/lib/site-news";

function normalizeItem(n) {
  return {
    id: String(n.id ?? "").trim(),
    title: String(n.title ?? "").trim(),
    date: String(n.date ?? "").trim(),
    image: String(n.image ?? "").trim(),
    excerpt: String(n.excerpt ?? "").trim(),
    tags: Array.isArray(n.tags) ? n.tags.map(String) : [],
    content: String(n.content ?? "").trim(),
  };
}

function validatePayload(body) {
  if (!body || typeof body !== "object") return "Invalid body";
  const { items } = body;
  if (!Array.isArray(items)) return "items must be an array";
  const normalized = items.map(normalizeItem);
  for (const n of normalized) {
    if (!n.id) return "Each news item needs an id";
    if (!n.title) return "Each news item needs a title";
  }
  const ids = new Set(normalized.map((n) => n.id));
  if (ids.size !== normalized.length) return "Duplicate news ids";
  return null;
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

  const payload = { items: body.items.map(normalizeItem) };
  try {
    await writeNewsPayloadAsync(payload);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to save news (storage unavailable)." },
      { status: 500 },
    );
  }
  return NextResponse.json(await readNewsPayloadAsync());
}
