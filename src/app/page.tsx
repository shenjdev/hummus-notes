// app/page.tsx or similar file where your main content lives

import Image from 'next/image';
// Import your blog card components, etc.

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-[740px]">
        <div className="mt-5 sm:mt-10 mb-7 sm:mb-10 hover:cursor-pointer">
          <Image 
            src="/mr-beast-thumbnail-money-pool.jpg"
            alt="Hero Banner"
            width={740}
            height={397}
          />
        </div>
        <p className="text-2xl sm:text-4xl font-extrabold mb-2 sm:mb-5 hover:cursor-pointer">
          How Mr. Beast represents all that is left of The American Dream
        </p>
        <div className="nav-links text-sm sm:text-xl text-[#919191] flex gap-2 mb-2 sm:mb-5">
          <a>
            James Shen
          </a>
          <a>
            Nov 26, 2025
          </a>
        </div>
        <div className="text-lg sm:text-2xl">
          <p className="line-clamp-3 sm:line-clamp-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc... 
          </p>
          <span className="text-[#919191]">Read More</span>
        </div>

      </section>

      {/* Recent Blog Section */}
      <section className="h-screen bg-gray-50 p-8">
    
      </section>
      
    </div>
  );
}
