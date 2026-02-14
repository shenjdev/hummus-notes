import { Post } from "@/lib/posts";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default async function AdminBlogCard({ post }: {post: Post}) {
  return (
    <div className="border-b grid grid-cols-6">
      <div>
        {post.title}
      </div>
      <div>
        {post.slug}
      </div>
      <div>
        {post.author}
      </div>
      <div>
        {post.date}
      </div>
      <div>
        {post.published? "Published" : "Draft"}
      </div>
      <div className="nav-links items-center flex gap-2">
        <Link href="/edit">
          edit
        </Link>
        <button className="hover:cursor-pointer">
          delete
        </button>
      </div>
    </div>
  )
}