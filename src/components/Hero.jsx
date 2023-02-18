import React from "react";
import CountDown from "./CountDown";
import logoAnimation from "../assets/images/diwali-lamp.gif";
export default function Hero() {
  return (
    <section className="p-[5vw] pl-0 pt-[4vw] pr-0">
      <div className="relative pl-[5vw]">
        <div className="pt-4">
          <h1 className="text-sec-color font-morganite text-[25vw] pt-[5vh] md:pt-[5vw] md:text-[13vw] leading-[0.5] uppercase ">
            Brahma '23
          </h1>
          <h3 className="text-pri-color font-poppins font-semibold text-[5vw] md:text-[2.5vw] py-[1vh] md:py-0">
            Awaken the Creator Within.
          </h3>
        </div>
        <div>
          <div
            className=" 
          hidden md:block  mr-[5vw] 
          absolute top-[4vw] right-[4vw] w-[calc((135vw-9.375rem)*2/14+0.625rem)] border-b 
          after:bg-current after:rounded-full after:bottom-1.5 after:content-[''] after:h-[6px] after:overflow-hidden after:absolute after:right-0 after:aspect-square"
          >
            <p
              className="
          relative pb-2.5 pr-9
          font-poppins font-semibold text-pri-color text-xs leading-none          
          "
            >
              Fasten your seatbelts for the much anticipated and rousing event
              of all times Brahma'23 is here. Get ready and prepare to see a
              fantastic assortment of captivating events. Brace Yourself for the
              Magic to come!
            </p>
          </div>
          <div className="flex justify-center w-full mt-[-10vh] md:mt-0 ">
            <div className="md:absolute top-[8vw] aspect-auto left-[10vw] w-full z-10 md:w-[38vw] shadow-overlay">
              <img src={logoAnimation} alt="logo" className="w-full h-full" />
            </div>
          </div>
          <div className="mt-[-9vh] mr-[2vw] md:mt-[4vw] pr-[4vw]">
            <h1 className="text-right text-pri-color font-morganite text-[25vw] md:text-[13vw] leading-none uppercase ">
              Mar.28-Apr.01
            </h1>
          </div>
          <div className="flex justify-end mt-[-2vw] md:-mt-[1.5vw] flex-col md:flex-row pr-[6vw] md:pr-0">
            <h1
              className="text-pri-color text-right mr-[2vw] md:mr-[10vw] font-morganite text-[25vw] md:text-[13vw] leading-[0.75] uppercase "
              style={{
                marginInline: "0",
              }}
            >
              @ASIET
            </h1>
            <div className="absolute bottom-[-5vh] right-0 left-0 md:relative">
              <CountDown />
            </div>
          </div>
        </div>
      </div>

      <div className="marquee font-poppins md:text-[1.2vw] absolute bottom-0 opacity-40">
        <ul className="marquee__content ">
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>
            &nbsp; a work in hilarious progess
            <span className="text-[0.85rem]">🫠</span>
            &nbsp;
          </li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
        </ul>
        <ul className="marquee__content" aria-hidden="true">
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>
            &nbsp; a work in hilarious progess
            <span className="text-[0.85rem]">🫠</span>&nbsp;
          </li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
          <li>&nbsp; ---live Soon--- &nbsp;</li>
        </ul>
      </div>
    </section>
  );
}
