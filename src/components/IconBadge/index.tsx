"use client";
import Image from "next/image";

import ReactIcon from "@/assets/reactIcon.png";

interface IconBadgeProps {
  name: string;
  image: any;
}

const IconBadge = ({ name, image }: IconBadgeProps) => {
  return (
    <div className="group relative">
      <Image
        src={image}
        alt={`${name} icon`}
        key={name}
        width={25}
        height={25}
      />
      <div className="hidden group-hover:block h-0 w-0 border-x-8 border-x-transparent border-b-[10px] border-zinc-200 absolute left-[10%]" />
      <div className="hidden group-hover:block absolute p-1 text-xs bg-zinc-200 text-zinc-500 rounded-lg bottom-[-120%] left-[-60%]">
        {name}
      </div>
    </div>
  );
};

export default IconBadge;
