import { ContactHeading } from '@/components/contact/ContactHeading'
import { ContactInfo } from '@/components/contact/ContactInfo'
import ContactForm from './ContactForm'

export const Contact = () => {
  return (
    <section className="container pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-44 lg:pb-[88px] xl:pt-[200px] xl:pb-[100px]">
      <div className="">
        <ContactHeading />
        <div className="grid items-center justify-center gap-10 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
