'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import BrandLogo from '../.../../../../public/images/logo/matress.png'

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <nav className="border-b border-b-stone-400 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo  */}
          <Link href={'/'}>
            <figure className="size-10 overflow-hidden">
              <Image src={BrandLogo} alt="brand-logo" className="object-cover" />
            </figure>
          </Link>

          {/* mobile toggle and menu */}
          <div className="relative flex items-center justify-center md:hidden">
            <button onClick={handleShowMenu}>
              {showMobileMenu ? <X className="stroke-[#141515]" /> : <Menu className="stroke-[#141515]" />}
            </button>

            <ul
              className={`absolute top-[90%] right-0 z-[999] w-[180px] transform space-y-5 rounded-lg border border-stone-400 bg-white p-4 transition-all duration-300 ease-in-out ${
                showMobileMenu ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
              }`}>
              <li className="text-black">
                <Link href={'/services'} onClick={() => setShowMobileMenu(false)}>
                  Services
                </Link>
              </li>
              <li className="text-black">
                <Link href={'/contact'} onClick={() => setShowMobileMenu(false)}>
                  Contact
                </Link>
              </li>
              <li className="rounded-3xl bg-gray-600 px-3 py-1.5 text-sm">
                <Link href={'/services'} className="text-white" onClick={() => setShowMobileMenu(false)}>
                  See all services
                </Link>
              </li>
            </ul>
          </div>

          {/* nav links (desktop) */}
          <ul className="hidden items-center gap-16 md:flex">
            {['Home', 'Services', 'Contact'].map((item, index) => (
              <li key={index + 1}>
                <Link
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="bg-[length:0%_100%] bg-left bg-no-repeat text-lg leading-snug transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1.000)] hover:bg-[length:100%_100%]"
                  style={{
                    backgroundImage: 'linear-gradient(transparent calc(100% - 2px), #141515 2px)',
                  }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* cta btn (desktop) */}
          <div className="hidden rounded-lg bg-gray-600 px-5 py-2.5 md:block">
            <Link href={'/services'} className="text-white">
              See all services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
