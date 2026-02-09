import Image from "next/image"

export default function Page() {
  return (
    <div>
      <div>
        <Image 
          src="/page-under-construction.jpg"
          height={1000}
          width={1000}
          alt="yolo"
          />
      </div>
      About
    </div>
  )
}