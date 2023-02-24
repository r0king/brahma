import React from "react";

const SpotLight = () => {
  const imgStyle = {
    boxShadow: "inset 10px 10px 40px #d35c39",
  };

  return (
    <div className="grid w-screen mr-6 md:w-auto sm: place-items-center">
      <div className="flex flex-col ">
        <div className="">
          <div className="flex justify-end rounded-lg">
            <span className="text-7xl font-bold font-morganite text-sec-color md:text-[12vw] mt-[0.5vw]">
              36
            </span>
            <span className="leading-[0.88] text-[150px] font-medium tracking-normal font-morganite text-pri-color uppercase md:text-[31vw]">
              TALKS
            </span>

            <img
              className="hidden object-cover  ml-4 rounded-lg h-[21.5vw] w-96 md:inline mt-[2.8vw]"
              src="https://source.unsplash.com/1200x800/?3"
              alt="talks"
            />

          </div>
        </div>
        <div className="">
          <div className="flex flex-row-reverse justify-start rounded-lg">
            <span className="font-bold text-7xl font-morganite text-sec-color md:text-[12vw] ">
              6
            </span>
            <span className="leading-[0.88] text-[150px] font-medium font-morganite tracking-normal text-pri-color uppercase md:text-[31vw]">
              WORKSHOPS
            </span>
            <img
              className="hidden object-cover h-[21.5vw] mr-4 rounded-lg w-80 md:inline mt-[2.8vw]"
              src="https://source.unsplash.com/1200x800/?2"
              style={imgStyle}
              alt="workshop"
            />
          </div>
        </div>
        <div className="">
          <div className="flex justify-end rounded-lg ">
            <span className="font-bold text-7xl font-morganite text-sec-color md:text-[12vw] ">
              36
            </span>
            <span className="leading-[0.88] text-[150px] font-morganite font-medium tracking-normal text-pri-color uppercase md:text-[31vw]">
              SPEAKERS
            </span>
            <img
              className="hidden object-cover h-[21.5vw] ml-4 rounded-lg w-96 md:inline mt-[2.8vw]"
              src="https://source.unsplash.com/1200x800/?1"
              style={imgStyle}
              alt="speakers"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default SpotLight;






