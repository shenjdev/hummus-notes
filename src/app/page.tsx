import BlogCard from '@/components/BlogCard';
import Image from 'next/image';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function HomePage() {

  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <main className="max-w-[740px] mx-auto py-20 px-6">
        <h1 className="text-3xl font-extrabold mb-4">No Posts yet</h1>
        <p className="text-[#919191]">
          Seed your MongoDB <code>posts</code> collection and refresh.
        </p>
      </main>
    );
  }
  const hero = posts.find((post) => post.featured) ?? posts[0];
  const recent = posts.filter((post) => !post.featured).slice(0,4);


  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="mb-20 min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-[740px]">
        <div className="mt-5 sm:mt-10 mb-7 sm:mb-10 hover:cursor-pointer">
          {hero.thumbnail && (
            <Image 
              src={hero.thumbnail}
              alt={hero.title}
              width={740}
              height={397}
            />

          )}
        </div>
        <p className="text-2xl sm:text-4xl font-extrabold mb-2 sm:mb-5 hover:cursor-pointer">
          {hero.title}
        </p>
        <div className="nav-links text-sm sm:text-xl text-[#919191] flex gap-2 mb-2 sm:mb-5">
          <a>
            {hero.author}
          </a>
          <a>
            {hero.date}
          </a>
        </div>
        <div className="text-lg sm:text-2xl">
          <p className="line-clamp-3 sm:line-clamp-5">
            {hero.body}
          </p>
          <span className="text-[#919191]">Read More</span>
        </div>

      </section>

      {/* Recent Blog Section */}
      <section className="h-screen-min p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {recent.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <Link
          href="/notes"
          className="hover:cursor-pointer hover:opacity-70 active:opacity-90 flex justify-center text-lg sm:text-4xl border-b-2 border-b-[#E5E5E5] font-extrabold"
        >
          See more
        </Link>
      </section>
      
    </div>
  );
}
