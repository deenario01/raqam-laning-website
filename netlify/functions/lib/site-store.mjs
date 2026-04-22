import { getStore } from "@netlify/blobs";

const STORE_NAME = "raqam-site-data";

/** Same pattern as procision-demo: platform wires credentials in Netlify Functions. */
export function getSiteStore() {
  return getStore({ name: STORE_NAME, consistency: "strong" });
}

export const BLOB_KEY = {
  products: "products",
  news: "news",
};
