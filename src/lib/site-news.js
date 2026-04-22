import fs from "fs";
import path from "path";
import {
  tryFetchFirstPartyApiPath,
  fetchPublicJsonByPath,
} from "@/lib/site-content-origin";
import defaultNewsJson from "../../public/data/news.json";

const NEWS_PATH = path.join(process.cwd(), "public", "data", "news.json");
const PUBLIC_URL_PATH = "/data/news.json";

function isValidNewsPayload(data) {
  return data && typeof data === "object" && Array.isArray(data.items);
}

function readNewsFromPublicFs() {
  try {
    const raw = fs.readFileSync(NEWS_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function readNewsPayloadAsync() {
  const fromApi = await tryFetchFirstPartyApiPath("/api/data/news");
  if (isValidNewsPayload(fromApi)) return fromApi;

  const fromFetch = await fetchPublicJsonByPath(PUBLIC_URL_PATH);
  if (isValidNewsPayload(fromFetch)) return fromFetch;

  const fromFs = readNewsFromPublicFs();
  if (isValidNewsPayload(fromFs)) return fromFs;

  return defaultNewsJson;
}

export async function writeNewsPayloadAsync(payload) {
  const dir = path.dirname(NEWS_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(NEWS_PATH, JSON.stringify(payload, null, 2), "utf8");
}

export function readNewsPayload() {
  return readNewsFromPublicFs() || defaultNewsJson;
}

export function writeNewsPayload(payload) {
  const dir = path.dirname(NEWS_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(NEWS_PATH, JSON.stringify(payload, null, 2), "utf8");
}

export function getNewsItemsSync() {
  return readNewsPayload().items;
}

export function getNewsByIdSync(id) {
  return getNewsItemsSync().find((n) => n.id === id);
}
