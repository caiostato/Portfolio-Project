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
      <body>{children}</body>
    </html>
  );
}
