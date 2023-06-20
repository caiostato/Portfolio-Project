"use client";

import Link from "next/link";

import { Github, Linkedin, Newspaper } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full h-20">
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
          {/* https://github.com/caiostato */}
          <Github
            className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer "
            size={36}
            strokeWidth={1}
          />
          {/* https://www.linkedin.com/in/caiostato/ */}
          <Linkedin
            className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer"
            size={36}
            strokeWidth={1}
          />
          <Newspaper
            className="text-zinc-900 hover:text-purple-650 ease-in duration-100 hover:scale-105 cursor-pointer"
            size={36}
            strokeWidth={1}
          />
        </div>
        {/* add links */}
      </div>
    </div>
  );
};

export default Header;
