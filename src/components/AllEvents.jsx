import React from 'react'
import P1 from "../assets/images/pic1.jpeg";
import P2 from "../assets/images/pic2.jpeg";
import P3 from "../assets/images/pic3.jpeg";
import P4 from "../assets/images/pic4.jpg";
import P5 from "../assets/images/pic5.jpeg";
import P6 from "../assets/images/pic6.jpeg";
import P7 from "../assets/images/pic7.jpeg";
import CardButton from './CardButton'
const AllEvents = () => {
    const images = [
        {
          name: "Bike Engine Assembly",
          src: P1,
          prize: "200",
          organizer: "Pablo Stanley",
          place: "Buenos",
          state: "Mexico",
        },
        {
          name: "Bike Engine Assembly",
          src: P2,
          prize: "200",
          organizer: "Pablo Stanley",
          place: "Buenos",
          state: "Mexico",
        },
        {
          name: "Bike Engine Assembly",
          src: P3,
          prize: "200",
          organizer: "Pablo Stanley",
          place: "Buenos",
          state: "Mexico",
        },
        {
          name: "Bike Engine Assembly",
          src: P4,
          prize: "200",
          organizer: "Pablo Stanley",
          place: "Buenos",
          state: "Mexico",
        },
        {
          name: "Bike Engine Assembly",
          src: P5,
          prize: "200",
          organizer: "Pablo Stanley",
          place: "Buenos",
          state: "Mexico",
        },
        {
          name: "Bike Engine Assembly",
          src: P6,
          prize: "200",
          organizer: "Pablo Stanley",
          place: "Buenos",
          state: "Mexico",
        },
        {
          name: "Bike Engine Assembly",
          src: P7,
          prize: "200",
          organizer: "Pablo Stanley",
          place: "Buenos",
          state: "Mexico",
        },
      ];
    return (
        <div>
            <div className="flex mt-[8vw] ml-[16vw] md:hidden">
            <div className='absolute top-[24.2vw] left-0 text-lg font-bold font-poppins text-sec-color'>
                    (+30)
                </div>
          <h4
            className=" text-sec-color self-end font-semibold font-poppins text-lg 
           w-full leading-[0.9] tracking-tighter p-2  pb-[5vw]  mr-auto"
          >
            Roll Up Your Sleeves For Practical Learning, Based On Real Projects From Industry Pros. 
            Meet Like-Minded Classmates & Upskill Your Creative Toolkit.
          </h4>
        </div>
           
            <div className='justify-between md:flex'>
                
                <div className='font-morganite md:static text-pri-color text-[40vw] md:text-[21vw] pl-1 md:pt-[5%]'>
                    <div className='leading-[0.75]'>ALL</div>
                    <div className='leading-[0.75]'>EVENTS</div>
                </div>
                <div className=" hidden mb-[18vw] ml-[16vw]  mt-[5vw] md:flex">
          <h4
            className=" text-sec-color self-end font-semibold font-poppins text-2xl md:text-[2.14rem] 
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
          >
            Roll Up Your Sleeves For Practical Learning, Based On Real Projects From Industry Pros. Meet Like-Minded Classmates & Upskill Your Creative Toolkit.
          </h4>
          <div className='font-poppins absolute text-sec-color  text-[2.75rem] font-bold  right-0'>
                    (+30)
                </div>
        </div>
                <div className='hidden mr-6 w-[28vw] h-[8vw] md:inline mt-[28vw]'>
                    <CardButton href='/' text={{ head: "Get", tail: "Slots", caption: "Registration" }} />
                </div>
            </div>
            <div className='mt-[2vw] relative mx-2 overflow-hidden transition-all bg-sec-color rounded-lg group h-1/3 md:hidden'>
                <span className="absolute top-0 bottom-0 w-full h-full transition-all duration-300 ease-out rounded-lg bg-sec-color group-hover:h-0 -z-0" />
                <span className='relative z-10 flex justify-between w-full p-2 text-white transition-colors duration-100 ease-in-out rounded-lg stroke-white '>
                    <div className='text-left'>
                        <label className='mb-2 text-xs font-medium'>Registration</label>
                        <div className='flex flex-col items-stretch mt-4 text-2xl font-semibold'>
                            <label className=''>Get</label>
                            <label className=''>Slots</label>
                        </div>
                    </div>
                    <svg
                        className="absolute bottom-0 right-0 m-2"
                        width="34px"
                        height="34px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path d="M16.2928932,7 L11.5,7 C11.2238576,7 11,6.77614237 11,6.5 C11,6.22385763 11.2238576,6 11.5,6 L17.5,6 C17.7761424,6 18,6.22385763 18,6.5 L18,12.5 C18,12.7761424 17.7761424,13 17.5,13 C17.2238576,13 17,12.7761424 17,12.5 L17,7.70710678 L6.85355339,17.8535534 C6.65829124,18.0488155 6.34170876,18.0488155 6.14644661,17.8535534 C5.95118446,17.6582912 5.95118446,17.3417088 6.14644661,17.1464466 L16.2928932,7 Z" />{" "}
                        </g>
                    </svg>
                </span>
            </div>
            <div className="mt-[5vw] grid max-w-screen-xl grid-cols-1 gap-4 mx-auto my-5 gap-y-6 justify-items-center md:grid-cols-2 ">
            {images.map((image, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <img
                  className="rounded-tr-[4em] h-[50vw] sm:h-[30vw] md:h-[30vw] md:max-h-[40vh] md:w-[50vw] px-1"
                  src={image.src}
                  alt=''
                />
                <div className="pl-2 mt-4 text-lg font-bold font-poppins">
                  {image.name}
                </div>
                <div className="flex flex-row pl-2 mt-4 font-semibold">
                  <div className="w-12 pl-1 text-sm border-2 border-orange-500 font-poppins md:h-6">
                    ₹{image.prize}
                  </div>
                  <div className="ml-6 font-poppins">{image.organizer}</div>
                  <div className="ml-6 font-poppins">{image.place}</div>
                  <div className="ml-6 font-poppins">{image.state}</div>
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
    );
}

export default AllEvents;