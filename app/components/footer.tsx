"use client"
import React from 'react'

const Footer = () => {
  return (

    <div className="flex flex-col justify-center items-center px-4 py-8 bg-white">

      <div className="flex flex-col max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center max-w-full md:h-[210px] w-[1400px]">
          <div className="flex flex-col justify-between items-start self-stretch my-auto rounded-2xl min-w-[240px] w-[460px] max-md:max-w-full">
            <div className="flex flex-col items-start w-full max-w-[650px] max-md:max-w-full">
              <div className="flex overflow-hidden">
                <div className="flex gap-2.5 items-center self-stretch my-auto">
                  <img
                    loading="lazy"
                    src="/zoya-footer.png"
                    className="object-contain h-12"
                  />
                </div>
              </div>
              <div className="self-stretch mt-4 text-base text-black max-md:max-w-full">
                With over 9 years of hands-on experience in IT, project
                management, and digital marketing, I specialize in providing
                digidigital solutions that activate business success. Let’s work
                together to turn your vision into reality.
              </div>

            </div>


          </div>
          <div
            className="flex gap-4 items-center self-stretch my-auto cursor-pointer  transition-colors duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="self-stretch my-auto text-sm tracking-widest leading-relaxed text-black uppercase">
              To Top
            </div>
            <div className="flex flex-col justify-center items-center self-stretch px-3 my-auto border border-black border-solid bg-opacity-10 h-[46px] min-h-[46px] rounded-[500px] w-[46px] hover:bg-[#D01760] transition-colors duration-300">
              <img
                loading="lazy"
                src="/arrow-footer.png"
                className="object-contain w-5 aspect-square "
                alt="To Top"
              />
            </div>
          </div>

        </div>
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center md:gap-24 gap-6 p-4 bg-white rounded-lg mt-6 md:mt-0">
          <a
            href="https://www.linkedin.com/in/zoyaadnan"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="h-5 md:h-8" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01823bc1bb1258ae0a?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img src="/upwork.png" alt="Upwork" className="h-5 md:h-8" />
          </a>
          <a
            href="https://www.fiverr.com/zoyakousar?up_rollout=true"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img src="/fiverr.png" alt="Fiverr" className="h-5 md:h-8"/>
          </a>
        </div>

        <div className="flex flex-col justify-center mt-6 w-full text-xs tracking-wide leading-6 text-center text-black rounded-2xl max-md:max-w-full">
          <div className="w-full border border-black border-solid min-h-[1px] max-md:max-w-full" />
          <div className="self-center mt-3 max-md:max-w-full">
            Copyright© 2024 LadyZoya. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer