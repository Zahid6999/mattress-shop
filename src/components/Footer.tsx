// app/components/Footer.tsx
import { FaFacebookMessenger } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io5'
import { SiFacebook } from 'react-icons/si'

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '#' },
      { name: 'Reviews', href: '#' },
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'Mattress', href: '#' },
      { name: 'Hybrid', href: '#' },
      { name: 'Pillow', href: '#' },
      { name: 'Bed', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
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
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="md:w-[36%]">
          <h6 className="mb-3 font-semibold">Stay Informed, Sleep Better</h6>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-full bg-white px-4 py-2.5 text-sm text-black/70 shadow placeholder:text-black/50 focus:outline-none"
            />
            <button className="rounded-full bg-[#e64445] px-4 py-2 text-sm text-white transition hover:bg-[#fc7c7c]">
              Submit
            </button>
          </form>
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
