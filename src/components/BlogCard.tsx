import Image from "next/image";
import type { Post } from "@/lib/posts";
import Link from "next/link";




export default function BlogCard({ post }: {post: Post}) {
  return (
    <Link href={`/notes/${post.slug}`}>
      <div className="flex flex-col gap-2 max-w-[350px]">
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
        <p className="text-xl font-bold">
            {post.title}
        </p>
        <div className="nav-links text-sm flex gap-2 text-[#919191]">
          <span>
            {post.author}
          </span>
          <span>
            {post.date}
          </span>
        </div>
        <div className="line-clamp-3 text-md">
          {post.body}



        </div>
        
      
      </div>

    </Link>
    
  )
}