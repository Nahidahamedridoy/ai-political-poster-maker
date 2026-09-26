"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Templates", href: "/templates" },
    { name: "How It Works", href: "/how-it-works" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-2xl text-primary tracking-tight">
              PosterAI
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link href="/login" className="text-muted hover:text-primary font-medium">
              Login
            </Link>
            <Button as={Link} href="/create" className="bg-primary text-white font-semibold hover:bg-primary/90 shadow-sm">
              Create Poster
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-primary hover:bg-base"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-slate-100 shadow-lg pb-4">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block pl-6 pr-4 py-2 text-base font-medium text-main hover:bg-base hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block pl-6 pr-4 py-2 text-base font-medium text-main hover:bg-base hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <div className="pl-6 pr-4 py-3">
              <Button as={Link} href="/create" className="w-full bg-primary text-white font-semibold hover:bg-primary/90">
                Create Poster
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
