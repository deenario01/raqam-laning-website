import fs from "fs";
import path from "path";
import {
  tryFetchFirstPartyApiPath,
  fetchPublicJsonByPath,
} from "@/lib/site-content-origin";
import defaultProductsJson from "../../public/data/products.json";

const PRODUCTS_PATH = path.join(process.cwd(), "public", "data", "products.json");
const PUBLIC_URL_PATH = "/data/products.json";

function isValidProductsPayload(data) {
  return (
    data &&
    typeof data === "object" &&
    Array.isArray(data.items) &&
    Array.isArray(data.featuredIds)
  );
}

function readProductsFromPublicFs() {
  try {
    const raw = fs.readFileSync(PRODUCTS_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Netlify: read via `/api/data/products` (served by netlify/functions, Blobs+static).
 * Local: filesystem + public URL fetch + import fallback.
 */
export async function readProductsPayloadAsync() {
  const fromApi = await tryFetchFirstPartyApiPath("/api/data/products");
  if (isValidProductsPayload(fromApi)) return fromApi;

  const fromFetch = await fetchPublicJsonByPath(PUBLIC_URL_PATH);
  if (isValidProductsPayload(fromFetch)) return fromFetch;

  const fromFs = readProductsFromPublicFs();
  if (isValidProductsPayload(fromFs)) return fromFs;

  return defaultProductsJson;
}

/** Local and preview: write to public/data. On Netlify, admin is handled by `admin-products` function. */
export async function writeProductsPayloadAsync(payload) {
  const dir = path.dirname(PRODUCTS_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(payload, null, 2), "utf8");
}

export function readProductsPayload() {
  return readProductsFromPublicFs() || defaultProductsJson;
}

export function writeProductsPayload(payload) {
  const dir = path.dirname(PRODUCTS_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(payload, null, 2), "utf8");
}

export function getProductsSync() {
  return readProductsPayload().items;
}

export function getProductByIdSync(id) {
  return getProductsSync().find((p) => p.id === id);
}

export function featuredProductsSync(skip) {
  const { items, featuredIds } = readProductsPayload();
  return items
    .filter((product) => featuredIds.includes(product.id) && product.id !== skip)
    .slice(0, 5);
}
