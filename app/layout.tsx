import type { Metadata } from "next";
import localFont from "next/font/local";
import { Urbanist } from "next/font/google"; // Import Urbanist from Google Fonts
import "./globals.css";

import LayoutNav from "@/components/layoutNav";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme-provider";

// Import GeistSans and GeistMono as local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Use Urbanist from Google Fonts
const urbanist = Urbanist({
  subsets: ["latin"], // Subsets you want to include
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Choose weights
  variable: "--font-urbanist", // Variable to use in CSS
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        <Toaster />
        <ModalProvider />
        <LayoutNav>{children}</LayoutNav>
      </body>
    </html>
  );
}
