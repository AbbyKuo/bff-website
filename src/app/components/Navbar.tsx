"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sessions', href: '#sessions' },
  { name: 'Locations', href: '#locations' },
  { name: 'Impact', href: '#impact' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Join', href: '#join' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-[200] relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">

            {/* Logo / Brand */}
            <div className="shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logos/5-1.png"
                  alt="BFF Logo"
                  width={120}
                  height={100}
                  className="object-contain max-h-16 w-auto md:max-h-20"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative text-gray-700 hover:text-blue-600 font-semibold text-lg transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <svg className="h-8 w-8 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop helps capture taps and guarantees menu layer sits above page content */}
      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 bg-black/20 z-[205] transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        id="mobile-menu"
        data-open={isOpen}
        className={`md:hidden fixed left-0 right-0 top-24 bg-white border-t border-gray-100 shadow-2xl z-[210] transition-all duration-200 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-3 py-3 rounded-md text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </>
  );
}