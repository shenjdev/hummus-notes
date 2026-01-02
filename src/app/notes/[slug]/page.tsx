import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto  py-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px]">
        <main className="pt-8">
          <article className="w-full"> 
            <div className="w-full aspect-video relative mb-8">
              <Image 
                src="/chromakopia-thumbnail.jpeg"
                alt="thumbnail"
                fill
                className="object-cover object-top"
              
              />

            </div>
            <div className="max-w-[65ch] mx-auto px-5 md:px-8">
              <p className="text-3xl font-extrabold">
                Why Chromakopia was released at the peak of Tyler's career
              </p>
              <div>
                <a>
                  James Shen
                </a>
                <a>
                  Dec 22, 2025
                </a>
              </div>

            </div>
            
            

          </article>
        </main>
        <div className="bg-blue-50">
          yo
        </div>
      </div>

    </div>
 

  );
}