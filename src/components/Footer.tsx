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
    <footer className="px-20 flex flex-col w-full border-t border-[#E5E5E5] bg-white py-4">
      <div className="flex w-full justify-between">
        <div className="nav-links flex flex-col">
          <a
            onClick={() => router.push('/about')}
          >
            About
          </a>
          <a
            onClick={() => router.push('/contact')}
          >
            Contact
          </a>
          <a
            onClick={() => router.push('notes')}
          >
            Notes
          </a>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xl font-bold  ">
            Subscribe for notifications
          </p>
          <input
            type="text"
            id="subscribe"
            placeholder="example@email.com"
            className="border-2 [#E5E5E5] rounded-sm pl-1 pr-2"
          />
        </div>
      </div>
      
      <div className="w-full flex justify-between">
        <div className="text-xl flex justify-center items-center">
          powered by <span className="ml-2 font-bold">hummus</span>
        </div>
        <div className="nav-links flex gap-10">
          <a href="" className="">
            <Image 
              src="/gmail.webp"
              width={50}
              height={50}
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/james-shen-14bb53268/" className="">
            <Image 
              src="/linkedin.png"
              width={50}
              height={50}
              alt=""
            />
          </a>
          <a href="https://github.com/jshen8302" className="">
            <Image 
              src="/github.png"
              width={50}
              height={50}
              alt=""
            />
          </a>
          
        </div>
        
      </div>

    </footer>
    
  );
}