import React from "react";

const SpotLight = () => {
  return (
    <div className="flex flex-col px-2 py-[5vh]">
      <div className="flex justify-center md:justify-end rounded-lg items-start">
        <span className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          36
        </span>
        <span className="leading-none md:leading-[20vw] mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw]">
          TALKS
        </span>

        <div className="hidden relative shadow-overlay-reverse h-[15.5vw] aspect-video ml-4 md:inline">
          <img
            className=" object-cover  rounded-lg  "
            src="https://source.unsplash.com/1200x800/?3"
            alt="talks"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center md:justify-end rounded-lg align-bottom">
        <span className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          6
        </span>
        <span className="leading-none md:leading-[20vw] mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw]">
          WORKSHOPS
        </span>
        <div className="hidden relative shadow-overlay-reverse  h-[15.5vw] aspect-video  md:inline">
          <img
            className=" object-cover rounded-lg   "
            src="https://source.unsplash.com/1200x800/?2"
            alt="workshop"
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-end rounded-lg items-start">
        <span className="text-6xl font-semibold md:font-normal md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
          3
        </span>
        <span className="leading-none md:leading-[20vw] mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw]">
          EVENTS
        </span>
        <div className="hidden relative shadow-overlay-reverse h-[15.5vw] aspect-video  ml-4  md:inline">
          <img
            className=" object-cover rounded-lg  "
            src="https://source.unsplash.com/1200x800/?1"
            alt="events"
          />
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
