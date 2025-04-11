import ContactForm from '@/components/contact/ContactForm'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import ProductQuality from '@/components/ProductQuality'
import WhyChoose from '@/components/WhyChoose'

const page = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <WhyChoose />
      <ContactForm spacing />
      <ProductQuality />
    </>
  )
}

export default page
