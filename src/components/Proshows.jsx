import React from "react";
// import Arrow from '../src/assets/svg/arrow-top-right.svg'
// import Arrow from '../assets/svg/arrow-top-right.svg'
import Pro from "../assets/videos/Brahma Final.mp4";
import CardButton from "./CardButton";
// import { useMediaQuery } from "react-responsive";
import Sunburn from "../assets/images/proshow/sunburn.png"
import Tribe from "../assets/images/proshow/tribe2.png"
import Romeo from "../assets/images/proshow/romeo.png"
import Sixeight from "../assets/images/proshow/sixeight.png"
import BassTide from "../assets/images/proshow/basstides.png"
import Melam from "../assets/images/proshow/melam.jpg"
import Pragathi from "../assets/images/proshow/pragathi.png"
import PragPos from "../assets/images/proshow/pragathipos.png"
import "./../App.css"

const Proshows = ({ rippleRef }) => {
  const handleClick = (name) => {
    // toggle circle ripple
    rippleRef.current.classList.toggle("circle-ripple");
    // after timeout of 1.5 sec
    setTimeout(() => {
      window.location.pathname = `/${name}`;
    }, 1500);
  };
  // const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className=" md:mt-32 mt-20 md:mb-[3vh]" id="about">
      <div className="flex flex-col md:flex-row relative justify-between px-3">
        <div className="flex flex-col md:order-2 md:ml-auto">
          {/* <Parallax translateY={isMobile ? [0, 0] : [60, -21]} easing="ease" className="flex flex-col ml-auto"> */}
          <div className="md:basis-1/2">
            <h1 className="uppercase md:order-1 text-center md:text-left font-morganite text-[30vw] md:text-[19vw] leading-[0.75] ">
              Pro Shows
            </h1>
            <div className="flex flex-row md:ml-10 ml-2 -mt-2">
              <div className="md:basis-1/2 md:-mt-16 -mt-10"><img src={Sunburn} alt="" className="md:w-[30vw] min-w-[24vw] w-[60vw] " /></div>
              <div className="md:basis-1/2 md:mt-20 mt-12"><img src={Tribe} alt="" className="md:w-[10vw] min-w-[9vw] w-[20vw]" /></div>
            </div>
            {/* <div className="order-1 w-[50%] flex md:justify-end hidden">
              <button className="md:ml-24 mb-2 mt-2 ml-auto md:mt-0 w-full md:w-[20vw] min-w-[16rem] self-end aspect-[7/3] z-10">
                <CardButton
                  text={{ head: "Get", tail: "Tickets", caption: "Tickets" }}
                  onClick={() => {
                    handleClick("events");
                  }}
                />
              </button>
            </div> */}
            {/* </Parallax> */}
          </div>
        </div>
        {/* <Parallax translateY={isMobile ? [0, 0] : [10, -10]} easing="ease"> */}
        <div className="md:basis-1/2 -mt-10">
          <div className="md:order-1 mx-3 md:mr-10 md:mb-[20%] overflow-hidden shadow-overlay-reverse relative rounded-md rounded-tr-[3vw] md:max-w-[50vw]">
            <video
              width={"800"}
              className="aspect-video hover:opacity-80 object-cover brightness-60 rounded-md rounded-tr-[3vw] md:max-w-[50vw]"
              src={Pro}
              autoPlay
              loop
              muted
            />
          </div>
          {/* </Parallax> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex flex-col md:flex-row">
          <h1 className="order-1 uppercase text-center md:text-left font-morganite text-[30vw] md:text-[21vw] leading-[1.05] md:ml-3 md:-mt-[20%]">
            Featuring
          </h1>
        </div>
        <div className="md:basis-1/4 md:-mt-28 -mt-12 md:ml-12 ml-24">
          <div className="w-full"><img src={Romeo} alt="" className="md:w-[20vw] w-[50vw]" /></div>
        </div>
        <div className="flex md:flex-col md:ml-9 -mt-3 md:-mt-20">
          <div className="basis-1/2 pl-3 mt-0.5 md:ml-6 font-poppins text-orange-500 font-bold tracking-wide text-[3.5vw] md:text-[2vw]"><div>Supporting Acts:</div></div>
          <div className="basis-1/2">
            <div className="flex flex-row md:-mt-12">
              <div className="basis-1/2 md:-ml-12 -ml-10">
                <div className="w-full"><img src={Sixeight} alt="" className="md:w-[15vw] w-[25vw]" /></div>
              </div>
              <div className="basis-1/2 ml-6 mt-0.5">
                <div className="w-full "><img src={BassTide} alt="" className="md:w-[15vw] w-[30vw]" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:basis-1/2">
          <img src={Pragathi} alt="Pragathi" />
        </div>
        <div className="md:basis-1/2">
        <div className="md:order-1 mx-3 md:mr-10 overflow-hidden shadow-overlay-reverse relative rounded-md rounded-tr-[3vw] md:max-w-[50vw]">
            <img src={PragPos} className="hover:opacity-80 object-cover brightness-60 rounded-md rounded-tr-[3vw] md:max-w-[50vw]" alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row -mt-2">
        <div className="md:basis-1/2">
          <div className="md:order-1 mx-3 md:mr-10 overflow-hidden shadow-overlay-reverse relative rounded-md rounded-tr-[3vw] md:max-w-[50vw]">
            <img src={Melam} className="hover:opacity-80 object-cover brightness-60 rounded-md rounded-tr-[3vw] md:max-w-[50vw] mt-4 " alt="" />
          </div>
        </div>
        <div className="md:basis-1/2">
          <h1 className="md:mr-5 order-3 uppercase mt-10 text-center md:text-center font-morganite text-[30vw] md:text-[22vw] leading-[1.05]">
            Melam
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Proshows;

