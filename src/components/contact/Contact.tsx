

import { ContactHeading } from '@/components/contact/ContactHeading'
import { ContactInfo } from '@/components/contact/ContactInfo'
import ContactForm from './ContactForm'

export const Contact = () => {
  
  

  return (
    <section className="container">
      <div className="py-32">
        <ContactHeading />
        <div className="grid gap-10 md:grid-cols-2 justify-center items-center">
          <ContactInfo />

         <ContactForm/>
        </div>
      </div>
    </section>
  )
}
