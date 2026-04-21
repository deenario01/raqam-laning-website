import { NextResponse } from "next/server";
import { readNewsPayload } from "@/lib/site-news";

export async function GET() {
  try {
    const data = readNewsPayload();
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to load news" }, { status: 500 });
  }
}
