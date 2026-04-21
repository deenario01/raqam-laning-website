import fs from "fs";
import path from "path";

const NEWS_PATH = path.join(process.cwd(), "data", "news.json");

export function readNewsPayload() {
  const raw = fs.readFileSync(NEWS_PATH, "utf8");
  return JSON.parse(raw);
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
