"use client";
import Image from "next/image";
import CardButton from "../CardButton";
import IconBadge from "../IconBadge";

import ExpressIcon from "@/assets/expressIcon.png";
import NodeIcon from "@/assets/nodeIcon.png";
import NextIcon from "@/assets/nextIcon.png";
import TailwindIcon from "@/assets/tailwindIcon.png";
import ReduxIcon from "@/assets/reduxIcon.png";
import ReactIcon from "@/assets/reactIcon.png";

interface CardProps {
  title: string;
  desc: string;
  image: any;
  inversed?: boolean;
}

const Card = ({ title, desc, image, inversed = false }: CardProps) => {
  const data = [
    { name: "ReactJS", image: ReactIcon },
    { name: "NextJS", image: NextIcon },
    { name: "TailwindCSS", image: TailwindIcon },
  ];

  return (
    <div
      className={`flex ${
        inversed ? "flex-row-reverse" : "flex-row"
      } w-full py-10 h-[30rem]`}
    >
      <div className="px-2 flex flex-col justify-between items-center text-zinc-900 text-lg w-1/2 py-4 border-2 border-purple-650">
        <div className=" flex flex-col items-center gap-2">
          <div className="font-semibold text-2xl pb-2">{title}</div>
          <div className="flex flex-row gap-2 pb-4">
            {data.map((item) => {
              return (
                <IconBadge
                  key={item.name}
                  name={item.name}
                  image={item.image}
                />
              );
            })}
          </div>
          <div className="text-center text-zinc-500">{desc}</div>
        </div>
        <div className="flex flex-row gap-2">
          <CardButton text={"Live"} />
          <CardButton text={"Code"} />
        </div>
      </div>
      <div className="w-full relative bg-purple-650 flex items-center">
        {/* <Image src={image} alt="image" width={500} className="mx-auto" /> */}
      </div>
    </div>
  );
};

export default Card;
