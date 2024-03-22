import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio - Beatriz Miranda",
  description: "Meu nome é Beatriz, desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
