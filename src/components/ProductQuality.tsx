'use client'

import Image from 'next/image'
import { FC } from 'react'

const features = [
  {
    icon: '/images/logo/award-1.svg',
    title: '80+ Years Experience',
    description: 'We have 80 years of manufacturing experiences.',
  },
  {
    icon: '/images/logo/award-2.svg',
    title: 'Australian Quality Standard',
    description: 'Our bedding ensures superior comfort and long-lasting performance.',
  },
  {
    icon: '/images/logo/award-3.svg',
    title: 'Eco-Friendly',
    description: 'Organic ceramics which over 7% passes thorough the muscles.',
  },
  {
    icon: '/images/logo/award-4.svg',
    title: 'Our Warranty',
    description: 'Our mattresses has no weight limitations.',
  },
  {
    icon: '/images/logo/award-5.svg',
    title: 'Handcrafted Nature',
    description: 'Our mattresses are developed by orthopedic specialists.',
  },
  {
    icon: '/images/logo/award-5.svg',
    title: 'Certified Mattress',
    description: 'A cooling substance that is up to 5 degrees less than a standard.',
  },
]

const ProductQuality: FC = () => {
  return (
    <section className="bg-[#f7f9f9] pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-around gap-20 lg:flex-row">
          {/* Left Image */}
          <figure className="lg:w-[40%]">
            <Image src="/images/mattresse-shape.png" alt="Mattress" className="w-full" width={540} height={399} />
          </figure>

          {/* Right Content */}
          <div className="lg:w-[60%]">
            <h2 className="mb-8 text-3xl font-semibold text-[var(--color-secondary)] md:text-[40px] lg:leading-[1.4]">
              Why Choose Our <br /> Products
            </h2>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="relative mt-1 h-12 w-12 rounded-b-xl bg-gray-300">
                    <Image src={item.icon} alt={item.title} fill className="size-[30px]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[0.024rem]">{item.title}</h3>
                    <p className="mt-2 max-w-[255px] text-sm text-black/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductQuality
