import React from "react";

const SpotLight = () => {
  const isLinux = navigator.userAgent.indexOf("Linux") !== -1;

  return (
    <div className="flex flex-col px-2 py-[5vh]">
      <div className="flex pt-[1vw] justify-center md:justify-end rounded-xl items-start">
        <span className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          36
        </span>
        <span
          className={`leading-none mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
            isLinux && "pt-[2vw]"
          }`}
        >
          TALKS
        </span>

        <div className="hidden relative shadow-overlay-reverse h-[15.5vw] aspect-video ml-4 md:inline rounded-xl ">
          <img
            className="rounded-xl object-cover pt-[0.5vw]"
            src="https://source.unsplash.com/1200x800/?3"
            alt="talks"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse pt-[1vw] justify-center md:justify-end rounded-xl align-bottom">
        <span className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          6
        </span>
        <span
          className={`leading-none mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
            isLinux && "pt-[2vw]"
          }`}
        >
          WORKSHOPS
        </span>
        <div className="hidden relative shadow-overlay-reverse h-[15.5vw] aspect-video md:inline rounded-xl  ">
          <img
            className="rounded-xl object-cover pt-[0.5vw]"
            src="https://source.unsplash.com/1200x800/?2"
            alt="workshop"
          />
        </div>
      </div>
      <div className="flex pt-[1vw] justify-center md:justify-end rounded-xl items-start">
        <span className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          3
        </span>
        <span
          className={`leading-none mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw] md:leading-[0.75] ${
            isLinux && "pt-[2vw]"
          }`}
        >
          EVENTS
        </span>
        <div className="hidden relative shadow-overlay-reverse h-[15.5vw] aspect-video ml-4 md:inline rounded-xl ">
          <img
            className="rounded-xl object-cover pt-[0.5vw]"
            src="https://source.unsplash.com/1200x800/?1"
            alt="events"
          />
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
