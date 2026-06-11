"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menus = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="relative bg-gray-800/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-center">
          <div className="flex space-x-4">
            {menus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  pathname === menu.href
                    ? "bg-gray-950/50 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}