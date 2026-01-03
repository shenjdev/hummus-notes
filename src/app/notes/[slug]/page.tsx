import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto  py-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_320px]">
        <main className="">
          <article className="w-full"> 
            <div className="w-full aspect-video relative mb-4">
              <Image 
                src="/chromakopia-thumbnail.jpeg"
                alt="thumbnail"
                fill
                className="object-cover object-top"
              
              />

            </div>
            <div className="px-2 md:px-6 mx-auto">
              <p className="text-xl sm:text-3xl font-extrabold mb-2 sm:mb-4 hover:cursor-pointer">
                Why Chromakopia was released at the peak of Tyler's career
              </p>
              <div className="nav-links text-sm sm:text-lg text-[#919191] flex gap-2 mb-2 sm:mb-4">
                <a>
                  James Shen
                </a>
                <a>
                  Dec 22, 2025
                </a>
              </div>
              <div className="text-base sm:text-lg">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.
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