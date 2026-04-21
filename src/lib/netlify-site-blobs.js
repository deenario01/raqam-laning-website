const SITE_DATA_STORE = "raqam-site-data";

/**
 * Use Blobs when the site runs on Netlify (site id is injected there). Locally,
 * leave NETLIFY_SITE_ID unset so reads/writes use `data/*.json`.
 */
export function siteUsesNetlifyBlobs() {
  return Boolean(process.env.NETLIFY_SITE_ID);
}

function siteDataStoreOptions() {
  const siteID = process.env.NETLIFY_SITE_ID;
  const token =
    process.env.NETLIFY_AUTH_TOKEN ||
    process.env.NETLIFY_BLOBS_TOKEN ||
    process.env.NETLIFY_PERSONAL_ACCESS_TOKEN;
  if (siteID && token) {
    return { siteID, token };
  }
  return {};
}

async function getSiteDataStore() {
  const { getStore } = await import("@netlify/blobs");
  const opts = siteDataStoreOptions();
  if (opts.siteID && opts.token) {
    return getStore(SITE_DATA_STORE, opts);
  }
  return getStore(SITE_DATA_STORE);
}

export async function readBlobJson(key) {
  const store = await getSiteDataStore();
  return store.get(key, { type: "json" });
}

export async function writeBlobJson(key, value) {
  const store = await getSiteDataStore();
  await store.setJSON(key, value);
}
