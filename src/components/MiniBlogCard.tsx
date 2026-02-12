import type { Post } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

export default function MiniBlogCard({ post }: {post: Post}) {
  return (
    <Link href={`/notes/${post.slug}`} className="block w-full py-2">
      <div className="flex flex-col gap-2">
        {post.thumbnail && (
          <div className="w-full aspect-video relative">
            <Image 
              src={post.thumbnail}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="object-top"
            />

          </div>
        )}
        <p className="text-md sm:text-lg font-semibold line-clamp-2">
          {post.title}
        </p>
        <div className="text-sm sm:text-md flex text-[#919191] gap-2">
          <Link href="/about">
            {post.author}
          </Link>
          <p>
            {post.date}
          </p>

        </div>
      </div>
      
    </Link>

  );
}