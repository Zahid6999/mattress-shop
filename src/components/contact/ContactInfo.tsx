import { Mail, MapPinned, MessagesSquare, Phone } from 'lucide-react'
import Link from 'next/link'

export const ContactInfo = () => {
  return (
    <div
      className="grid gap-10 justify-self-end sm:grid-cols-2 md:h-[380px] md:max-w-xl"
      data-aos="fade-right"
      data-aos-duration="800">
      <div>
        <Mail className="stroke-dark-black mb-3" />
        <h6 className="mb-2 text-lg font-semibold">Email Us</h6>
        <p className="mb-3 text-base text-[#181818b3]/70">Our team is ready to assist.</p>
        <Link href="mailto:mbadarwin100@gmail.com" className="font-semibold hover:underline">
          mbadarwin100@gmail.com
        </Link>
      </div>
      <div>
        <MessagesSquare className="stroke-dark-black mb-3" />
        <h6 className="mb-2 text-lg font-semibold">Live Chat Support</h6>
        <p className="mb-3 text-base text-[#181818b3]/70">Reach out for quick help.</p>
        <Link href="/chat" className="font-semibold hover:underline">
          Start a new chat
        </Link>
      </div>
      <div>
        <MapPinned className="stroke-dark-black mb-3" />
        <h6 className="mb-2 text-lg font-semibold">Visit Us</h6>
        <p className="mb-3 text-base text-[#181818b3]/70">Drop by our office for a chat.</p>
        <Link href="/contact#map" className="font-semibold hover:underline">
          Jape Home Maker Darwin, T20C, 356 Bagot Road, Millner, NT 0810
        </Link>
      </div>
      <div>
        <Phone className="stroke-dark-black mb-3" />
        <h6 className="mb-2 text-lg font-semibold">Call Us</h6>
        <p className="mb-3 text-base text-[#181818b3]/70">We&apos;re available Mon–Fri, 9am–5pm.</p>
        <Link href="tel:+1234567890" className="font-semibold hover:underline">
          0404 229 933
        </Link>
      </div>
    </div>
  )
}
