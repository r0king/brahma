import React from "react";
import CountDown from "./CountDown";
import logoAnimation from "../assets/images/brahmaLogo.webp";
export default function Hero() {
  return (
    <section className="p-[5vw] pl-0 pt-[2vw] pr-0 ">
      <div className="relative pl-[5vw]">
        <div className="pl-6 md:pl-0 pt-7 md:pt-4">
          <h1 className="text-sec-color font-morganite text-[25vw] pt-[7vh] md:pt-[5vw] md:text-[13vw] leading-[0.5] uppercase ">
            Brahma '23
          </h1>
          <h3 className="text-pri-color font-morganite font-semibold text-[25vw] md:text-[13vw] pt-3 md:pt-6 uppercase leading-[0.75]">
            Awaken the
            <br />Creator
            <br />Within.
          </h3>
        </div>
        <div>
          <div
            className=" 
          hidden md:block  mr-[5vw] 
          absolute top-[6vw] right-[4vw] w-[calc((135vw-9.375rem)*2/14+0.625rem)] border-b 
          after:bg-current after:rounded-full after:bottom-1.5 after:content-[''] after:h-[6px] after:overflow-hidden after:absolute after:right-0 after:aspect-square"
          >
            <p
              className="
          relative pb-2.5 pr-9
          font-poppins font-semibold text-pri-color text-xs leading-4          
          "
            >
              Get ready to unleash your inner genius and ignite your passion for learning, as our Brahma'23 event promises to be a one-of-a-kind experience that will inspire, educate, and entertain you like never before!
            </p>
          </div>
          <div className="flex justify-center w-full mt-[-38vh] md:mt-0 pl-[39vw] md:pl-0">
            <div className="md:absolute top-[4vw] aspect-auto md:left-[22.5vw] z-10 w-[70vw] md:w-[32vw]">
              <img src={logoAnimation} alt="logo" className="w-full h-full" />
            </div>
            <div className="absolute top-[70vh] md:top-[40vh] right-10 md:right-0">
              <div className="">
                <h1 className="relative z-30 text-right text-pri-color font-morganite text-[25vw] md:text-[13vw] leading-none uppercase ">
                  Mar.28-Apr.01
                </h1>
              </div>
              <div className="absolute top-[-6vh] md:top-[27vh] right-[38vw] md:right-[25vw]">
                <h1
                  className="text-pri-color text-right mr-[2vw] md:mr-[10vw] font-morganite text-[25vw] md:text-[13vw] leading-[0.5] uppercase "
                  style={{
                    marginInline: "0",
                  }}
                >
                  @ASIET
                </h1>
                <div className="absolute -right-[39vw] md:-right-[25vw] md:-top-1 pt-[12vh] md:pt-[2vh]">
                  <CountDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee font-poppins md:text-[1.2vw] fixed bottom-0 opacity-40">
        <ul className="marquee__content" aria-hidden="true">
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
