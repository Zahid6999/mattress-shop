import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden bg-white bg-[url('/images/hero-banner.jpg')] bg-cover bg-center bg-no-repeat pt-[50%] sm:pt-[30%] lg:pt-[25%] xl:pt-[20%] 2xl:pt-[16%]">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      <div>
        {/* Save 20% Badge */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          className="absolute bottom-[30%] left-1/5 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#d40027] text-center">
          <span className="text-[26px] font-normal text-white">Save</span>
          <span className="text-[24px] leading-none font-bold text-white">70%</span>
        </div>
      </div>

      <div className="z-10 container px-4 text-center md:text-left">
        <div className="text-center" data-aos="fade-up" data-aos-anchor-placement="top-center">
          <h1 className="text-[var(--color-backgroundBody)]">
            Better Sleep, Better <br className="hidden lg:block" /> Living
          </h1>
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
