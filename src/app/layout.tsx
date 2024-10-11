import type { Metadata } from "next";
import localFont from "next/font/local";
import '@/styles/globals.css';
import { Toaster } from "@/components/ui/Toaster";
import { Header } from "@/components/Header";

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

export const metadata: Metadata = {
  title: "TripleR",
  description: "",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto h-full">
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
