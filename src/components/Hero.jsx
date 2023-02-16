import React from "react";
import CountDown from "./CountDown";
import logoAnimation from "../assets/images/diwali-lamp.gif";
export default function Hero() {
  return (
    <section className="p-[5vw] pl-0 pt-[2vw] pr-0 md:h-screen overflow-y-clip">
      <div className="relative pl-[5vw]">
        <div>
          <h1 className="text-sec-color font-morganite text-[28vw] pt-[5vw] md:text-[13vw] leading-[0.5] uppercase ">
            Brahma '23
          </h1>
          <h3 className="text-pri-color font-poppins font-semibold text-[6vw] py-[1vh] md:py-0 md:text-[2.5vw] uppercase">
            awaken the creator within.
          </h3>
        </div>
        <div>
          <div
            className=" 
          hidden md:block  mr-[5vw] 
          absolute top-[3vw] right-[4vw] w-[calc((100vw-9.375rem)*2/14+0.625rem)] border-b 
          after:bg-current after:rounded-full after:bottom-1.5 after:content-[''] after:h-[6px] after:overflow-hidden after:absolute after:right-0 after:aspect-square"
          >
            <p
              className="
          relative pb-2.5 pr-9
          font-poppins font-semibold text-pri-color text-xs leading-none          
          "
            >
              We're thrilled to welcome you back for the next edition of Brahma,
              cultural festival of ASIET.
            </p>
          </div>
          <div className="mt-[0vw] mr-[2vw] md:mr-[10vw]">
            <h1 className="text-right text-pri-color font-morganite text-[28vw] md:text-[13vw] leading-none uppercase ">
              Mar.28-Apr.01
            </h1>
          </div>
          <div className="flex justify-end md:-mt-[2vw] flex-col md:flex-row">
            <h1
              className="text-pri-color text-right mr-[2vw] md:mr-[10vw] font-morganite text-[28vw] md:text-[13vw] leading-none uppercase "
              style={{
                marginInline: "0",
              }}
            >
              @ASIET
            </h1>
            <CountDown />
          </div>
        </div>
        <div className="absolute top-[8vw] aspect-auto left-[10vw] w-[38vw]">
          <img src={logoAnimation} alt="logo" className="w-full h-full" />
        </div>
      </div>
      <div class="marquee fixed bottom-0 md:text-[2vw] font-poppins opacity-40">
        <ul class="marquee__content">
          <li>&nbsp;BRAHMA'23&nbsp;</li>
          <li>&nbsp;BRAHMA'23&nbsp;</li>
          <li>&nbsp;BRAHMA'23&nbsp;</li>
          <li>&nbsp;BRAHMA'23&nbsp;</li>
        </ul>
        <ul class="marquee__content" aria-hidden="true">
          <li>&nbsp;BRAHMA'23&nbsp;</li>
          <li>&nbsp;BRAHMA'23&nbsp;</li>
          <li>&nbsp;BRAHMA'23&nbsp;</li>
          <li>&nbsp;BRAHMA'23&nbsp;</li>
        </ul>
      </div>
    </section>
  );
}
