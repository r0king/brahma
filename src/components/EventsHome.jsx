import React from 'react'
// import dotSVG from "../assets/images/dot.svg"
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
                    <div className='text-secondary font-poppins font-bold text-[2vw] ml-2 md:ml-10 mt-[5vw] md:mt-[7vw] mr-2 md:mr-8'>
                        <ul className='list-none relative'>
                            <li className='inline'>DJ War</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Mudhra</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Percusion Instrument</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Choreo Night</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Voice of Brahma</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Theme Show</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Spot Dance</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>MIME</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <h1 className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]'>Events</h1>
                    <div className='text-secondary font-poppins font-bold text-[2vw] ml-2 md:ml-10 mr-2 md:mr-8'>
                        <ul className='list-none relative'>
                            <li className='inline'>Ragam</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Stand Up Comedy</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Street Show</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Rap Battle</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Band of Brahma</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Hip Hop Battle</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Step N Syncro</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Doodling</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-10">
                <div className='flex flex-row-reverse'>
                    <h1 className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]'>General</h1>
                    <div className='text-secondary font-poppins font-bold text-[2vw] ml-2 md:ml-8 mt-[5vw] md:mt-[7vw]'>
                        <ul className='list-none relative'>
                            <li className='inline'>Jam</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Fifa</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Valorant</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Spot Photography</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Brain Cycle</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Underarm Cricket</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Short Film Contest</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Basketball 3s</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Glowball</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Rj Hunt </li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Game Of Rooms</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Soapy Soccer</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-row-reverse'>
                    <h1 className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]'>Events</h1>
                    <div className='text-secondary font-poppins font-bold text-[2vw] ml-2 md:ml-20 md:mr-8'>
                        <ul className='list-none relative'>
                            <li className='inline'>Fun Zone</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Fire And Rescue Team + Dog Squad</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Paint Ball</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Knives Out</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Maze</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Gun Expo</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Go Cart Museum</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Cryogenic Museum</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Photobooth With Poleroid Camera</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Treasure hunt</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Blind Fold</li><svg xmlns="http://www.w3.org/2000/svg" className='inline stroke-secondary w-5' fill="#d35c39" height="30" viewBox="0 96 960 960" width="30"><path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z"/></svg>
                            <li className='inline'>Best Manager</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='py-5 px-1 md:p-5 md:mt-0 mt-[3vw]'>
                <div className='flex flex-col'>
                    <div className='flex flex-row mb-2 md:mb-5'>
                        <div className='relative h-[50vh] md:h-[85vh] w-[50%] md:w-[29%] rounded-tr-[15%] bg-primary  hover:bg-gradient-to-t hover:from-secondary hover:to-primary'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-accent pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-accent pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-accent p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                        <div className='relative mt-7 md:mt-0 ml-2 bg-auto bg-no-repeat h-[50vh] md:h-[85vh] w-[50%] md:w-[43%] rounded-tr-[15%] bg-primary  hover:bg-gradient-to-t hover:from-secondary hover:to-primary'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-accent pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-accent pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-accent p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-row-reverse mb-5'>
                        <div className='relative -mt-8 md:mt-0 bg-auto bg-no-repeat h-[50vh] md:h-[85vh] w-[50%] md:w-[43%] rounded-tr-[15%] bg-primary  hover:bg-gradient-to-t hover:from-secondary hover:to-primary'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-accent pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-accent pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-accent p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                        <div className='relative ml-2 md:ml-0 md:mr-2 bg-auto bg-no-repeat h-[50vh] md:h-[85vh] w-[50%] md:w-[29%] rounded-tr-[15%] bg-primary  hover:bg-gradient-to-t hover:from-secondary hover:to-primary'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-accent pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-accent pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-accent p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='relative -mt-12 md:mt-0 bg-auto bg-no-repeat h-[50vh] md:h-[85vh] w-[48%] md:w-[29%] rounded-tr-[15%] bg-primary  hover:bg-gradient-to-t hover:from-secondary hover:to-primary'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-accent pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-accent pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-accent p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                        </div>
                        <div className='relative -mt-3 md:mt-0 ml-2 h-[50vh] md:h-[85vh] w-[48%] md:w-[43%] bg-primary  hover:bg-gradient-to-t hover:from-secondary hover:to-primary rounded-tr-[15%]'>
                            <img src={Event1} alt="" className='filter drop-shadow-2xl brightness-50 opacity-60 w-full h-full object-fill rounded-tr-[15%]' />
                            <div className='absolute bottom-0 pb-1 md:pb-3'>
                                <div className='text-accent pl-1 md:pl-4 font-poppins font-semibold text-md md:text-3xl'>MERCADO JUEGO</div>
                                <div className='text-accent pl-1 md:pl-4 font-poppins text-sm md:text-xl'>Venue</div>
                            </div>
                            <div className='absolute text-accent p-1 md:pb-3 md:pr-4 font-poppins text-sm md:text-xl bottom-0 right-0'>Date & Time</div>
                            {/* <h1 className='absolute bottom-2 left-2 shadow-md text-6xl font-extrabold text-accent rounded-tr-[15%]'>Hello</h1> */}
                        </div>
                        {/* <button className='relative -mt-7 md:mt-0 md:ml-5 h-[35vh] w-[48%] md:w-[22%] rounded-2xl bg-secondary'>
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
                        <button className='relative -mt-7 md:mt-0 md:ml-5 h-[35vh] w-[48%] md:w-[22%]'>
                            <CardButton text={{ head: "View", tail: "All Events", caption: "Events" }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
