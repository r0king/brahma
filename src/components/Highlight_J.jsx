import React from "react";

const Highlight_J = () => {
  const imgStyle = {
    boxShadow: "inset 10px 10px 40px #d35c39",
  };

  return (
    <div className="w-screen mr-7 md:w-auto">
      <div className="flex flex-col">
        <div className="">
          <div className="flex justify-end rounded-lg">
            <span className="text-3xl font-bold font-sixcaps text-sec-color md:text-[12vw] mx-[0.1vw] mt-[5.5vw]">
              36
            </span>
            <span className="leading-[0.88] text-[72px] font-medium tracking-normal font-sixcaps text-pri-color uppercase md:text-[31vw]">
              TALKS
            </span>

            <img
              className="invisible object-cover ml-4 rounded-lg h-90 w-96 md:visible mt-[1.7vw]"
              src="https://source.unsplash.com/1200x800/?3"

            />

          </div>
        </div>
        <div className="">
          <div className="flex flex-row-reverse justify-start rounded-lg">
            <span className="font-bold text-3xl font-sixcaps text-sec-color md:text-[12vw] mx-[0.1vw] mt-[5.5vw]">
              6
            </span>
            <span className="leading-[0.88] text-[72px] font-medium font-sixcaps tracking-normal text-pri-color uppercase md:text-[31vw]">
              WORKSHOPS
            </span>
            <img
              className="invisible object-cover h-90 mr-4 rounded-lg w-96 md:visible mt-[1.7vw]"
              src="https://source.unsplash.com/1200x800/?2"
              style={imgStyle}
            />
          </div>
        </div>
        <div className="">
          <div className="flex justify-end rounded-lg ">
            <span className="font-bold text-3xl font-sixcaps text-sec-color md:text-[12vw] mx-[0.1vw] mt-[5.5vw]">
              36
            </span>
            <span className="leading-[0.88] text-[72px] font-sixcaps font-medium tracking-normal text-pri-color uppercase md:text-[31vw]">
              SPEAKERS
            </span>
            <img
              className="invisible object-cover h-90 ml-4 rounded-lg w-96 md:visible mt-[1.7vw]"
              src="https://source.unsplash.com/1200x800/?1"
              style={imgStyle}
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Highlight_J;






