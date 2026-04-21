import fs from "fs";
import path from "path";
import { readBlobJson, siteUsesNetlifyBlobs, writeBlobJson } from "@/lib/netlify-site-blobs";

const PRODUCTS_PATH = path.join(process.cwd(), "data", "products.json");
const PRODUCTS_BLOB_KEY = "products";

function readProductsFromFs() {
  const raw = fs.readFileSync(PRODUCTS_PATH, "utf8");
  return JSON.parse(raw);
}

function isValidProductsPayload(data) {
  return (
    data &&
    typeof data === "object" &&
    Array.isArray(data.items) &&
    Array.isArray(data.featuredIds)
  );
}

/** Prefer in API routes and SSR on Netlify (blobs); falls back to repo JSON. */
export async function readProductsPayloadAsync() {
  if (siteUsesNetlifyBlobs()) {
    try {
      const fromBlob = await readBlobJson(PRODUCTS_BLOB_KEY);
      if (isValidProductsPayload(fromBlob)) return fromBlob;
    } catch (e) {
      console.error("readProductsPayloadAsync blob error:", e);
    }
  }
  return readProductsFromFs();
}

export async function writeProductsPayloadAsync(payload) {
  if (siteUsesNetlifyBlobs()) {
    await writeBlobJson(PRODUCTS_BLOB_KEY, payload);
    return;
  }
  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(payload, null, 2), "utf8");
}

/** Sync read from `data/products.json` (local/build and fallback). */
export function readProductsPayload() {
  return readProductsFromFs();
}

export function writeProductsPayload(payload) {
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
