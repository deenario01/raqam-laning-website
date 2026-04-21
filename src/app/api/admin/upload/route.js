import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { NextResponse } from "next/server";
import { unauthorizedIfNotAdmin } from "@/lib/admin-guard";

export const runtime = "nodejs";

const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const MAX_BYTES = 8 * 1024 * 1024;

export async function POST(request) {
  const deny = await unauthorizedIfNotAdmin();
  if (deny) return deny;

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") === "news" ? "news" : "products";

  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const buf = Buffer.from(await file.arrayBuffer());
  if (buf.length > MAX_BYTES) {
    return NextResponse.json({ error: "File too large" }, { status: 400 });
  }

  const orig = file.name || "upload";
  const ext = path.extname(orig).toLowerCase() || ".bin";
  if (!ALLOWED.has(ext)) {
    return NextResponse.json(
      { error: "Only jpg, jpeg, png, webp, gif are allowed" },
      { status: 400 }
    );
  }

  const dir = path.join(process.cwd(), "public", "uploads", type);
  await fs.mkdir(dir, { recursive: true });
  const name = `${crypto.randomUUID()}${ext}`;
  const full = path.join(dir, name);
  await fs.writeFile(full, buf);

  const url = `/uploads/${type}/${name}`;
  return NextResponse.json({ url });
}
