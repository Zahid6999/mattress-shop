import React from 'react';
import Image from 'next/image';


const WhyChoose = () => {
    return (
        <section className="bg-[#f9f9f6] pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] text-center ">
        <div className="container">
          <h2 className="text-2xl md:text-4xl lg:text-[80px] lg:leading-[1.3] text-[#B5B26F] font-medium mb-2">
            100% natural latex <br className="md:block hidden" />
            pillow for your
            <br className="md:block hidden" />
            <span className='stroke-gold'>

            comfort and support
            </span>
          </h2>
     <div className='relative mt-24'>

          <div className='flex justify-center items-center  '>
            <figure>
              <Image
                src='/images/latex-pillow-1.jpg'
                alt="Natural latex pillow"
                width={400}
                height={400}
              />
            </figure>
            <figure className='absolute right-[10%] top-[20%] z-20'>
              <Image
                src='/images/latex-pillow-2.jpeg'
                alt="Latex pillow detail"
                width={560}
                height={560}
                className=''
              />
            </figure>
          </div>
     </div>
        </div>
      </section>
    );
};

export default WhyChoose;