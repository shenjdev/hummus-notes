'use client'

import React from 'react';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation"

// NOTE: Since you are using TypeScript, this uses React.FC for the component definition.

export default function Footer() {

  const router = useRouter();
  const pathname = usePathname();

  return (
    // Outer container: full width, bottom border
    <footer className="w-full border-t-2 border-[#E5E5E5]">
      <div className="justify-between items-center flex pt-4 pb-4 sm:pb-0 px-5 mx-auto">
        <nav className="text-sm sm:text-base font-bold text-[#9191919] flex flex-col nav-links">
          <a>Notes</a>
          <a>About</a>
          <a>Contact</a>

        </nav>
        <div className="flex-col sm:flex-row flex gap-2 sm:gap-5">
          <p className="text-sm sm:text-base font-bold">Subscribe to the newsletter</p>
          <input className="border-2 border-[#919191] rounded-sm" placeholder="Enter your email" type="email" />
        </div>

      </div>
      <div className="justify-between items-center flex pb-4 px-5 mx-auto">
        <p className="text-sm sm:text-base md:text-lg">
          powered by <span className="font-extrabold">hummus</span>
        </p>
        <div className="flex items-center gap-5 nav-links">
          <a>
            <Image 
              src="/gmail.webp"
              height={50}
              width={50}
              alt="Gmail"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </a>
          <a>
            <Image 
              src="/linkedin.png"
              height={50}
              width={50}
              alt="LinkedIn"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />

          </a>
          <a>
            <Image 
              src="/github.png"
              height={50}
              width={50}
              alt="GitHub"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />

          </a>
            
      

        </div>
        
      </div>
    </footer>
    
  );
}