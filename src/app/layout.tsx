import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/sections";

const ubuntu = Ubuntu({
  weight: ['500','700'],
  subsets: ['latin'],
});

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
      <body className={ubuntu.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
