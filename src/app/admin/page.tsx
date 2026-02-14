import { getAllPosts } from "@/lib/posts"
import MiniBlogCard from "@/components/MiniBlogCard";
import type { Post } from "@/lib/posts"
import AdminBlogCard from "@/components/AdminBlogCard";
import Image from "next/image";

export default async function AdminPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-4rem)]">
      <div className="flex justify-end">
        <div className="flex border-2 items-center justify-end">
          Add Note
          <Image 
            src="/add-new-icon.png"
            width={50}
            height={50}
            alt="Add new post"
          />
        </div>

      </div>
      <div className="border-b-1 grid grid-cols-6">
        <div>Title</div>
        <div>Slug</div>
        <div>Author</div>
        <div>Date</div>
        <div>Status</div>
        <div></div>


      </div>
      {posts.map((post: Post) => (
        <AdminBlogCard key={post._id} post={post} />
      ))}

    </div>
  )
}