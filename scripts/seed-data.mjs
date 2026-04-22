import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const productsModulePath = path.join(root, "src", "app", "products.js");
const raw = fs.readFileSync(productsModulePath, "utf8");
const itemsMatch = raw.match(/const products = (\[[\s\S]*?\n\]);/);
if (!itemsMatch) throw new Error("Could not parse products array from products.js");
const products = eval(itemsMatch[1]);
const featuredMatch = raw.match(/const featuredProductsList = (\[[\s\S]*?\n\])/);
if (!featuredMatch) throw new Error("Could not parse featuredProductsList");
const featuredIds = eval(featuredMatch[1]);

const publicData = path.join(root, "public", "data");
fs.mkdirSync(publicData, { recursive: true });
fs.writeFileSync(
  path.join(publicData, "products.json"),
  JSON.stringify({ items: products, featuredIds }, null, 2),
  "utf8"
);

const newsDetailsPath = path.join(root, "src", "app", "news-details", "[id]", "page.js");
const nd = fs.readFileSync(newsDetailsPath, "utf8");
const blogMatch = nd.match(/const blogData = (\{[\s\S]*?\n  \});/);
if (!blogMatch) throw new Error("Could not parse blogData");
const blogData = eval(`(${blogMatch[1]})`);
const newsItems = Object.values(blogData);
fs.writeFileSync(
  path.join(publicData, "news.json"),
  JSON.stringify({ items: newsItems }, null, 2),
  "utf8"
);

console.log("Wrote public/data/products.json and public/data/news.json");
