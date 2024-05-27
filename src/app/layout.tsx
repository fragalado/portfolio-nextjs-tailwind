import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { montserrat } from "./ui/fonts";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="bg-slate-200 dark:bg-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
