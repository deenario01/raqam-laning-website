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

export function validateProductsBody(body) {
  if (!body || typeof body !== "object") return { error: "Invalid body" };
  const { items, featuredIds } = body;
  if (!Array.isArray(items)) return { error: "items must be an array" };
  if (!Array.isArray(featuredIds)) return { error: "featuredIds must be an array" };
  const normalized = items.map(normalizeProduct);
  for (const p of normalized) {
    if (!p.id) return { error: "Each product needs an id" };
    if (!p.name) return { error: "Each product needs a name" };
    if (!p.primaryImage) return { error: "Each product needs primaryImage" };
  }
  const ids = new Set(normalized.map((p) => p.id));
  if (ids.size !== normalized.length) return { error: "Duplicate product ids" };
  for (const fid of featuredIds) {
    if (!ids.has(String(fid))) {
      return { error: `featuredIds contains unknown id: ${fid}` };
    }
  }
  return {
    payload: {
      items: normalized,
      featuredIds: featuredIds.map((id) => String(id).trim()),
    },
  };
}

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

export function validateNewsBody(body) {
  if (!body || typeof body !== "object") return { error: "Invalid body" };
  const { items } = body;
  if (!Array.isArray(items)) return { error: "items must be an array" };
  const normalized = items.map(normalizeItem);
  for (const n of normalized) {
    if (!n.id) return { error: "Each news item needs an id" };
    if (!n.title) return { error: "Each news item needs a title" };
  }
  const ids = new Set(normalized.map((n) => n.id));
  if (ids.size !== normalized.length) return { error: "Duplicate news ids" };
  return { payload: { items: normalized } };
}

export function isValidProductsPayload(data) {
  return (
    data &&
    typeof data === "object" &&
    Array.isArray(data.items) &&
    Array.isArray(data.featuredIds)
  );
}

export function isValidNewsPayload(data) {
  return data && typeof data === "object" && Array.isArray(data.items);
}
