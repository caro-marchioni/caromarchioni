import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caro Marchioni | Resume",
  description:
    "Resume landing page for Caro Marchioni, a product-minded software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
