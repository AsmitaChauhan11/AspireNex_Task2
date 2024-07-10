import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Price",
  description: "Paste Url and track the product prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10x1 mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
