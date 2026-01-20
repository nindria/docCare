"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-20 max-w-7xl overflow-hidden">
        
        {/* LEFT — LOGO */}
        <div className="flex w-1/2 items-center bg-[#D7E7EE] px-8">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="DocCare Logo"
              width={120}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* RIGHT — MENU */}
        <div className="flex w-1/2 items-center justify-end bg-[#D7E7EE] px-8">
          <nav className="flex items-center gap-12 font-medium text-sm text-[#1D546D]">
            <Link href="/" className="hover:underline">
              Home
            </Link>

            <Link href="/find-doctor" className="hover:underline">
              Find a doctor
            </Link>

            <Link href="/article" className="hover:underline">
              Article
            </Link>

            <Link href="/login">
            <button className="ml-2 rounded-lg bg-[#245b72] px-4 py-1.5 text-sm font-medium text-white">
              Sign in
            </button>
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}
