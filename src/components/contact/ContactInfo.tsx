import { Mail, MapPinned, MessagesSquare, Phone } from 'lucide-react'
import Link from 'next/link'

export const ContactInfo = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <div>
        <Mail className="stroke-dark-black mb-3" />
        <p className="text-dark-black mb-2 text-lg font-semibold">Email Us</p>
        <p className="mb-3 text-base text-[#737373]">Our team is ready to assist.</p>
        <Link href="mailto:abc@example.com" className="font-semibold hover:underline">
          abc@example.com
        </Link>
      </div>
      <div>
        <MessagesSquare className="stroke-dark-black mb-3" />
        <p className="text-dark-black mb-2 text-lg font-semibold">Live Chat Support</p>
        <p className="mb-3 text-base text-[#737373]">Reach out for quick help.</p>
        <Link href="/chat" className="font-semibold hover:underline">
          Start a new chat
        </Link>
      </div>
      <div>
        <MapPinned className="stroke-dark-black mb-3" />
        <p className="text-dark-black mb-2 text-lg font-semibold">Visit Us</p>
        <p className="mb-3 text-base text-[#737373]">Drop by our office for a chat.</p>
        <Link href="/contact#map" className="font-semibold hover:underline">
          1234 Street Name, City Name
        </Link>
      </div>
      <div>
        <Phone className="stroke-dark-black mb-3" />
        <p className="text-dark-black mb-2 text-lg font-semibold">Call Us</p>
        <p className="mb-3 text-base text-[#737373]">We&apos;re available Mon–Fri, 9am–5pm.</p>
        <Link href="tel:+1234567890" className="font-semibold hover:underline">
          +123 456 7890
        </Link>
      </div>
    </div>
  )
}
