"use client";
import Image from "next/image";

import Header from "@/components/Header";
import { HeroPattern } from "@/components/HeroPattern";

import ExpressIcon from "@/assets/expressIcon.png";
import NodeIcon from "@/assets/nodeIcon.png";
import NextIcon from "@/assets/nextIcon.png";
import TailwindIcon from "@/assets/tailwindIcon.png";
import ReduxIcon from "@/assets/reduxIcon.png";

const Home = () => {
  const handleClick = () => {};
  return (
    <>
      <main className="w-[38%] mx-auto">
        <div className=" flex flex-col mt-52 z-10 w-full">
          <div className="text-zinc-900 font-poppins font-semibold text-2xl">
            Olá, sou Caio Stato
          </div>
          <div className="text-zinc-900 font-poppins font-extrabold text-7xl tracking-tighter flex group justify-between">
            <div className="text-purple-650">FullStack</div>
            Developer
          </div>
          <div className="flex flex-col w-full items-center">
            <div className=" flex flex-row gap-20 py-10">
              <div className="group relative">
                <Image
                  className="group-hover:scale-110 duration-100 ease-in"
                  src={NextIcon}
                  alt="nextjs tech icon"
                  width={75}
                  height={75}
                />
                {/* <div className="group-hover:visible invisible text-zinc-300 bg-zinc-700 absolute left-[15%] px-2 py-1 rounded-lg mt-2">
                NextJS
              </div> */}
              </div>
              <div className="group relative">
                <Image
                  className="group-hover:scale-110 duration-100 ease-in"
                  src={TailwindIcon}
                  alt="tailwind tech icon"
                  width={75}
                  height={75}
                />
                {/* <div className="group-hover:visible invisible text-zinc-300 bg-zinc-700 absolute left-[5%] px-4 text-center py-1 rounded-lg mt-2">
                Tailwind CSS
              </div> */}
              </div>
              <div className="group relative">
                <Image
                  className="group-hover:scale-110 duration-100 ease-in"
                  src={ReduxIcon}
                  alt="reduxjs tech icon"
                  width={75}
                  height={75}
                />
                {/* <div className="group-hover:visible invisible text-zinc-300 bg-zinc-700 absolute left-[15%] px-2 py-1 rounded-lg mt-2">
                ReduxJS
              </div> */}
              </div>
            </div>
            <div className="flex flex-row gap-20 items-center">
              <div className="group relative">
                <Image
                  className="group-hover:scale-110 duration-100 ease-in"
                  src={NodeIcon}
                  alt="node tech icon"
                  width={75}
                  height={75}
                />
                {/* <div className="group-hover:visible invisible text-zinc-300 bg-zinc-700 absolute left-[15%] px-2 py-1 rounded-lg mt-2">
                ReactJS
              </div> */}
              </div>
              <div className="group relative">
                <Image
                  className="group-hover:scale-110 duration-100 ease-in"
                  src={ExpressIcon}
                  alt="express tech icon"
                  width={75}
                  height={75}
                />
                {/* <div className="group-hover:visible invisible text-zinc-300 bg-zinc-700 absolute left-[15%] px-2 py-1 rounded-lg mt-2">
                ReactJS
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
