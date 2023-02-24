import React from 'react'
import Event1 from "../assets/images/event2.jpg"
import CardButton from './CardButton'
const AllEvents = () => {
    return (
        <div>
           
            <div className='justify-between md:flex'>
                
                <div className='font-morganite md:static text-pri-color text-[40vw] md:text-[21vw] pl-1 md:pt-[5%]'>
                    <div className='leading-[0.75]'>ALL</div>
                    <div className='leading-[0.75]'>EVENTS</div>
                </div>
                <div className=" hidden mb-[18vw] ml-[16vw] md:inline mt-[5vw]">
          <h4
            className=" text-sec-color self-end font-semibold font-poppins text-2xl md:text-[2.14rem] 
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
          >
            Roll Up Your Sleeves For Practical Learning, Based On Real Projects From Industry Pros. Meet Like-Minded Classmates & Upskill Your Creative Toolkit.
          </h4>
        </div>
                <div className='hidden mr-24 w-1/4 h-[8vw] md:inline mt-[28vw]'>
                    <CardButton href='/' text={{ head: "Get", tail: "Slots", caption: "Registration" }} />
                </div>
            </div>
            <div className='mt-[2vw] relative mx-2 overflow-hidden transition-all bg-red-600 rounded-lg group h-1/3 md:hidden'>
                <span className="absolute top-0 bottom-0 w-full h-full transition-all duration-300 ease-out bg-orange-500 rounded-lg group-hover:h-0 -z-0" />
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
                <div className='relative  h-[50vh] md:h-[65vh] w-[70%] md:w-[80%] rounded-tr-[15%] bg-pri-color hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color md:ml-[8.5vw]'>
                    <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                    <div className='absolute bottom-0 pb-1 md:pb-3'>
                        <div className='pl-1 font-semibold text-acc-color md:pl-4 font-poppins text-md md:text-3xl'>MERCADO JUEGO</div>
                        <div className='pl-1 text-sm text-acc-color md:pl-4 font-poppins md:text-xl'>Venue</div>
                    </div>
                    <div className='absolute bottom-0 right-0 p-1 text-sm text-acc-color md:pb-3 md:pr-4 font-poppins md:text-xl'>Date & Time</div>
                </div>


                <div className='relative  h-[50vh] md:h-[65vh] w-[70%] md:w-[80%]  rounded-tr-[15%] bg-pri-color hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color md:mr-[8.5vw] '>
                    <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                    <div className='absolute bottom-0 pb-1 md:pb-3'>
                        <div className='pl-1 font-semibold text-acc-color md:pl-4 font-poppins text-md md:text-3xl'>MERCADO JUEGO</div>
                        <div className='pl-1 text-sm text-acc-color md:pl-4 font-poppins md:text-xl'>Venue</div>
                    </div>
                    <div className='absolute bottom-0 right-0 p-1 text-sm text-acc-color md:pb-3 md:pr-4 font-poppins md:text-xl'>Date & Time</div>
                </div>
                <div className='relative h-[50vh] md:h-[65vh] w-[70%] md:w-[80%]  rounded-tr-[15%] bg-pri-color hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color md:ml-[8.5vw]'>
                    <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                    <div className='absolute bottom-0 pb-1 md:pb-3'>
                        <div className='pl-1 font-semibold text-acc-color md:pl-4 font-poppins text-md md:text-3xl'>MERCADO JUEGO</div>
                        <div className='pl-1 text-sm text-acc-color md:pl-4 font-poppins md:text-xl'>Venue</div>
                    </div>
                    <div className='absolute bottom-0 right-0 p-1 text-sm text-acc-color md:pb-3 md:pr-4 font-poppins md:text-xl'>Date & Time</div>
                </div>
                <div className='relative h-[50vh] md:h-[65vh] w-[70%] md:w-[80%]  rounded-tr-[15%] bg-pri-color hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color md:mr-[8.5vw]'>
                    <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                    <div className='absolute bottom-0 pb-1 md:pb-3'>
                        <div className='pl-1 font-semibold text-acc-color md:pl-4 font-poppins text-md md:text-3xl'>MERCADO JUEGO</div>
                        <div className='pl-1 text-sm text-acc-color md:pl-4 font-poppins md:text-xl'>Venue</div>
                    </div>
                    <div className='absolute bottom-0 right-0 p-1 text-sm text-acc-color md:pb-3 md:pr-4 font-poppins md:text-xl'>Date & Time</div>
                </div>
                <div className='relative h-[50vh] md:h-[65vh] w-[70%] md:w-[80%]  rounded-tr-[15%] bg-pri-color hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color md:ml-[8.5vw]'>
                    <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                    <div className='absolute bottom-0 pb-1 md:pb-3'>
                        <div className='pl-1 font-semibold text-acc-color md:pl-4 font-poppins text-md md:text-3xl'>MERCADO JUEGO</div>
                        <div className='pl-1 text-sm text-acc-color md:pl-4 font-poppins md:text-xl'>Venue</div>
                    </div>
                    <div className='absolute bottom-0 right-0 p-1 text-sm text-acc-color md:pb-3 md:pr-4 font-poppins md:text-xl'>Date & Time</div>
                </div>
                <div className='relative h-[50vh] md:h-[65vh] w-[70%] md:w-[80%]  rounded-tr-[15%] bg-pri-color hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color md:mr-[8.5vw]'>
                    <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                    <div className='absolute bottom-0 pb-1 md:pb-3'>
                        <div className='pl-1 font-semibold text-acc-color md:pl-4 font-poppins text-md md:text-3xl'>MERCADO JUEGO</div>
                        <div className='pl-1 text-sm text-acc-color md:pl-4 font-poppins md:text-xl'>Venue</div>
                    </div>
                    <div className='absolute bottom-0 right-0 p-1 text-sm text-acc-color md:pb-3 md:pr-4 font-poppins md:text-xl'>Date & Time</div>
                </div>
                <div className='relative h-[50vh] md:h-[65vh] w-[70%] md:w-[80%]  rounded-tr-[15%] bg-pri-color hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color md:ml-[8.5vw]'>
                    <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                    <div className='absolute bottom-0 pb-1 md:pb-3'>
                        <div className='pl-1 font-semibold text-acc-color md:pl-4 font-poppins text-md md:text-3xl'>MERCADO JUEGO</div>
                        <div className='pl-1 text-sm text-acc-color md:pl-4 font-poppins md:text-xl'>Venue</div>
                    </div>
                    <div className='absolute bottom-0 right-0 p-1 text-sm text-acc-color md:pb-3 md:pr-4 font-poppins md:text-xl'>Date & Time</div>
                </div>
            </div>
        </div>
    );
}

export default AllEvents;