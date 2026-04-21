import fs from "fs";
import path from "path";

const PRODUCTS_PATH = path.join(process.cwd(), "data", "products.json");

export function readProductsPayload() {
  const raw = fs.readFileSync(PRODUCTS_PATH, "utf8");
  return JSON.parse(raw);
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
