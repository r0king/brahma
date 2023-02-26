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
        <div className='absolute top-[24.8vw] left-0 text-lg font-bold font-poppins text-secondary'>
          (+30)
        </div>
        <h4
          className=" text-secondary self-end font-semibold font-poppins text-lg 
           w-full leading-[0.9] tracking-tighter p-2  pb-[5vw]  mr-auto"
        >
          Roll Up Your Sleeves For Practical Learning, Based On Real Projects From Industry Pros.
          Meet Like-Minded Classmates & Upskill Your Creative Toolkit.
        </h4>
      </div>

      <div className='justify-between md:flex'>

        <div className=' font-morganite md:static text-primary text-[40vw] md:text-[26vw] pl-1 md:pt-[8%]'>
          <div className='leading-[0.75]'>ALL</div>
          <div className='leading-[0.75]'>EVENTS</div>
        </div>
        <div className=" hidden mb-[18vw] ml-[12vw]  mt-[5vw] md:flex">
          <h4
            className="mb-[12.8vw]  text-secondary self-end font-semibold font-poppins text-2xl md:text-[2.14rem] 
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
          >
            Roll Up Your Sleeves For Practical Learning, Based On Real Projects From Industry Pros. Meet Like-Minded Classmates & Upskill Your Creative Toolkit.
          </h4>
          <div className='font-poppins absolute text-secondary  text-[3rem] font-bold  right-0'>
            (+30)
          </div>
        </div>
        <div className='hidden mr-6 w-[28vw] h-[8vw] md:inline mt-[38vw] mb-[6vw]'>
          <CardButton href='/' text={{ head: "Get", tail: "Slots", caption: "Registration" }} />
        </div>
      </div>
      <div className='mt-[2vw] h-full w-full md:hidden'>
          <CardButton href='/' text={{ head: "Get", tail: "Slots", caption: "Registration" }} />
        </div>
      <div className="mt-[5vw] grid max-w-screen-xl grid-cols-1 gap-4 mx-auto my-5 md:gap-y-20 justify-items-center md:grid-cols-2 ">
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