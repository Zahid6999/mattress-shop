import Image from 'next/image'

const WhyChoose = () => {
  return (
    <section className="bg-[#f9f9f6] pt-14 pb-[140px] text-center md:pt-16 md:pb-[200px] lg:pt-[88px] lg:pb-[250px] xl:pt-[100px] xl:pb-[310px]">
      <div className="container">
        <h2 className="mb-2 text-2xl font-medium text-[#B5B26F] md:text-4xl lg:text-[80px] lg:leading-[1.3]">
          100% natural latex <br className="hidden md:block" />
          pillow for your
          <br className="hidden md:block" />
          <span className="stroke-gold">comfort and support</span>
        </h2>
        <div className="relative mt-24">
          <div className="flex items-center justify-center">
            <figure>
              <Image src="/images/products/mattress-9.jpg" alt="Natural latex pillow" width={400} height={400} />
            </figure>
            <figure className="absolute top-[20%] right-[10%] z-20">
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
