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
    <section className="p-[5vw] pl-0 pt-[2vw] pr-0 relative">
      <Parallax
        translateY={isMobile ? [0, 0] : [0, 10]}
        translateX={isMobile ? [100, 70] : [70, 70]}
        // rotateY={isMobile ? [40, -40] : [0, 0]}
        easing="easeInOut"
        className="z-10 absolute"
      >
        <div
          className={`md:absolute ${
            loaded ? "" : "hidden"
          } top-[4vw] aspect-auto pt-[16vw] md:pt-0 md:left-[22.5vw] z-10 w-[55vw] md:w-[32vw]`}
        >
          <img
            src={isMobile ? logoAnimationM : logoAnimationD}
            onLoad={() => {
              setLoaded(true);
            }}
            alt="logo"
            className="w-full h-full"
          />
        </div>
      </Parallax>
      <div className="relative pl-[5vw] h-screen md:h-auto">
        <Parallax
          translateY={isMobile ? [0, 0] : [130, -30]}
          // translateX={isMobile ? [80, 70] : [70, 70]}
          // rotateY={isMobile ? [40, -40] : [0, 0]}
          easing="ease"
          className=""
        >
          <div className="pl-6 md:pl-0 pt-7 md:pt-4">
            <h1 className="text-secondary font-morganite text-[25vw] pt-[7vh] md:pt-[5vw] md:text-[13vw] leading-[0.5] uppercase ">
              Brahma '23
            </h1>
            <h2 className="text-primary font-morganite font-semibold text-[25vw] md:text-[13vw] pt-3 md:pt-6 uppercase leading-[0.75]">
              Awaken the
              <br />
              Creator
              <br />
              Within.
            </h2>
          </div>
        </Parallax>
        <div>
          <div
            className=" 
          hidden md:block  mr-[5vw] 
          absolute top-[6vw] right-[4vw] w-[calc((135vw-9.375rem)*2/14+0.625rem)] border-b 
          after:bg-current after:rounded-full after:bottom-1.5 after:content-[''] after:h-[6px] after:overflow-hidden after:absolute after:right-0 after:aspect-square"
          >
            <p
              className="
          relative pb-2.5 pr-9 overflow-y-scroll max-h-[20vh]
          font-poppins font-semibold text-primary text-xs leading-4          
          "
            >
              Get ready to unleash your inner genius and ignite your passion for
              learning, as our Brahma'23 event promises to be a one-of-a-kind
              experience that will inspire, educate, and entertain you like
              never before!
            </p>
          </div>
          <div className="flex justify-center w-full mt-[-25vh] md:mt-0 pr-3 md:pr-0">
            <div className="absolute top-[60%] w-full sm:top-[70%] md:top-[50%] md:right-0">
              <Parallax
                translateY={isMobile ? [0, 0] : [60, -30]}
                easing="ease"
              >
                <h1 className="md:text-right text-primary font-morganite mt-[3vw] sm:pt-[4vw] md:pt-0 md:mt-0 text-[25vw] md:text-[13vw] leading-[1] uppercase ">
                  <span className="hidden md:block">Mar.28-Apr.01</span>
                  <span className="md:hidden ml-10">@ASIET</span>
                </h1>
              </Parallax>
              <div className="absolute w-max md:top-[90%] right-4 md:right-0  md:flex">
                <Parallax
                  translateY={isMobile ? [20, -40] : [20, -40]}
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

      <div className="marquee font-poppins md:text-[1.2vw] absolute bottom-0 opacity-40">
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
