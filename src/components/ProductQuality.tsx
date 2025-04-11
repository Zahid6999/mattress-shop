'use client';

import Image from 'next/image';
import { FC } from 'react';

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
];

const ProductQuality: FC = () => {
  return (
    <section className="bg-[#f7f9f9] pt-[140px] md:pt-[200px] lg:pt-[250px] xl:pt-[270px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="container">

      <div className=" flex items-center gap-20 justify-around ">
        {/* Left Image */}
        <figure className='md:w-[40%]'>
          <Image
            src="/images/mattresse-shape.png"
            alt="Mattress"
            className='w-full'
           width={540}
           height={399}
          />
        </figure>

        {/* Right Content */}
        <div className='md:w-[60%]'>
          <h2 className="text-3xl md:text-[40px] font-semibold lg:leading-[1.4] text-[var(--color-secondary)] mb-8">
            Why Choose  Our <br /> Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-300  rounded-b-xl mt-1 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="size-[30px] "
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-[0.024rem]
                  ">{item.title}</h3>
                  <p className="text-sm text-black/80 mt-2 max-w-[255px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};

export default ProductQuality;
