import type { Metadata } from "next";
import { Mulish, Zilla_Slab } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import { cn } from '@/lib/utils'

const mulish = Mulish({ subsets: ["latin"], variable: '--font-sans' });
const zilla = Zilla_Slab({ subsets: ["latin"], variable: '--font-serif', weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Harman Shienh",
  description: "Harman's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'flex min-h-screen flex-col font-sans antialiased', 
        mulish.variable, zilla.variable)}
      >
        <Providers>
          <Header />
          <main className="grow">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
