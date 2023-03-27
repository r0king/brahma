import React from "react";
import { FaInstagram } from "react-icons/fa";
// import Arrow from '../src/assets/svg/arrow-top-right.svg'
// import Arrow from '../assets/svg/arrow-top-right.svg'
import brahmaVideo from "../assets/videos/brahmaVideo.webm";
// import CardButton from "./CardButton";
// import { useMediaQuery } from "react-responsive";

const Proshows = ({ rippleRef }) => {
  return (
    <div className=" md:mt-32 md:mb-[3vh]" id="about">
      <div className="flex flex-col md:flex-row relative justify-between px-3">
        <div className="flex flex-col  md:order-2 md:mr-auto">
          {/* <Parallax translateY={isMobile ? [0, 0] : [60, -21]} easing="ease" className="flex flex-col ml-auto"> */}
          <h1 className="uppercase order-2 ml-auto text-center md:text-left font-morganite text-[30vw] md:text-[22vw] leading-[0.75] md:ml-3 mt-5">
            FEATURING
          </h1>
          {/* </Parallax> */}
        </div>
        {/* <Parallax translateY={isMobile ? [0, 0] : [10, -10]} easing="ease"> */}
        <div className="order-1 mx-3 md:mr-10 mt-10 md:mt-0 mb-[4vw] shadow-overlay-reverse relative rounded-md rounded-tr-[3vw] md:max-w-[50vw]">
          <video
            width={"800"}
            className="aspect-video hover:opacity-80 object-cover brightness-60 rounded-md rounded-tr-[3vw] md:max-w-[50vw]"
            src={brahmaVideo}
            autoPlay
            loop
            muted
          />
        </div>
        {/* </Parallax> */}
      </div>
      <div className="flex row">
        <div className="hover:bg-secondary cursor-pointer border border-accent rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]">
          <FaInstagram fill="var(--color-accent)" />
        </div>
        <h1 className="uppercase order-2 ml-auto text-center md:text-left font-morganite text-[30vw] md:text-[22vw] leading-[0.75] md:ml-3 mt-5">
          ROMEO BLANCO
        </h1>
      </div>
    </div>
  );
};

export default Proshows;
