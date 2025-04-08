import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { colors } from "@/constants/colors";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECESA",
  description: "Join ECESA to connect with fellow tech enthusiasts, build innovative projects, and shape the future of electronics and computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>⚡</text></svg>"></link>
          <link rel="icon" href="/faicon.png" sizes="any" />
        </head>

        <body
          className={`${geistSans.variable} ${geistMono.variable} bg-${colors.background.primary} antialiased scroll-smooth flex flex-col gap-8`}
        >
          <Navbar />
          <Toaster />
          {children}
        </body>
      </html>
    </>

  );
}
