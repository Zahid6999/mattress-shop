'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function NavbarV2() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Delivery', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <nav className="bg-[#d5dbd2] px-4 py-4 border-b border-[#a3a99f]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
         <Image src="/images/logo/logo.jpeg" alt="Logo" className="rounded" width={60} height={60}/ >
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-10 font-medium text-gray-900">
  {navLinks.map((link) => (
    <li
      key={link.name}
      className="relative overflow-hidden pb-[1.5px]
                 before:absolute before:bottom-0 before:left-0 
                 before:h-[1.9px] before:w-full before:origin-right 
                 before:scale-x-0 before:bg-[#d40027] 
                 before:transition-transform before:duration-700 
                 before:content-[''] 
                 hover:before:origin-left hover:before:scale-x-100"
    >
      <Link href={link.href} className="hover:text-[#d40027] transition">
        {link.name}
      </Link>
    </li>
  ))}
</ul>

        {/* Desktop Button */}
       <li>
          <a href="/contact.html" className="rv-button rv-button-sm rv-button-secondary">
            <div className="rv-button-top">
              <span>Get Quote</span>
            </div>
            <div className="rv-button-bottom">
              <span>Get Quote</span>
            </div>
          </a>
        </li>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 -translate-x-16 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 mt-4 px-4 text-gray-900 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="block hover:text-gray-600 transition">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              className="mt-2 inline-block w-full text-center bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
