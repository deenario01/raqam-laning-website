import fs from "fs";
import path from "path";
import { readBlobJson, siteUsesNetlifyBlobs, writeBlobJson } from "@/lib/netlify-site-blobs";

const NEWS_PATH = path.join(process.cwd(), "data", "news.json");
const NEWS_BLOB_KEY = "news";

function readNewsFromFs() {
  const raw = fs.readFileSync(NEWS_PATH, "utf8");
  return JSON.parse(raw);
}

function isValidNewsPayload(data) {
  return data && typeof data === "object" && Array.isArray(data.items);
}

export async function readNewsPayloadAsync() {
  if (siteUsesNetlifyBlobs()) {
    try {
      const fromBlob = await readBlobJson(NEWS_BLOB_KEY);
      if (isValidNewsPayload(fromBlob)) return fromBlob;
    } catch (e) {
      console.error("readNewsPayloadAsync blob error:", e);
    }
  }
  return readNewsFromFs();
}

export async function writeNewsPayloadAsync(payload) {
  if (siteUsesNetlifyBlobs()) {
    await writeBlobJson(NEWS_BLOB_KEY, payload);
    return;
  }
  fs.writeFileSync(NEWS_PATH, JSON.stringify(payload, null, 2), "utf8");
}

export function readNewsPayload() {
  return readNewsFromFs();
}

export function writeNewsPayload(payload) {
  fs.writeFileSync(NEWS_PATH, JSON.stringify(payload, null, 2), "utf8");
}

export function getNewsItemsSync() {
  return readNewsPayload().items;
}

export function getNewsByIdSync(id) {
  return getNewsItemsSync().find((n) => n.id === id);
}
