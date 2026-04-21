import { NextResponse } from "next/server";
import { readProductsPayload } from "@/lib/site-products";

export async function GET() {
  try {
    const data = readProductsPayload();
    return NextResponse.json(data);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
  }
}
