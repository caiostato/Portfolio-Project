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
    <html lang="pt-br">
      <body>
        <div className="h-fit w-full bg-zinc-100 relative flex flex-col">
          <Header />
          <div className="absolute left-[15%] top-1/4">
            <HeroPattern />
          </div>
          {children}
          <div className="mt-32 py-10 text-zinc-900 mx-auto">Footer</div>
        </div>
      </body>
    </html>
  );
}
