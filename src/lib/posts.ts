import clientPromise from "./mongodb";
import type { WithId, Document } from "mongodb";

export type Post = {
  _id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  body: string;
  thumbnail?: string;
  tags?: string[];
  published?: boolean;
  featured?: boolean;
}

export async function getAllPosts(): Promise<Post[]> {
  const client = await clientPromise;
  const db = client.db();

  const docs = await db
    .collection("posts")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return docs
    .filter((doc: any) =>
      typeof doc.slug === "string" &&
      typeof doc.title === "string"
    )
    .map((doc: any) => ({
      _id: doc._id.toString(),
      slug: doc.slug,
      title: doc.title,
      date: doc.date ?? "",
      author: doc.author ?? "",
      body: doc.body ?? "",
      thumbnail: 
        typeof doc.thumbnail === "string" && doc.thumbnail.length > 0
        ? doc.thumbnail
        : undefined,
      tags: Array.isArray(doc.tags) ? doc.tags.map(String) : [],
      published: Boolean(doc.published),
      featured: Boolean(doc.featured),
    }));
}



export async function getPostBySlug(slug: string) {
  const client = await clientPromise;
  const db = client.db();

  const doc = await db.collection<WithId<Document>>("posts").findOne({ slug });
  if (!doc) return null;

  return {
    _id: doc._id.toString(),
    slug: String(doc.slug),
    title: String(doc.title),
    date: String(doc.date),
    author: String(doc.author),
    body: String(doc.body), 
    thumbnail: String(doc.thumbnail),
    tags: Array.isArray(doc.tags) ? doc.tags.map(String): [],
    published: Boolean(doc.published),
  };
}


