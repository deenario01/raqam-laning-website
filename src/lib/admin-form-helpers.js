export function parseLines(text) {
  return String(text || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function joinLines(arr) {
  return (arr || []).join("\n");
}

export function slugifyBase(name) {
  const base = String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return base || "product";
}

export function uniqueId(base, existingIds) {
  const set = new Set(existingIds);
  if (!set.has(base)) return base;
  let n = 1;
  let id = `${base}_${n}`;
  while (set.has(id)) {
    n += 1;
    id = `${base}_${n}`;
  }
  return id;
}
