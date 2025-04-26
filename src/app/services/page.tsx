import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { mattresses } from '../../../data/servicesData'

export const metadata: Metadata = {
  title: 'Mattress Shop - services',
  description:
    'Explore our range of mattress services, including expert advice, delivery, setup, and mattress removal. Proudly serving customers across Australia with quality and care.',
}

const page = () => {
  return (
    <section className="pt-36 pb-14 md:pt-40 md:pb-16 lg:pt-44 lg:pb-[88px] xl:pt-[200px] xl:pb-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div data-aos="fade-up" data-aos-duration="800" className="flex-1">
            <div className="mb-3 inline-block rounded-[72px] bg-[#18181817] md:mb-4 dark:bg-[#edf0f533]">
              <span className="inline-block px-[17px] py-2 text-xs font-medium tracking-[0.96px] text-black uppercase">
                Services
              </span>
            </div>

            <h2 className="">
              Your Exclusive <br className="hidden md:block" />
              <span className="text-[#e64445] italic">Mattress</span> Products
            </h2>
          </div>
          <div className="flex-1 max-md:w-full" data-aos="fade-up" data-aos-duration="800">
            <p className="text-[#181818b3]/70 max-md:text-justify md:max-w-lg md:place-self-end md:text-right">
              We offer expert digital solutions to boost your brand and online presence. Our services drive growth,
              engagement, and success in the digital world.
            </p>

            <ul className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/contact" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top w-full">
                    <span>Get Free Quotes</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Get Free Quotes</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Products  */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-2">
          {mattresses.map((item, idx) => (
            <div
              key={idx + 1}
              className="relative rounded-[12px]"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center">
              {/* Image container with gradient overlay */}
              <figure className="relative max-w-full overflow-hidden rounded-[12px] md:h-[573px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="h-full w-full cursor-pointer rounded-b-[12px] object-cover object-center transition-transform duration-200 ease-in hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-40 bg-gradient-to-t from-black/80 to-transparent" />
              </figure>

              {/* Text over the image */}
              <div className="absolute bottom-[150px] left-6 z-20">
                <div className="flex items-center gap-2 max-sm:flex-wrap">
                  <h3 className="mb-1 font-semibold tracking-wide text-[var(--color-backgroundBody)]">{item.name}</h3>

                  {item.feelOptions.map((feel) => (
                    <div key={feel} className="inline-block rounded-[72px] bg-[#ff6633]">
                      <span className="dark:text-backgroundBody inline-block px-[17px] py-1.5 text-[10px] font-medium tracking-[0.96px] text-[var(--color-background)] uppercase">
                        {feel}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="inline text-xl font-bold tracking-wide text-[var(--color-backgroundBody)]">
                  Price: A${item.price}
                </p>
              </div>

              {/* Product features below the image */}
              <div>
                <h6 className="mt-6">Product Feature</h6>
                <ul className="mt-3.5 grid max-w-[380px] grid-cols-2 [&>*:not(:last-child)]:mb-1">
                  {item.features.map((list) => (
                    <li key={list} className="inline-flex items-center gap-1 text-black/80">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#000000"
                          viewBox="0 0 256 256">
                          <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                        </svg>
                      </span>
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page
