import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JIMNY.AI | Tu conciencia digital",
  description:
    "Descubre JIMNY.AI, el acompañante digital que te motiva, te organiza y crece contigo. Finalista U-TAD 2025.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#2d6f9e]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
