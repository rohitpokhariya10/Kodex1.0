"use client";

import Link from "next/link";
import { Home, Info, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex  items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MyWebsite
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Info size={20} />
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}