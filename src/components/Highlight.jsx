import React from "react";

const Highlight = () => {
  const imgStyle = {
    boxShadow: "inset 0 0 20px #d35c39",
  };

  return (
    <div className="flex justify-center">
      <div className="">
        <h2 className="mb-6 text-3xl font-bold lg:text-4xl lg:mb-8">
          The Conference Highlights
        </h2>
        <div className="flex flex-col flex-wrap justify-center">
          <div className="w-full border-none md:w-full xl:w-full">
            <div className="flex justify-end bg-gray-100 rounded-lg">
              <span className="font-bold text-9xl font-sixcaps text-sec-color">
                36
              </span>
              <span className="leading-[0.88] font-medium tracking-wider font-sixcaps text-pri-color uppercase text-[275px]">
                TALKS
              </span>
              <div className="relative h-64 ml-4 rounded-lg w-96 shadow-overlay">
                <img  
                  className="object-cover h-full w-full"
                  src="https://source.unsplash.com/1200x800/?3"
                  style={imgStyle}
                  alt="talks"
                />
              </div>
            </div>
          </div>
          <div className="w-full border-none md:w-full xl:w-full">
            <div className="flex flex-row-reverse items-center justify-start bg-gray-100 rounded-lg">
              <span className="flex items-start font-bold text-9xl font-sixcaps text-sec-color">
                6
              </span>
              <span className="leading-[0.88] text-[275px] font-medium font-sixcaps tracking-wider text-pri-color uppercase mx-5">
                WORKSHOPS
              </span>
              <img
                className="object-cover h-64 ml-4 rounded-lg w-96"
                src="https://source.unsplash.com/1200x800/?2"
                style={imgStyle}
                alt="workshop"
              />
            </div>
          </div>
          <div className="w-full border-none md:w-full xl:w-full">
            <div className="flex items-center justify-end bg-gray-100 rounded-lg">
              <span className="flex items-start font-bold text-9xl font-sixcaps text-sec-color">
                36
              </span>
              <span className="leading-[0.88] text-[275px] font-sixcaps font-medium tracking-wider text-pri-color uppercase">
                SPEAKERS
              </span>
              <img
                className="object-cover h-64 ml-4 rounded-lg w-96"
                src="https://source.unsplash.com/1200x800/?1"
                style={imgStyle}
                alt="speakers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
