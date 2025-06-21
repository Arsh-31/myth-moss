import type { Metadata } from "next";
import { cinzel, cormorant, imFell } from "../fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mist & Moss",
  description: "The newspaper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${imFell.variable}`}
    >
      <body className="font-cormorant">{children}</body>
    </html>
  );
}
