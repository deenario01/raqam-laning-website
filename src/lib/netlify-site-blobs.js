const SITE_DATA_STORE = "raqam-site-data";

export function siteUsesNetlifyBlobs() {
  return Boolean(process.env.NETLIFY_SITE_ID);
}

export async function readBlobJson(key) {
  const { getStore } = await import("@netlify/blobs");
  const store = getStore(SITE_DATA_STORE);
  return store.get(key, { type: "json", consistency: "strong" });
}

export async function writeBlobJson(key, value) {
  const { getStore } = await import("@netlify/blobs");
  const store = getStore(SITE_DATA_STORE);
  await store.setJSON(key, value, { consistency: "strong" });
}
