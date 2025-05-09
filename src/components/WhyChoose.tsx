'use client'
import Image from 'next/image'

const WhyChoose = () => {
  return (
    <section className="bg-[var(--color-background-light)] pt-14 pb-[140px] text-center md:pt-16 md:pb-[200px] lg:pt-[88px] lg:pb-[250px] xl:pt-[100px] xl:pb-[310px]">
      <div className="container overflow-hidden sm:overflow-visible">
        <h2
          className="mb-2 text-2xl font-medium text-[var(--color-gold)] md:text-4xl lg:text-[80px] lg:leading-[1.3]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          100% natural latex <br className="hidden md:block" />
          pillow for your
          <br className="hidden md:block" />
          <span className="stroke-gold">comfort and support</span>
        </h2>
        <div className="relative mt-24">
          <div className="flex items-center justify-center">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              className="absolute bottom-[30%] left-1/5 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[var(--color-primary)] text-center">
              <span className="text-[26px] font-normal text-[var(--color-white)]">Save</span>
              <span className="text-[24px] leading-none font-bold text-[var(--color-white)]">70%</span>
            </div>
            <figure data-aos="fade-right">
              <Image src="/images/products/mattress-9.jpg" alt="Natural latex pillow" width={400} height={400} />
            </figure>
            <figure className="absolute top-[20%] right-[10%] z-20" data-aos="fade-left">
              <Image
                src="/images/latex-pillow-2.jpeg"
                alt="Latex pillow detail"
                width={560}
                height={560}
                className=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
