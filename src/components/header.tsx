"use client";
import { Search, Globe, ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="h-20 z-100 sticky top-0 border-b bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <div className="text-3xl font-bold">
          MOON<span className="text-black">.</span>
        </div>
        <nav className="flex items-center gap-12">
          <ul className="flex gap-12 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5 cursor-pointer">
          <Search onClick={() => {}} size={18} />
          <Globe size={18} />
          <Link href="/basket" className="hover:opacity-70 transition-opacity">
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};
