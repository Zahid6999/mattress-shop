import Image from 'next/image'
import Link from 'next/link'
import { mattresses } from '../../data/servicesData'
export default function Portfolio() {
  return (
    <section className="pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-44 lg:pb-[88px] xl:pt-[140px] xl:pb-[100px]">
      <div className="container">
        <div
          className="mb-3.5 flex items-center justify-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-200">
          <div className="inline-block rounded-[52px] bg-[#d40027]">
            <h2 className="inline-block px-[17px] py-2 text-xs font-medium tracking-[0.96px] text-white uppercase">
              WHAT DO WE OFFER?
            </h2>
          </div>
        </div>
        <h3
          className="mb-7 text-center text-3xl md:mb-14 md:text-[50px]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-200">
          Comprehensive Mattress <br className="hidden md:block" /> Solutions
        </h3>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {mattresses.slice(0, 4).map((item, idx) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-offset="-200"
              key={idx + 1}
              className="relative rounded-[12px]">
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
              <div className="smallMobile:bottom-[34%] absolute left-6 z-20 sm:bottom-[24%]">
                <div className="flex flex-wrap items-center gap-2 lg:flex-none xl:flex">
                  <h3 className="mb-1 font-semibold tracking-wide text-[var(--color-backgroundBody)]">{item.name}</h3>

                  {item.feelOptions.map((feel) => (
                    <div key={feel} className="inline-block rounded-[72px] bg-[#ff6633]">
                      <span className="dark:text-backgroundBody inline-block px-[10px] py-1.5 text-[8px] font-medium tracking-[0.96px] text-[var(--color-background)] uppercase">
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
                <ul className="mt-3.5 grid max-w-[380px] grid-cols-1 sm:grid-cols-2 [&>*:not(:last-child)]:mb-1">
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

        <ul className="mt-8 flex justify-center md:mt-16">
          <li>
            <Link href="/services" className="rv-button rv-button-white">
              <div className="rv-button-top">
                <span>See All Products</span>
              </div>
              <div className="rv-button-bottom">
                <span>See All Products</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
