import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="max-w-6xl mx-auto  py-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px]">
        <main className="">
          <article className="w-full"> 
            <div className="w-full aspect-video relative mb-4">
              <Image 
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover object-top"
              
              />

            </div>
            <div className="px-2 md:px-6 mx-auto">
              <p className="text-xl sm:text-3xl font-extrabold mb-2 sm:mb-4 hover:cursor-pointer">
                {post.title}
              </p>
              <div className="nav-links text-sm sm:text-lg text-[#919191] flex gap-2 mb-2 sm:mb-4">
                <Link href="/about">
                  {post.author}
                </Link>
                <a>
                  {post.date}
                </a>
              </div>
              <div className="text-base sm:text-lg whitespace-pre-line">
                <p>
                  {post.body}
                </p>
              </div>
            </div>
          </article>
        </main>
        <div className="flex flex-col px-10 gap-5">
          <div className="mt-5 md:mt-0">
            <div className="flex md:justify-between gap-6 mb-4 items-center">
              <p className="font-extrabold text-lg md:text-2xl">
                About James
              </p>
              <Image 
                src="/binary.jpeg"
                width={50}
                height={50}
                alt="pfp"
                className=" rounded-full"
              />
            </div>
            <div className="text-sm md:text-base">
              Hi, I’m James Shen. I’m a CS + psychology grad building my own little corner of the internet. I spend most of my days reading, designing, writing, and trying to make sense of the world. I’m drawn to the mix of logic and emotion, clean UI and thoughtful code, long walks with my dog and late-night ideas. This blog is where I test what I’ve been learning by shaping those ideals through more long-form, structured essays.
            </div>

          </div>
          
          <div className="flex flex-col items-center">
            <p className="font-extrabold text-2xl">
              Featured Notes
            </p>
          </div>
        </div>
      </div>

    </div>

  );
}