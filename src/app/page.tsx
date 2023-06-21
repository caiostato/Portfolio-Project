"use client";
import Image from "next/image";
import Card from "@/components/Card";

import ExpressIcon from "@/assets/expressIcon.png";
import NodeIcon from "@/assets/nodeIcon.png";
import NextIcon from "@/assets/nextIcon.png";
import TailwindIcon from "@/assets/tailwindIcon.png";
import ReduxIcon from "@/assets/reduxIcon.png";
import Anya from "@/assets/anya.jpg";
import Gaara from "@/assets/gaara.jpg";

const Home = () => {
  const handleClick = () => {};
  return (
    <>
      <div className="w-[38%] mx-auto h-screen" id="home">
        <div className=" flex flex-col mt-72 z-10 w-full">
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
      </div>
      <div className="w-full h-screen relative" id="sobre">
        {/* <div className="bg-purple-650 border-b-zinc-100 border-b-[10em] border-l-[100vw] border-l-transparent absolute w-full h-1/2 z-0" /> */}
        <div className="text-zinc-900 font-poppins font-medium text-2xl mt-52 leading-relaxed w-[38%] mx-auto z-30 ">
          <div className="text-purple-650 text-4xl py-4 font-semibold font-poppins tracking-tighter">
            Sobre mim
          </div>
          <div className=" text-left">
            Sou um desenvolvedor FullStack, com especialidade em Frontend{" "}
            <span className="text-purple-650 font-semibold">ReactJS</span>, mas
            também já trabalhei com desenvolvimento mobile usando a ferramenta{" "}
            <span className="text-purple-650 font-semibold">React Native</span>.
            No meu início de carreira, tive a oportunidade de trabalhar com
            Backend também, utilizando{" "}
            <span className="text-purple-650 font-semibold">NodeJS</span>, essa
            experiência se provou muito frutífera, ainda que o projeto esteja em
            desenvolvimento. As tecnologias que eu tenho mais afinidade são{" "}
            <span className="text-purple-650 font-semibold">ReactJS</span>{" "}
            fazendo uso da biblioteca{" "}
            <span className="text-purple-650 font-semibold">NextJS</span>,{" "}
            <span className="text-purple-650 font-semibold">TailwindCSS</span> e{" "}
            <span className="text-purple-650 font-semibold">ReduxJS</span>, com
            essa stack de bibliotecas consigo uma alta performance com uma
            grande dinamicidade ao criar uma aplicação, contando também com uma
            ferramenta gerenciadora de estados.
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-40" id="projetos">
        <div className="w-full flex items-center flex-col mt-40">
          <div className="text-purple-650 text-4xl py-4 font-semibold font-poppins tracking-tighter">
            Meus Projetos
          </div>
          <div className="flex flex-col gap-10 z-30">
            <Card
              title={"Project Title "}
              desc={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ea
            iste id voluptates maiores cupiditate dolor! `}
              image={Anya}
            />
            <Card
              title={"Project Title "}
              desc={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ea
            iste id voluptates maiores cupiditate dolor! `}
              image={Anya}
              inversed
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
