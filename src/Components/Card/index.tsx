import Image from "next/image";

import Preview from "../../assets/preview.svg";

import { CardType } from "@/@types/Card";

const Card = ({ name, desc }: CardType) => {
  return (
    <div className="bg-gray p-10 w-fit rounded-xl relative bg-opacity-20 hover:scale-150 hover:bg-opacity-100 transition-all ease-linear group">
      <div className="">
        <Image
          src={Preview}
          alt="project's preview"
          className="group-hover:scale-75 transition-all ease-linear group-hover:translate-y-[-2rem]"
        />
        <div className="absolute group-hover:block group-hover:bottom-0 hidden transition-all delay-75 text-center gap-2 p-2">
          <div className="font-bold">{name}</div>
          <div className="text-[#9C9FA3] text-xs font-semibold">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
