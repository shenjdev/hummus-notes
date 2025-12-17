// app/page.tsx or similar file where your main content lives

import BlogCard from '@/components/BlogCard';
import Image from 'next/image';
import { getAllPosts } from '../../lib/posts';

export default function HomePage() {

  const posts = getAllPosts();
  const hero = posts[0];
  const recent = posts.slice(1,5);


  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="mb-20 min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-[740px]">
        <div className="mt-5 sm:mt-10 mb-7 sm:mb-10 hover:cursor-pointer">
          <Image 
            src={hero.thumbnail}
            alt={hero.title}
            width={740}
            height={397}
          />
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
      <section className="h-screen p-8">
        <div className="grid grid-cols-2 gap-4">
          {recent.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}

        </div>
          

      

    
      </section>
      
    </div>
  );
}
