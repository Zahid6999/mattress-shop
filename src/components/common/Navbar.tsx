'use client'
import { useLenis } from 'lenis/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)

  const lenis = useLenis()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down
        setShowNav(false)
      } else {
        // Scrolling up
        setShowNav(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transform border-b border-[#a3a99f] bg-[#d40027] px-4 py-4 transition-transform duration-500 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href={'/'} className="flex-shrink-0">
          <Image src="/images/logo/logo.jpeg" alt="Logo" className="rounded" width={60} height={60} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center space-x-10 font-medium md:flex">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative overflow-hidden pb-[1.5px] before:absolute before:bottom-0 before:left-0 before:h-[1.9px] before:w-full before:origin-right before:scale-x-0 before:bg-[var(--color-backgroundBody)] before:transition-transform before:duration-700 before:content-[''] hover:before:origin-left hover:before:scale-x-100">
              <Link
                href={link.href}
                className="text-lg text-[#d8d8d4] transition hover:text-[var(--color-backgroundBody)]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <li className="list-none">
          <div
            className="rv-button rv-button-sm rv-button-white cursor-pointer"
            onClick={() => {
              lenis?.scrollTo('#contact-form', {
                duration: 2,
              })
            }}>
            <div className="rv-button-top">
              <span>Get Quote</span>
            </div>
            <div className="rv-button-bottom">
              <span>Get Quote</span>
            </div>
          </div>
        </li>

        {/* Mobile Menu Button */}
        <button className="text-gray-900 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 -translate-x-16 opacity-0'
        }`}>
        <ul className="mt-4 flex flex-col space-y-4 px-4 font-medium text-gray-900">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="block transition hover:text-gray-600">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="mt-2 inline-block w-full rounded-md bg-black px-6 py-2 text-center font-medium text-white transition hover:bg-gray-800">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
