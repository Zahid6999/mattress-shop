import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden bg-white bg-[url('/images/hero-banner.jpg')] bg-cover bg-center bg-no-repeat pt-[40%] sm:pt-[30%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[13%]">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/55 to-transparent" />
      <div>
        {/* Save 20% Badge */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          className="absolute bottom-16 left-3 flex size-[80px] flex-col items-center justify-center rounded-full bg-[#d40027] text-center sm:bottom-8 sm:left-[7%] sm:h-[120px] sm:w-[120px] md:bottom-[9%] lg:bottom-[15%] 2xl:bottom-1/5 2xl:left-1/5">
          <span className="text-base font-normal text-white sm:text-[26px]">Save</span>
          <span className="text-base leading-none font-bold text-white sm:text-[24px]">70%</span>
        </div>
      </div>

      <div className="z-10 container px-4 text-center md:text-left">
        <div className="text-center" data-aos="fade-up" data-aos-anchor-placement="top-center">
          <h1 className="text-[var(--color-backgroundBody)]">
            Better Sleep, Better <br className="hidden lg:block" /> Living
          </h1>

          <p className="my-5 text-2xl text-[#f5f4fb]">
            Contact The Shope <br />
            <span className="mt-1.5 inline-block rounded bg-[var(--color-backgroundBody)] px-3 py-2 text-xl text-[#d40027]">
              CALL NOW 0404 229 933
            </span>
          </p>
          <p className="mt-5 mb-16 text-[#f5f4fb]">
            25 years of German handmade mattresses now available in the USA <br className="hidden md:block" />
            Experience a mattress made for everybody!
          </p>

          <ul className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <li className="block w-full md:inline-block md:w-auto">
              <Link href="/services" className="rv-button rv-button-secondary block w-full">
                <div className="rv-button-top block w-full">
                  <span>See all services</span>
                </div>
                <div className="rv-button-bottom">
                  <span>See all services</span>
                </div>
              </Link>
            </li>
            <li className="block w-full md:inline-block md:w-auto">
              <a href="/contact" className="rv-button rv-button-white block w-full">
                <div className="rv-button-top block w-full">
                  <span>Book a matress</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Book a matress</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
