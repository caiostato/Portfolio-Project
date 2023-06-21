"use client";
import "../globals.css";

import Header from "@/components/Header";
import { HeroPattern } from "@/components/HeroPattern";

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full bg-zinc-100 relative flex flex-col">
      <Header />
      <div className="absolute left-[15%] top-1/4">
        <HeroPattern />
      </div>
      {children}
      <div className="absolute bottom-0 left-1/2 text-zinc-900 py-10">
        Footer
      </div>
    </div>
  );
}
