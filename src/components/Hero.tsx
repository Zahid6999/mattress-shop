import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white  relative bg-[url('/images/hero-banner.jpg')] bg-cover bg-center bg-no-repeat  min-h-screen text-gray-900 flex pt-[10%] justify-center overflow-hidden">
  <div className="container px-4 text-center md:text-left">
    <div className="text-center ">
      <h1 className="text-[var(--color-backgroundBody)]">
        Better Sleep, Better Living
      </h1>
      <p className="mt-5   mb-16 text-[#f5f4fb] ">
        25 years of German handmade mattresses now available in the USA <br /> 
        Experience a mattress made for everyBODY!
      </p>
    

      <ul className="flex flex-col md:flex-row items-center justify-center  gap-6">
        <li>
          <a href="/contact.html" className="rv-button rv-button-secondary">
            <div className="rv-button-top">
              <span>Start a Project</span>
            </div>
            <div className="rv-button-bottom">
              <span>Start a Project</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/project.html" className="rv-button rv-button-white">
            <div className="rv-button-top">
              <span>Our Services</span>
            </div>
            <div className="rv-button-bottom">
              <span>Our Services</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>
    );
};

export default Hero;