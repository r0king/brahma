import React from 'react'
import dotSVG from "../assets/images/dot.svg"
// import Event1 from "../assets/images/event1.jpg"
import Event1 from "../assets/images/event2.jpg"
import CardButton from './CardButton'
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';

export default function EventsHome() {  
    
    const isMobile = useMediaQuery({ maxWidth: 640 });

    return (
        <div>
            <div className='relative h-screen md:h-[768px] md:static'>
                <Parallax translateY={isMobile ? [20,150]:[-10,40]}>
                    <div className='font-morganite md:static text-pri-color text-[40vw] md:text-[21vw] pl-1 md:pt-[5%]'>
                        <div className='leading-[0.75]'>OUR</div>
                        <div className='leading-[0.75]'>EVENTS</div>
                    </div>
                </Parallax>
                <div className='font-poppins md:relative absolute right-3 md:-top-[65%] top-[20%] font-bold text-sec-color text-[23px] md:text-[2.75rem] pl-1'>
                    <div className='leading-[0.90] ml-[20vw]'>
                        <ul className='list-none relative'>
                            <li className='inline'>King of Trolls</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Spark Plug</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Bike Engine Assembly</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Gears of War</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Mercado Juego</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Crossword</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Concept Art</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Chainshot Relay</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Just a Minute</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Knockout</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Circuit Bomb</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Glow Ball</li>
                        </ul>
                    </div>
                    <div className='leading-[0.90] ml-[34vw] md:ml-[32vw] pt-1'>
                        <ul className='list-none relative'>
                            <li className='inline'>King of Trolls</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Spark Plug</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Bike Engine Assembly</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Gears of War</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Mercado Juego</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Crossword</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Concept Art</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Chainshot Relay</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Just a Minute</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Knockout</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Circuit Bomb</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Glow Ball</li>
                        </ul>
                    </div>
                </div>
                <div className='font-poppins absolute text-sec-color text-[23px] md:text-[2.75rem] font-bold -bottom-[25%] md:-bottom-[170%] right-0'>
                    (+30)
                </div>
            </div>
            {/* <div dir="rtl" className='font-morganite md:static absolute -bottom-[100%] right-0 text-pri-color text-[40vw] md:text-[21vw] pl-1'>
                <div className='leading-[0.75]'>CULTURAL</div>
                <div className='leading-[0.75]'>EVENTS</div>
            </div>
            <div dir="rtl" className='font-poppins absolute right-3 md:top-[87%] top-[100%] font-bold text-sec-color text-[23px] md:text-[2.75rem] pl-1'>
                <div className='leading-[0.90] pt-7 mr-[40vw]'>
                    <ul className='list-none relative'>
                        <li className='inline'>King of Trolls</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Spark Plug</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Bike Engine Assembly</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Gears of War</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Mercado Juego</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Crossword</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Concept Art</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Chainshot Relay</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Just a Minute</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Knockout</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Circuit Bomb</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Glow Ball</li>
                    </ul>
                </div>
                <div className='leading-[0.90] mr-[32vw] pt-1'>
                    <ul className='list-none relative'>
                        <li className='inline'>King of Trolls</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Spark Plug</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Bike Engine Assembly</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Gears of War</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Mercado Juego</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Crossword</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Concept Art</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Chainshot Relay</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Just a Minute</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Knockout</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Circuit Bomb</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                        <li className='inline'>Glow Ball</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='font-morganite md:static absolute -bottom-[200%] text-pri-color text-[40vw] md:text-[21vw] pl-1'>
                    <div className='leading-[0.75]'>GENERAL</div>
                    <div className='leading-[0.75]'>EVENTS</div>
                </div>
                <div className='font-poppins absolute right-3 md:top-[152%] bottom-[15vh] font-bold text-sec-color text-[23px] md:text-[2.75rem] pl-1'>
                    <div className='leading-[0.90] pt-7 ml-[40vw]'>
                        <ul className='list-none relative'>
                            <li className='inline'>King of Trolls</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Spark Plug</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Bike Engine Assembly</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Gears of War</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Mercado Juego</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Crossword</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Concept Art</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Chainshot Relay</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Just a Minute</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Knockout</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Circuit Bomb</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Glow Ball</li>
                        </ul>
                    </div>
                    <div className='leading-[0.90] ml-[32vw] pt-1'>
                        <ul className='list-none relative'>
                            <li className='inline'>King of Trolls</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Spark Plug</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Bike Engine Assembly</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Gears of War</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Mercado Juego</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Crossword</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Concept Art</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Chainshot Relay</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Just a Minute</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Knockout</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Circuit Bomb</li><img className='inline stroke-sec-color' src={dotSVG} alt=" " />
                            <li className='inline'>Glow Ball</li>
                        </ul>
                    </div>
                </div>
            </div> */}
            <div className='py-5 px-1 md:p-5 md:mt-0 mt-[50%]'>
                <div className='flex flex-col'>
                    <div className='flex flex-row mb-2 md:mb-5'>
                        <div className='relative h-[50vh] md:h-[85vh] w-[50%] md:w-[29%] rounded-tr-[15%] bg-pri-color  hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-acc-color p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                        <div className='relative mt-7 md:mt-0 ml-2 bg-auto bg-no-repeat h-[50vh] md:h-[85vh] w-[50%] md:w-[43%] rounded-tr-[15%] bg-pri-color  hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-acc-color p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-row-reverse mb-5'>
                        <div className='relative -mt-8 md:mt-0 bg-auto bg-no-repeat h-[50vh] md:h-[85vh] w-[50%] md:w-[43%] rounded-tr-[15%] bg-pri-color  hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-acc-color p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                        <div className='relative ml-2 md:ml-0 md:mr-2 bg-auto bg-no-repeat h-[50vh] md:h-[85vh] w-[50%] md:w-[29%] rounded-tr-[15%] bg-pri-color  hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-acc-color p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='relative -mt-12 md:mt-0 bg-auto bg-no-repeat h-[50vh] md:h-[85vh] w-[48%] md:w-[29%] rounded-tr-[15%] bg-pri-color  hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-acc-color p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                        <div className='relative -mt-3 md:mt-0 ml-2 h-[50vh] md:h-[85vh] w-[48%] md:w-[43%] bg-pri-color  hover:bg-gradient-to-t hover:from-sec-color hover:to-pri-color rounded-tr-[15%]'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-acc-color pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-acc-color p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                            {/* <h1 className='absolute bottom-2 left-2 shadow-md text-6xl font-extrabold text-acc-color rounded-tr-[15%]'>Hello</h1> */}
                        </div>
                        {/* <button className='relative -mt-7 md:mt-0 md:ml-5 h-[35vh] w-[48%] md:w-[22%] rounded-2xl bg-sec-color'>
                            <h1 className='absolute top-0 p-2 md:p-5 max-w-2 text-sm font-poppins'>
                                Events
                            </h1>
                            <h1 className='absolute text-left bottom-0 p-2 md:p-5 md:text-2xl text-xl font-poppins font-bold'>
                                View
                                <br />
                                All Events
                            </h1>
                            <div className='absolute bottom-1 right-1 md:bottom-5 md:right-5'>
                                <span class="material-symbols-outlined text-5xl">
                                    arrow_outward
                                </span>
                            </div>
                        </button> */}
                        <div className='relative -mt-7 md:mt-0 md:ml-5 h-[35vh] w-[48%] md:w-[22%]'>
                            <CardButton text={{ head: "View", tail: "All Events", caption: "Events" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
