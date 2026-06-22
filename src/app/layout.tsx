import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Continent Codex",
  description: "An archival catalog of Andrzej Sapkowski's dark fantasy realm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-950">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-zinc-950 text-zinc-100`}>
        {/* Global Component */}
        <Navbar />
        
        {/* The active page content injects right here */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Global Component */}
        <Footer />
      </body>
    </html>
  );
}