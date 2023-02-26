import React from "react";

const SpotLight = () => {
  const imgStyle = {
    boxShadow: "inset 10px 10px 40px #d35c39",
  };

  return (
      <div className="flex flex-col px-2 py-[5vh]">
        <div className="flex justify-end rounded-lg items-start">
          <span className="text-8xl md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
            36
          </span>
          <span className="leading-none md:leading-[20vw] mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw]">
            TALKS
          </span>

          <img
            className="hidden object-cover ml-4 rounded-lg h-[15.5vw] aspect-video md:inline"
            src="https://source.unsplash.com/1200x800/?3"
            alt="talks"
          />
        </div>
        <div className="flex flex-row-reverse justify-end rounded-lg align-bottom">
          <span className="text-8xl md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
            6
          </span>
          <span className="leading-none md:leading-[20vw] mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw]">
            WORKSHOPS
          </span>
          <img
            className="hidden object-cover rounded-lg h-[15.5vw] aspect-video md:inline"
            src="https://source.unsplash.com/1200x800/?2"
            style={imgStyle}
            alt="workshop"
          />
        </div>
        <div className="flex justify-end rounded-lg items-start">
          <span className="text-8xl md:leading-[7vw] font-poppins text-secondary md:text-[8.5vw]">
            3
          </span>
          <span className="leading-none md:leading-[20vw] mb-[-2vw] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw]">
            EVENTS
          </span>
          <img
            className="hidden object-cover ml-4 rounded-lg h-[15.5vw] aspect-video md:inline"
            src="https://source.unsplash.com/1200x800/?1"
            style={imgStyle}
            alt="events"
          />
        </div>
      </div>
  );
};

export default SpotLight;
