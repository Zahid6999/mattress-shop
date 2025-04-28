// app/components/Footer.tsx
import Link from 'next/link'
import { FaFacebookMessenger } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'
import { MdLocationOn, MdMarkEmailRead } from 'react-icons/md'
import { SiFacebook } from 'react-icons/si'

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '#', upcoming: 'soon' },
      { name: 'Reviews', href: '#', upcoming: 'soon' },
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'Mattress', href: '/services' },
      { name: 'Hybrid', href: '#', upcoming: 'soon' },
      { name: 'Pillow', href: '#', upcoming: 'soon' },
      { name: 'Bed', href: '/services' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Blog', href: '#', upcoming: 'soon' },
      { name: 'FAQs', href: '#', upcoming: 'soon' },
      { name: 'Contact Us', href: '#', upcoming: 'soon' },
      { name: 'Privacy Policy', href: '#', upcoming: 'soon' },
    ],
  },
]

const Footer = () => {
  return (
    <footer
      className="rounded-t-3xl bg-[#f3f8f7] pt-14 pb-2.5 text-[#4a7271] md:pt-16 lg:pt-[88px] xl:pt-[100px]"
      id="jak">
      <div className="mx-auto flex max-w-[1300px] flex-col items-start gap-8 px-4 md:flex-row md:flex-wrap lg:flex-nowrap">
        {/* Logo + Social */}
        <div className="space-y-4 md:w-[36%]">
          <h3 className="font-normal">
            Mattress<span className="text-xs text-[#e64445]">BY</span>
          </h3>
          <div className="flex space-x-4">
            <SiFacebook className="h-5 w-5 fill-[#e64445] stroke-[#e64445] transition-all duration-300 ease-linear hover:-translate-y-1 hover:fill-[var(--text-color)] hover:stroke-[var-(--text-color)]" />
            <IoLogoInstagram className="h-5 w-5 fill-[#e64445] stroke-[#e64445] transition-all duration-300 ease-linear hover:-translate-y-1 hover:fill-[var(--text-color)] hover:stroke-[var-(--text-color)]" />
            <FaFacebookMessenger className="h-5 w-5 fill-[#e64445] stroke-[#e64445] transition-all duration-300 ease-linear hover:-translate-y-1 hover:fill-[var(--text-color)] hover:stroke-[var-(--text-color)]" />
          </div>
        </div>

        {/* Mapped Sections */}
        {footerSections.map((section) => (
          <div key={section.title} className="md:w-[20%]">
            <h6 className="mb-4 text-[20px] font-semibold">{section.title}</h6>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block text-black/60 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#d40027]">
                    {link.name}
                  </a>
                  {link.upcoming && (
                    <span className="ml-1.5 rounded bg-red-600 px-0.5 py-[1px] text-[8px] text-white">
                      {link.upcoming}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="space-y-4 md:w-[36%]">
          <div>
            <h6 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <MdLocationOn className="fill-black text-2xl" />
              Location
            </h6>
            <p className="text-sm text-black/60">Jape Home Maker Darwin, T20C, 356 Bagot Road, Millner, NT 0810</p>
          </div>
          <div>
            <h6 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <MdMarkEmailRead className="fill-black text-2xl" />
              Email
            </h6>
            <Link
              href="mailto:mbadarwin100@gmail.com"
              className="inline-block text-red-600 transition-colors duration-300 hover:text-red-800">
              mbadarwin100@gmail.com
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mt-10 border-t border-gray-300 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} All rights reserved | Mattress BY appointment.
      </div>
    </footer>
  )
}

export default Footer
