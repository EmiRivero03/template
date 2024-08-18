import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Template',
  description: 'Template with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-dvh w-full bg-white text-black dark:bg-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

// ${inter.className}
