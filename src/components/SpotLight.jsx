import React from "react";
import CardButton from "./CardButton";
import proshowImg from "../assets/images/spotlight/dj.webp";
import workshopImg from "../assets/images/spotlight/themeShow.webp";
import eventImg from "../assets/images/spotlight/denceOrmime.webp";

const SpotLight = ({ rippleRef }) => {
  const isLinux = navigator.userAgent.indexOf("Linux") !== -1;

  const handleClick = (name) => {
    // toggle circle ripple
    rippleRef.current.classList.toggle("circle-ripple");
    // after timeout of 1.5 sec
    setTimeout(() => {
      window.location.pathname = `/${name}`;
    }, 1500);
  };
  
  return (
    <div className="flex flex-col px-2 my-8 md:my-32">
      <div className="flex pt-[1vw] justify-end rounded-xl items-start">
        <h3 className="text-[11.75vw] leading-none font-semibold  md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          3
        </h3>
        <h1
          className={`leading-[0.8] mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
            isLinux && "pt-[2vw]"
          }`}
        >
          proshows
        </h1>

        <div className="hidden relative shadow-overlay-reverse h-[15.5vw] aspect-video ml-4 md:inline rounded-xl ">
          <img
            className="rounded-xl object-cover pt-[0.5vw]"
            src={proshowImg}
            alt="talks"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse pt-[1vw] justify-end rounded-xl align-bottom">
        <h3 className="text-[11.75vw] leading-none font-semibold  md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          5
        </h3>
        <h1
          className={`leading-[0.8] mb-[-2vw] text-[30vw] ml-4 font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
            isLinux && "pt-[2vw]"
          }`}
        >
          WORKSHOPS
        </h1>
        <div className="hidden relative shadow-overlay-reverse h-[15.5vw] aspect-video md:inline rounded-xl  ">
          <img
            className="rounded-xl object-cover pt-[0.5vw]"
            src={workshopImg}
            alt="workshop"
          />
        </div>
      </div>
      <div className="flex pt-[1vw] justify-end rounded-xl items-start">
        <div className="hidden mr-auto mb-auto md:block mt-2 md:mt-0 w-[95vw] md:w-[20vw] min-w-[16rem] self-end aspect-[7/3]">
          <CardButton
            onClick={() => {
              handleClick("schedule");
            }}
            text={{ head: "View", tail: "Schedule", caption: "Schedule" }}
          />
        </div>
        <h3 className="text-[11.75vw] leading-none font-semibold  md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          45+
        </h3>
        <h1
          className={`leading-[0.8] mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
            isLinux && "pt-[2vw]"
          }`}
        >
          EVENTS
        </h1>
        <div className="hidden relative shadow-overlay-reverse h-[15.5vw] aspect-video ml-4 md:inline rounded-xl ">
          <img
            className="rounded-xl object-cover pt-[0.5vw]"
            src={eventImg}
            alt="events"
          />
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
