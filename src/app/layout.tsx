import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk } from "next/font/google";
import { HashScrollManager } from "@/app/hash-scroll-manager";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Caro Marchioni | Resume",
  description:
    "Resume landing page for Caro Marchioni, a product-minded software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <HashScrollManager />
        {children}
      </body>
    </html>
  );
}
