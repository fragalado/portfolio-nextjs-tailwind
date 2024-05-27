import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { montserrat } from "./ui/fonts";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
  title: "Fran's Portfolio",
  description: "Created with nextjs and tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="dark:bg-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
