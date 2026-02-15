import clientPromise from '../../../lib/mongodb';
import { NextResponse } from "next/server";


function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function makeUniqueSlug(db: any, base: string) {
  let slug = base || "untitled";
  let i = 1;

  while (await db.collection("posts").findOne({ slug })) {
    i += 1;
    slug = `${base}-${i}`;
  }
  return slug;
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db();

  const posts = await db
  .collection("posts")
  .find({})
  .sort({ createdAt: -1 })
  .toArray();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const body = await req.json();

    const title = (body?.title ?? "").toString().trim();
    if (!title) {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }
    
    const author = (body?.author ?? "James Shen").toString().trim();
    const bodyText = (body?.body ?? "").toString();
    const thumbnailRaw = (body?.thumbnail ?? "").toString().trim();

    const tagsRaw = body?.tags;
    const tags = Array.isArray(tagsRaw)
      ? tagsRaw.map((t: any) => String(t).trim()).filter(Boolean)
      : [];

    const published = Boolean(body?.published);
    const featured = Boolean(body?.featured);

    const now = new Date();

    const date = (body?.date ?? now.toISOString()).toString();

    const requestedSlug = (body?.slug ?? "").toString().trim();
    const baseSlug = slugify(requestedSlug || title);
    const slug = await makeUniqueSlug(db, baseSlug);

    const doc = {
      slug,
      title,
      date,
      author,
      body: bodyText,
      thumbnail: thumbnailRaw.length > 0 ? thumbnailRaw : undefined,
      tags,
      published,
      featured,
      createdAt: now,
      updatedAt: now,
    }

    const result = await db.collection("posts").insertOne(doc);
    return NextResponse.json(
      { ...doc, _id: result.insertedId },
      { status: 201 }
    );
  }
  catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}