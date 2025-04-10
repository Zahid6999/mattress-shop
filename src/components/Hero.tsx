import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden bg-white bg-[url('/images/hero-banner.jpg')] bg-cover bg-center bg-no-repeat pt-[10%] text-gray-900">
      <div className="container px-4 text-center md:text-left">
        <div className="text-center">
          <h1 className="text-[var(--color-backgroundBody)]">Better Sleep, Better Living</h1>
          <p className="mt-5 mb-16 text-[#f5f4fb]">
            25 years of German handmade mattresses now available in the USA <br />
            Experience a mattress made for everyBODY!
          </p>

          <ul className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <li>
              <Link href="/services" className="rv-button rv-button-secondary">
                <div className="rv-button-top">
                  <span>See all services</span>
                </div>
                <div className="rv-button-bottom">
                  <span>See all services</span>
                </div>
              </Link>
            </li>
            <li>
              <a href="/contact" className="rv-button rv-button-white">
                <div className="rv-button-top">
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
