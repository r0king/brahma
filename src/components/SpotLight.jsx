import React from "react";
import proshowImg from "../assets/images/spotlight/dj.jpg";
import workshopImg from "../assets/images/spotlight/themeShow.jpg";
import eventImg from "../assets/images/spotlight/denceOrmime.jpg";

const SpotLight = () => {
  const isLinux = navigator.userAgent.indexOf("Linux") !== -1;

  return (
    <div className="flex flex-col px-2 mt-32">
      <div className="flex pt-[1vw] justify-center md:justify-end rounded-xl items-start">
        <h3 className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          3
        </h3>
        <h1
          className={`leading-none mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
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
      <div className="flex flex-row-reverse pt-[1vw] justify-center md:justify-end rounded-xl align-bottom">
        <h3 className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          5
        </h3>
        <h1
          className={`leading-none mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
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
      <div className="flex pt-[1vw] justify-center md:justify-end rounded-xl items-start">
        <h3 className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          45+
        </h3>
        <h1
          className={`leading-none mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
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
