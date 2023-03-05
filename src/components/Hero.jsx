import React from "react";
import CountDown from "./CountDown";
import logoAnimationM from "../assets/images/brahmaLogoM.webp";
import logoAnimationD from "../assets/images/brahmaLogoD.webp";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const [loaded, setLoaded] = React.useState(false);
  return (
    <section className="pb-[5vw] pl-0 pr-0 relative pt-[0.5vw]">
      <div className={`md:absolute ${loaded ? "" : "hidden"} top-[4vw]  `}>
        <Parallax
          translateY={isMobile ? [30, -30] : [0, 10]}
          // translateX={isMobile ? [100, 70] : [70, 70]}
          opacity={isMobile ? [1, 1] : [2, -0.1]}
          // rotateY={isMobile ? [40, -40] : [0, 0]}
          easing="easeInOut"
          className="z-10 absolute right-0 md:left-[22.5vw] md:w-[32vw]"
        >
          <img
            src={isMobile ? logoAnimationM : logoAnimationD}
            onLoad={() => {
              setLoaded(true);
            }}
            alt="logo"
            className="aspect-auto pt-[16vw] md:pt-0 z-10 w-[55vw] "
          />
        </Parallax>
      </div>
      <div className="relative pl-[5vw] h-screen md:h-auto">
        <Parallax
          translateY={isMobile ? [0, 0] : [130, -30]}
          // translateX={isMobile ? [80, 70] : [70, 70]}
          // rotateY={isMobile ? [40, -40] : [0, 0]}
          easing="ease"
          className=""
        >
          <div className="pl-6 md:pl-0  md:pt-0">
            <h1 className="text-secondary font-morganite text-[25vw] pt-[7vh] md:pt-[4vw] md:text-[13vw] leading-[0.5] uppercase ">
              Brahma '23
            </h1>
            <h1 className="text-primary font-morganite font-semibold text-[25vw] md:text-[13vw] pt-3 md:pt-6 uppercase leading-[0.75]">
              Awaken the
              <br />
              Creator
              <br />
              Within.
            </h1>
          </div>
        </Parallax>
        <div>
          <div
            className=" 
          hidden md:block  mr-[5vw] 
          absolute top-[4vw] right-[4vw] w-[calc((135vw-9.375rem)*2/14+0.625rem)] border-b 
          after:bg-current after:rounded-full after:bottom-1.5 after:content-[''] after:h-[6px] after:overflow-hidden after:absolute after:right-0 after:aspect-square"
          >
            <p
              className="
          relative pb-2.5 pr-9 overflow-y-scroll max-h-[8rem] 
          font-poppins font-semibold text-primary text-xs leading-4          
          "
            >
              Welcome to BRAHMA'23, where technology meets culture in a unique
              celebration that promises to be an unforgettable experience.
            </p>
          </div>
          <div className="flex justify-center w-full md:mt-0 pr-3 md:pr-0">
            <div className="absolute top-[50%] w-full sm:top-[70%] md:top-[50%] md:right-0">
              <Parallax
                translateY={isMobile ? [0, -40] : [60, -30]}
                easing="ease"
              >
                <h1 className="md:text-right text-primary font-morganite mt-[3vw] sm:pt-[4vw] md:pt-0 md:mt-0 text-[25vw] md:text-[13vw] leading-[1] uppercase ">
                  <span className="hidden md:block">Mar.28-Apr.01</span>
                  <span className="md:hidden ml-10">@ASIET</span>
                </h1>
              </Parallax>
              <div className="absolute w-max md:top-[90%] right-4 md:right-0  md:flex">
                <Parallax
                  translateY={isMobile ? [-20, -60] : [20, -40]}
                  easing="ease"
                >
                  <h1
                    className="text-primary text-right mr-[10vw] md:mr-[10vw] font-morganite text-[25vw] md:text-[13vw] leading-[0.7] uppercase "
                    style={{
                      marginInline: "0",
                    }}
                  >
                    <span className="hidden md:block">@ASIET</span>
                    <span className="md:hidden mr-8">Mar.28-Apr.01</span>
                  </h1>
                </Parallax>
                <div className="flex w-full justify-center mr-14 md:mr-0">
                  <CountDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee font-poppins md:text-[1.2vw] absolute bottom-[10vh] md:bottom-0 opacity-40">
        <ul className="marquee__content" aria-hidden="true">
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
        </ul>
        <ul className="marquee__content" aria-hidden="true">
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
          <li>&nbsp; Brahma'23 &nbsp;</li>
        </ul>
      </div>
    </section>
  );
}
