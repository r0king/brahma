import React from "react";
import CountDown from "./CountDown";

export default function Hero() {

  return (
    <section className="p-[5vw] pr-0">
      <div className="relative ">
        <div>
          <h1 className="text-sec-color font-sixcaps text-[28vw] md:text-[13vw] leading-none uppercase ">
            Brhma '23
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
              We're thrilled to welcome you back for the next edition of brhma,
              cultural festival of ASIET.
            </p>
          </div>
          <div className="-mt-[3vw] mr-[2vw] md:mr-[10vw]">
            <h1 className="text-right text-pri-color font-sixcaps text-[28vw] md:text-[13vw] leading-none uppercase ">
              Mar.29-Apr.01
            </h1>
          </div>
          <div className="flex justify-end flex-col md:flex-row">
            <h1 className="text-pri-color text-right mr-[2vw] md:mr-[10vw] font-sixcaps text-[28vw] md:text-[13vw] leading-none uppercase ">
              @ASIET
            </h1>
            <CountDown />
          </div>
        </div>
      </div>
    </section>
  );
}
