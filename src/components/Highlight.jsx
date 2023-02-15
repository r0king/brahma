import React from "react";

const Highlight = () => {
  return (
    <div >
      <div className="mx-auto ">
        <h2 className="mb-6 text-3xl font-bold lg:text-4xl lg:mb-8">The Conference Highlights</h2>
        <div className="flex flex-col flex-wrap">
          <div className="w-full px-4 mb-8 border-none md:w-full xl:w-full">
            <div className="flex items-center p-8 bg-gray-100 rounded-lg shadow-md">
              <span className="mr-2 text-6xl font-bold font-poppins text-sec-color">
                36
              </span>
              <span className="font-medium tracking-wider font-poppins text-gray-500 uppercase text-[120px]">
                TALKS
              </span>
              
                <img className="object-cover h-64 ml-4 rounded-lg shadow-md w-96" src="https://source.unsplash.com/1200x800/?3" />
              
            </div>
          </div>
          <div className="w-full px-4 mb-8 border-none md:w-full xl:w-full">
            <div className="flex flex-row-reverse items-center p-8 bg-gray-100 rounded-lg shadow-md">
              <span className="mr-2 text-6xl font-bold font-poppins text-sec-color">
                6
              </span>
              <span className="text-[120px] font-medium font-poppins tracking-wider text-gray-500 uppercase mx-5">
                WORKSHOPS
              </span>
              
                <img className="object-cover h-64 ml-4 rounded-lg shadow-md w-96" src="https://source.unsplash.com/1200x800/?2" />
              
            </div>
          </div>
          <div className="w-full px-4 mb-8 border-none shadow-none md:w-full xl:w-full">
            <div className="flex items-center p-8 bg-gray-100 rounded-lg shadow-md">
              <span className="mr-2 text-6xl font-bold font-poppins text-sec-color">
                36
              </span>
              <span className="text-[120px] font-poppins font-medium tracking-wider text-gray-500 uppercase">
                SPEAKERS
              </span>
              
              <img className="object-cover h-64 ml-4 rounded-lg shadow-md w-96" src="https://source.unsplash.com/1200x800/?1" />
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;





