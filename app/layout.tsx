import "./globals.css";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import type { Metadata } from "next";
import Providers from "@/lib/Providers";
import { Footer } from "@/components/shared";
import { Navbar } from "@/components/shared/navbar";
import { Inter as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Heal",
  description: "Developing by Mehedi Hasan",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased max-w-[1444px] mx-auto",
            fontSans.variable
          )}
        >
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
