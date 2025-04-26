import { Contact } from '@/components/contact/Contact'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Mattress Shop - Contact us',
  description:
    "et in touch with our friendly team for all your mattress inquiries, orders, and support. We're here to help customers across Australia with expert advice and fast service",
}
const page = () => {
  return <Contact />
}

export default page
