import "./globals.css";
import Navbar from "@/components/Navbar";
import { roboto } from "./fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: "Belajar Next.js",
    template: "%s | Belajar Next.js",
  },

  description:
    "Tutorial Next.js modern dengan App Router, SEO, dan TypeScript",

  openGraph: {
    siteName: "Belajar Next.js",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${roboto.variable} font-sans min-h-screen bg-gray-900 text-white`}
      >
        <header>
          <Navbar />
        </header>

        <main className="mx-auto max-w-7xl p-6">
          {children}
        </main>

        <footer className="border-t border-white/10 p-4 text-center text-gray-400">
          I'm Here To Stay (Footer)
        </footer>
      </body>
    </html>
  );
}