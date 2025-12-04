import Image from "next/image";


export default function BlogCard() {
  return (
    <div className="flex flex-col gap-2 max-w-[350px]">
      <div className="w-full aspect-video relative">
        <Image 
          src="/grapes-of-wrath-thumbnail.png"
          alt="grapes of wrath thumbnail"
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <p className="text-xl font-bold">
          The Grapes of Wrath in 2025: And How The Great Owners Never Left
      </p>
      <div className="nav-links text-sm flex gap-2 text-[#919191]">
        <a>
          James Shen

        </a>
        <a>
          Nov 18, 2025
        </a>
      </div>
      <div className="line-clamp-3 text-md">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc... 




      </div>
      
    
    </div>
  )
}