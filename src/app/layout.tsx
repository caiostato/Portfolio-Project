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
        <div className="h-screen w-full bg-zinc-100 relative flex flex-col">
          <Header />
          <div className="absolute left-[15%] top-1/4">
            <HeroPattern />
          </div>
          {children}
          <div className="absolute text-zinc-900 bottom-0 py-10 left-[50%]">
            Footer
          </div>
        </div>
      </body>
    </html>
  );
}
