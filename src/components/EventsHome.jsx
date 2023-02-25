import React from 'react'
import dotSVG from "../assets/images/dot.svg"
// import Event1 from "../assets/images/event1.jpg"
import Event1 from "../assets/images/event2.jpg"
import CardButton from './CardButton'
// import { Parallax } from 'react-scroll-parallax';
// import { useMediaQuery } from 'react-responsive';

export default function EventsHome() {

    // const isMobile = useMediaQuery({ maxWidth: 640 });

    return (
        <div className='mt-28 mb-48'>
            <div className="flex flex-col">
                <div className='flex flex-row'>
                    <h1 className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]'>Cultural</h1>
                    <div className='text-sec-color font-poppins font-bold text-[2vw] ml-2 md:ml-10 mt-[5vw] md:mt-[11vw] mr-2 md:mr-8'>
                        <ul className='list-none relative'>
                            <li className='inline'>DJ War</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Mudhra</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Percusion Instrument</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Choreo Night</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Voice of Brahma</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Theme Show</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Spot Dance</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>MIME</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <h1 className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]'>Events</h1>
                    <div className='text-sec-color font-poppins font-bold text-[2vw] ml-2 md:ml-10 mr-2 md:mr-8'>
                        <ul className='list-none relative'>
                            <li className='inline'>Ragam</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Stand Up Comedy</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Street Show</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Rap Battle</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Band of Brahma</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Hip Hop Battle</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Step N Syncro</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Doodling</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-10">
                <div className='flex flex-row-reverse'>
                    <h1 className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]'>General</h1>
                    <div className='text-sec-color font-poppins font-bold text-[2vw] ml-2 md:ml-8 mr-2 md:mr-10 mt-[5vw] md:mt-[11vw]' dir='rtl'>
                        <ul className='list-none relative'>
                            <li className='inline'>Jam</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Fifa</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Valorant</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Spot Photography</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Brain Cycle</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Underarm Cricket</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Short Film Contest</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Basketball 3s</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Glowball</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Rj Hunt </li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Game Of Rooms</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Soapy Soccer</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row-reverse'>
                    <h1 className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]'>Events</h1>
                    <div className='text-sec-color font-poppins font-bold text-[2vw] ml-2 md:ml-8 mr-2 md:mr-10' dir='rtl'>
                        <ul className='list-none relative'>
                            <li className='inline'>Fun Zone</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Fire And Rescue Team + Dog Squad</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Paint Ball</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Knives Out</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Maze</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Gun Expo</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Go Cart Museum</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Cryogenic Museum</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Photobooth With Poleroid Camera</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Treasure hunt</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Blind Fold</li><img className='inline stroke-sec-color w-5' src={dotSVG} alt=" " />
                            <li className='inline'>Best Manager</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-5 px-1 md:p-5 md:mt-0 mt-[3vw]'>
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
                                <span className="material-symbols-outlined text-5xl">
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
