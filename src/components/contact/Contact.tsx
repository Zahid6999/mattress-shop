import { ContactHeading } from '@/components/contact/ContactHeading'
import { ContactInfo } from '@/components/contact/ContactInfo'

export const Contact = () => {
  return (
    <section className="container">
      <div className="py-32">
        <ContactHeading />
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact details */}
          <ContactInfo />

          {/* Contact form */}
          <form className="mx-auto flex w-full flex-col gap-6 rounded-lg bg-gray-100 p-10 md:max-w-[564px]">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="firstName" className="text-dark-black text-sm leading-none font-medium">
                  First Name<sup className="ml-0.5 text-red-500">*</sup>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Your First Name"
                  className="border-dark-black/20 placeholder:text-dark-black/30 h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs transition outline-none placeholder:text-base focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="lastName" className="text-dark-black text-sm leading-none font-medium">
                  Last Name<sup className="ml-0.5 text-red-500">*</sup>
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Your Last Name"
                  className="border-dark-black/20 placeholder:text-dark-black/30 h-9 w-full rounded-md border px-3 py-1 text-base shadow-xs transition outline-none placeholder:text-base focus-visible:border-gray-100 focus-visible:ring-2 focus-visible:ring-gray-500/50"
                  required
                />
              </div>
            </div>

            {/* Add more fields here if needed

            <button
              type="submit"
              className="hover:bg-opacity-90 mt-4 h-10 w-full rounded-md bg-black font-medium text-white transition">
              Send Message
            </button> */}
          </form>
        </div>
      </div>
    </section>
  )
}
