import "./globals.css";
import Navbar from "@/components/Navbar";
import { roboto } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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