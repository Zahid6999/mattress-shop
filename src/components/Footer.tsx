// app/components/Footer.tsx
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "Home", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Reviews", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Mattress", href: "#" },
      { name: "Hybrid", href: "#" },
      { name: "Pillow", href: "#" },
      { name: "Bed", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Blog", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#f3f8f7] text-[#4a7271] py-12 mt-20 rounded-t-3xl" id="jak">
        <div className="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row  items-start gap-8">
      {/* Logo + Social */}
      <div className="space-y-4 md:w-[36%]">
        <h3 className="font-normal">
          Mattress<span className="text-[#e64445] text-[12px]">BY</span>
        </h3>
        <div className="flex space-x-4 ">
          <SiFacebook className="w-5 h-5 stroke-[#4a7271] fill-[#4a7271] hover:stroke-[#e64445] hover:fill-[#e64445] transition-colors duration-300 ease-linear" />
          <IoLogoInstagram className="w-5 h-5 stroke-[#4a7271] fill-[#4a7271] hover:stroke-[#e64445] hover:fill-[#e64445] transition-colors duration-300 ease-linear"  />
          <FaFacebookMessenger className="w-5 h-5 stroke-[#4a7271] fill-[#4a7271] hover:stroke-[#e64445] hover:fill-[#e64445] transition-colors duration-300 ease-linear"  />
        </div>
      </div>

      {/* Mapped Sections */}
      {footerSections.map((section) => (
        <div key={section.title} className="md:w-[20%]">
          <h6 className="font-semibold text-[20px] mb-3">{section.title}</h6>
          <ul className="space-y-2 text-sm">
            {section.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#b5b26f] transition-all duration-300 hover:-translate-y-0.5 inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Newsletter */}
      <div className="md:w-[36%]">
        <h6 className="font-semibold mb-3">Stay Informed, Sleep Better</h6>
        <form className="flex space-x-2">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-2 rounded-full bg-white shadow text-sm focus:outline-none placeholder:text-black/50 text-black/70"
          />
          <button className="px-4 py-2 rounded-full bg-[#4a7271] text-white text-sm hover:bg-[#395c5b] transition">
            Submit
          </button>
        </form>
      </div>
    </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-10 pt-6 border-t border-gray-300">
        © Mattress BY appointment. All rights reserved 2025
      </div>
    </footer>
  );
};

export default Footer;
