import { getAllPosts } from "@/lib/posts"
import MiniBlogCard from "@/components/MiniBlogCard";
import type { Post } from "@/lib/posts"

export default async function AdminPage() {
  const posts = await getAllPosts();

  return (
    <div>
      {posts.map((post: Post) => (
        <MiniBlogCard key={post._id} post={post} />
      ))}

    </div>
  )
}