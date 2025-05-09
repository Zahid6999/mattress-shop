import Image from 'next/image'

const Brand = () => {
  return (
    <section
      className="bg-[var(--color-white)] pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-offset="-100">
      <h4 className="mb-7 text-center text-3xl leading-normal md:mb-14 md:text-[50px] md:leading-relaxed">
        Premium Australian Made Mattresses at <br /> <span className="stroke-red">Unbeatable Prices</span>
      </h4>
      <div className="container flex flex-wrap items-center justify-around gap-6">
        <figure>
          <Image height={200} width={200} src="/images/brand/brand-1.webp" alt="" />
        </figure>
        <figure>
          <Image height={200} width={200} src="/images/brand/brand-2.webp" alt="" />
        </figure>
        <figure>
          <Image height={200} width={200} src="/images/brand/brand-3.webp" alt="" />
        </figure>
        <figure>
          <Image height={200} width={200} src="/images/brand/brand-4.webp" alt="" />
        </figure>
      </div>
    </section>
  )
}

export default Brand
