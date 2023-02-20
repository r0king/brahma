import React from "react";

const SpotLight = () => {

  return (
    <div className="grid w-full mr-6 md:w-auto sm: place-items-center">
      <div className="flex flex-col ">
        <div className="">
          <div className="flex justify-end rounded-lg">
            <span className="text-7xl font-bold font-morganite text-sec-color md:text-[12vw] mt-[0.7vw]">
              36
            </span>
            <span className="leading-[0.88] text-[150px] font-medium tracking-normal font-morganite text-pri-color uppercase md:text-[31vw]">
              TALKS
            </span>
            <div className='relative'>
              <img
                className="hidden object-cover drop-shadow-md ml-4 rounded-lg h-[21.5vw] w-96 md:inline mt-[2.8vw]"
                src="https://source.unsplash.com/1200x800/?3"
                alt="talks"
              />
              <div className='absolute inset-0 rounded-lg shadow-overlay h-[21.5vw] mt-[2.8vw] ml-4 opacity-40'></div>
            </div>
          </div>
        </div>
        <div className="-mt-20">
          <div className="flex flex-row-reverse justify-start rounded-lg">
            <span className="font-bold text-7xl font-morganite text-sec-color md:text-[12vw] mt-[1vw] ">
              6
            </span>
            <span className="leading-[0.88] text-[150px] font-medium font-morganite tracking-normal text-pri-color uppercase md:text-[31vw]">
              WORKSHOPS
            </span>
            <div className='relative'>
              <img
                className="hidden object-cover drop-shadow-md ml-4 rounded-lg h-[21.5vw] w-[18vw] mr-4 md:inline mt-[2.8vw]"
                src="https://source.unsplash.com/1200x800/?2"
                alt="talks"
              />
              <div className='absolute inset-0 rounded-lg shadow-overlay h-[21.5vw] mt-[2.8vw] ml-4 mr-4 opacity-40'></div>
            </div>
          </div>
        </div>
        <div className="-mt-20">
          <div className="flex justify-end rounded-lg ">
            <span className="font-bold text-7xl font-morganite text-sec-color md:text-[12vw] mt-[1vw] ">
              36
            </span>
            <span className="leading-[0.88] text-[150px] font-morganite font-medium tracking-normal text-pri-color uppercase md:text-[31vw]">
              SPEAKERS
            </span>
            <div className='relative'>
              <img
                className="hidden object-cover drop-shadow-md ml-4 rounded-lg h-[21.5vw] w-96 md:inline mt-[2.8vw]"
                src="https://source.unsplash.com/1200x800/?1"
                alt="talks"
              />
              <div className='absolute inset-0 rounded-lg shadow-overlay h-[21.5vw] mt-[2.8vw] ml-4 opacity-40'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  

  );
};

export default SpotLight;
