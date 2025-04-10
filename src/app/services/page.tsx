import Image from "next/image";
import Link from "next/link";
import { mattresses } from "../../../data/servicesData";

const page = () => {
  return <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">

    <div className="container ">
        <div
      className="flex flex-col md:flex-row gap-y-3 gap-x-10 justify-center lg:justify-start items-start md:items-center mb-16 md:mb-20"
    >
      <div className="flex-1">
        <div className="inline-block  rounded-[72px]  bg-[#18181817] dark:bg-[#edf0f533] mb-3 md:mb-4">
          <span className=" text-black  text-xs uppercase tracking-[0.96px] py-2 px-[17px]  font-medium inline-block">Services</span>
        </div>

        <h2 className="">
         Your Exclucive  <br />
          <span className=" italic text-[#e64445]">Mattress</span> Products
        </h2>
      </div>
      <div className="flex-1 max-md:w-full">
        <p
          className="text-appear max-md:text-justify max-w-lg md:place-self-end md:text-right text-appear-2 text-[#181818b3]/70"
        >
          We offer expert digital solutions to boost your brand and online
          presence. Our services drive growth, engagement, and success in the
          digital world.
        </p>

        <ul className="justify-self-end max-md:w-full mt-5 md:mt-10 reveal-me">
          <li
            className="block md:inline-block w-full mx-auto md:w-auto text-center"
          >
            <Link
              href="/"
              className="rv-button rv-button-white block md:inline-block"
            >
              <div className="rv-button-top">
                <span>Get Free Quotes</span>
              </div>
              <div className="rv-button-bottom">
                <span>Get Free Quotes</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      </div>
      

      {/* Products  */}

       <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
                {mattresses.map((item, idx) => (
                  <div key={idx} className="rounded-[12px] ">
                    <figure className="max-w-[555px] md:h-[573px] rounded-[12px] overflow-hidden ">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={400}
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
    </div>
  </section>;
};

export default page;
