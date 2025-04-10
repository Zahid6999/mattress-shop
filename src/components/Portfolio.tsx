import Image from 'next/image'
import Link from 'next/link'
import { mattresses } from '../../data/servicesData'
export default function Portfolio() {
  return (
   
<section className="pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {mattresses.slice(0,3).map((item, idx) => (
            <div key={idx} className="rounded-[12px] ">
              <figure className="max-w-[555px] md:h-[573px] rounded-[12px] overflow-hidden ">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="object-cover object-center w-full h-full hover:scale-105 duration-200 ease-in transition-[scale] rounded-b-[12px]"
                />
              </figure>
              <div className="p-4">
                <h3 className="text-7 tracking-wide font-semibold mb-1">{item.name}</h3>
                <p className="text-xl font-bold tracking-wide text-gray-900 bg-amber-300 inline rounded-[2px] p-1">A$ {item.price}</p>
                <ul className='[&>*:not(:last-child)]:mb-1 mt-6 grid grid-cols-2'>
                    {
                        item.features.map(( list) => 
                        
                            <li key={list} className='text-black/80 inline-flex  items-center gap-1 '>
                                <span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                              
                              </svg>
                            </span>
                            
                            {list}</li>
                        )
                    }
                </ul>
              </div>
            </div>
          ))}
        </div>

        <ul className='flex justify-center mt-8 md:mt-16'>
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
