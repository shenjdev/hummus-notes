import { getAllPosts } from "../../../lib/posts"
import BlogCard from '@/components/BlogCard';

export default function Page() {
  const posts = getAllPosts();
  const recent = posts.slice(0,5);
  return (
    <div className="flex flex-col items-center">
      <div className="mt-5 font-bold text-2xl sm:text-4xl border-b border-[#E5E5E5]">
        All Notes
      </div>
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
        {recent.map((post) => (
          <BlogCard key={post.slug}
          post={post} />
        ))}
  

      </div>
    </div>
  )
}