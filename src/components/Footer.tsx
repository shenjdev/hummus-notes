import React from 'react';
import Image from 'next/image';

// NOTE: Since you are using TypeScript, this uses React.FC for the component definition.

export default function Footer() {
  return (
    // Outer container: full width, bottom border
    <footer className="px-20 flex justify-between w-full border-t border-[#E5E5E5] bg-white py-4">
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
      
    </footer>
  );
}