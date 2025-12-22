'use client'

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="w-full border-b border-[#E5E5E5]">
      <div className="flex py-4 mx-auto">
        <div 
          className="font-bold text-xl sm:text-4xl px-4 hover:cursor-pointer"
          onClick={() => router.push('/')}
        >
          hummusnotes
        </div>
        <nav className="nav-links px-4 flex items-center text-sm sm:text-xl font-bold gap-5">
          <a
            className=""
            onClick={() => router.push('/notes')}
          >
            Notes
          </a>
          <a 
            className=""
            onClick={() => router.push('/about')}
          >
            About
          </a>
          <a
            className=""
            onClick={() => router.push('/contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )


}