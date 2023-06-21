"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Github, Linkedin, Newspaper } from "lucide-react";

const Header = () => {
  const { push } = useRouter();
  return (
    <div className="w-full h-20 bg-zinc-100">
      <div className="flex flex-row px-20 mx-10 border-b border-zinc-300 h-full py-6 justify-between">
        <div className="text-zinc-900 text-xl font-medium">Caio Stato</div>
        <div className="text-zinc-900 text-base font-medium flex flex-row gap-28">
          <Link
            className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer"
            href="/sobre"
          >
            Sobre
          </Link>
          <Link
            className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer"
            href="/projetos"
          >
            Projetos
          </Link>
        </div>
        <div className="flex flex-row gap-10">
          <a
            target="_blank"
            href="https://github.com/caiostato"
            rel="noopener noreferrer"
          >
            <Github
              className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer "
              size={36}
              strokeWidth={1}
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/caiostato/ "
            rel="noopener noreferrer"
          >
            <Linkedin
              className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer"
              size={36}
              strokeWidth={1}
            />
          </a>
          <a
            href={"/curriculum.pdf"}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Newspaper
              className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer"
              size={36}
              strokeWidth={1}
            />
          </a>
        </div>
        {/* add links */}
      </div>
    </div>
  );
};

export default Header;
