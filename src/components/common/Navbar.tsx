'use client'
import { Menu } from 'lucide-react'
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
        <div className="flex justify-between">
          {/* logo  */}
          <Link href={'/'}>
            <figure className="size-10 overflow-hidden">
              <Image src={BrandLogo} alt="brand-logo" className="object-cover" />
            </figure>
          </Link>

          <div className="relative flex items-center justify-center" onClick={handleShowMenu}>
            <Menu className="stroke-[#141515]" />

            {showMobileMenu && (
              <ul className="absolute top-[90%] right-[10%] z-[999] w-[170px] space-y-5 rounded-lg border border-stone-400 bg-white p-4">
                <li className="text-black">
                  <Link href={'/services'}>Services</Link>
                </li>
                <li className="text-black">
                  <Link href={'/contact'}>Contact</Link>
                </li>
                <li className="rounded-3xl bg-gray-600 px-3 py-1.5 text-sm">
                  <Link href={'/services'} className="text-white">
                    See all services
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* nav links  */}
          <ul className="hidden items-center gap-16 md:flex">
            <li>
              <Link
                className="bg-[length:0%_100%] bg-left bg-no-repeat text-lg leading-snug transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1.000)] hover:bg-[length:100%_100%]"
                href={'/'}
                style={{
                  backgroundImage: 'linear-gradient(transparent calc(100% - 2px), #141515 2px)',
                }}>
                Home
              </Link>
            </li>

            <li>
              <Link
                className="bg-[length:0%_100%] bg-left bg-no-repeat text-lg leading-snug transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1.000)] hover:bg-[length:100%_100%]"
                href={'/services'}
                style={{
                  backgroundImage: 'linear-gradient(transparent calc(100% - 2px), #141515 2px)',
                }}>
                Services
              </Link>
            </li>
            <li>
              <Link
                className="bg-[length:0%_100%] bg-left bg-no-repeat text-lg leading-snug transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1.000)] hover:bg-[length:100%_100%]"
                href={'/contact'}
                style={{
                  backgroundImage: 'linear-gradient(transparent calc(100% - 2px), #141515 2px)',
                }}>
                Contact
              </Link>
            </li>
          </ul>
          {/* cta btn  */}
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
