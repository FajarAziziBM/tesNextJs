// app/webhook/cms/route.ts
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { CACHE_TAG_POSTS } from "@/lib/posts";

export async function POST(request: Request) {

  const payload = await request.json();

  if (payload.model === "post") {
    revalidateTag(CACHE_TAG_POSTS, "max");
  }

  return NextResponse.json({ ok: true });
}