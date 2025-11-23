'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/config';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-ivory/95 dark:bg-brand-navy/95 backdrop-blur-sm shadow-md">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="group">
            <div className="w-24 h-24 relative">
              <Image
                src="/images/logo.png"
                alt="東京青春酒場"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* デスクトップナビ */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-navy dark:text-brand-ivory hover:text-brand-vermilion dark:hover:text-brand-vermilion font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* モバイルメニューボタン */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-navy dark:text-brand-ivory p-2"
              aria-label="メニュー"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slideUp">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-navy dark:text-brand-ivory hover:text-brand-vermilion dark:hover:text-brand-vermilion font-medium transition-colors duration-200 py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
