"use client";
import { Search, Globe, ShoppingCart } from "lucide-react";

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
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5 cursor-pointer">
          <Search onClick={() => {}} size={18} />
          <Globe size={18} />
          <ShoppingCart onClick={() => {}} size={18} />
        </div>
      </div>
    </header>
  );
};
