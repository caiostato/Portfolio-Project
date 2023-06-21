"use client";
import "./globals.css";

import Header from "@/components/Header";
import { HeroPattern } from "@/components/HeroPattern";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <div className="h-full w-full bg-zinc-100 relative flex flex-col overflow-y-scroll scrollbar-thin scrollbar-track-gray-300">
          <Header />
          <div className="fixed left-[15%] top-1/4">
            <HeroPattern />
          </div>
          {children}
          <div className="absolute bottom-0 left-1/2 text-zinc-900 py-10">
            Footer
          </div>
        </div>
      </body>
    </html>
  );
}
