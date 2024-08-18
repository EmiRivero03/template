import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template",
  description: "Template with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-dvh dark:bg-black dark:text-white bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}

// ${inter.className}