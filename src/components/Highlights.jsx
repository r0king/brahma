import React from 'react'
// import Arrow from '../src/assets/svg/arrow-top-right.svg'
// import Arrow from '../assets/svg/arrow-top-right.svg'
import sunburnVideo from '../assets/videos/videoplayback.mp4'
import CardButton from './CardButton'


const Highlights = () => {
    return (
        <div class='mt-48 mb-32 '>
            {/* NOTE(gokul): this runs on medium to large screens */}
            <div class='hidden md:block h-full'>
                <div class='flex justify-end '>
                    <div class='relative '>
                        <label class='leading-none absolute bottom-[-50px] right-0 text-pri-color text-[20vw] font-morganite'>HIGHLIGHTS</label>
                    </div>
                    <div className='relative shadow-overlay'>
                        <video
                            width="800"
                            class='hover:opacity-80 object-cover brightness-60 '
                            src={sunburnVideo} autoPlay muted autoReplay />
                    </div>
                </div>

                {/* Descriptions */}
                <div class='flex justify-between  '>
                    <div class=' flex-0 mt-20 ml-28 mx-auto w-1/5 '>
                        <p class='my-2 font-poppins text-pri-color text-md text-left p-4 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iste nesciunt incidunt explicabo hic natus odio velit nemo ad voluptas doloribus
                            voluptatem, expedita fugiat consequuntur! In repellendus ullam cupiditate veniam nemo.</p>
                    </div>

                    {/* NOTE(gokul): for the love of god dont touch this code, it works and thats all u need to know */}
                    <div class=' mr-24 mt-3 w-1/4 h-[8vw]'>
                        <CardButton href='/' text={{head:"Explore",tail:"The Location",caption:"Venue"}}/>
                        {/* <div class='flex-1 relative group overflow-hidden transition-all mx-2 h-1/3 bg-red-600 rounded-lg'>
                            <span className="w-full h-full rounded-lg bg-orange-500 absolute top-0 bottom-0 ease-out 
                            duration-300 transition-all group-hover:h-0 -z-0" />
                            <span class='transition-colors duration-100 ease-in-out text-white stroke-white z-10 
                            relative rounded-lg p-2 flex justify-between w-full '>
                                <div class='text-left'>
                                    <label class='text-xs font-medium mb-2'>Venue</label>
                                    <div class='mt-4 flex flex-col items-stretch text-2xl font-semibold'>
                                        <label class=''>Explore</label>
                                        <label class=''>The Location</label>
                                    </div>
                                </div>
                                <svg class='absolute m-2 bottom-0 right-0' width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.2928932,7 L11.5,7 C11.2238576,7 11,6.77614237 11,6.5 C11,6.22385763 11.2238576,6 11.5,6 L17.5,6 C17.7761424,6 18,6.22385763 18,6.5 L18,12.5 C18,12.7761424 17.7761424,13 17.5,13 C17.2238576,13 17,12.7761424 17,12.5 L17,7.70710678 L6.85355339,17.8535534 C6.65829124,18.0488155 6.34170876,18.0488155 6.14644661,17.8535534 C5.95118446,17.6582912 5.95118446,17.3417088 6.14644661,17.1464466 L16.2928932,7 Z"></path> </g></svg>
                            </span>
                        </div> */}
                    </div>
                </div>
            </div >

            {/* NOTE(gokul): this runs on only small screens */}
            < div class='md:hidden pb-2 ' >
                <div class='p-2 rounded-lg'>
                    <video
                        class='object-cover brightness-60 drop-shadow-md w-full h-full aspect-video'
                        src={sunburnVideo} autoPlay muted />
                </div>
                <div class='md:hidden mx-2 leading-none text-left'>
                    <label class='text-pri-color text-[35vw] font-morganite'>HIGHLIGHTS</label>
                </div>
                <div>
                    <div class='w-full'>
                        <p class='mx-auto my-6 font-poppins text-pri-color text-sm text-left p-4 w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iste nesciunt incidunt explicabo hic natus odio velit nemo ad voluptas doloribus
                            voluptatem, expedita fugiat consequuntur! In repellendus ullam cupiditate veniam nemo.</p>
                    </div>

                    {/* NOTE(gokul): for the love of god dont touch this code, it works and thats all u need to know */}
                    <div class='relative group overflow-hidden transition-all mx-2 h-1/3 bg-red-600 rounded-lg'>
                        <span className="w-full h-full rounded-lg bg-orange-500 absolute top-0 bottom-0 ease-out 
                        duration-300 transition-all group-hover:h-0 -z-0" />
                        <span class='transition-colors duration-100 ease-in-out text-white stroke-white z-10 
                        relative rounded-lg p-2 flex justify-between w-full '>
                            <div class='text-left'>
                                <label class='text-xs font-medium mb-2'>Venue</label>
                                <div class='mt-4 flex flex-col items-stretch text-2xl font-semibold'>
                                    <label class=''>Explore</label>
                                    <label class=''>The Location</label>
                                </div>
                            </div>
                            <svg class='absolute m-2 bottom-0 right-0' width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.2928932,7 L11.5,7 C11.2238576,7 11,6.77614237 11,6.5 C11,6.22385763 11.2238576,6 11.5,6 L17.5,6 C17.7761424,6 18,6.22385763 18,6.5 L18,12.5 C18,12.7761424 17.7761424,13 17.5,13 C17.2238576,13 17,12.7761424 17,12.5 L17,7.70710678 L6.85355339,17.8535534 C6.65829124,18.0488155 6.34170876,18.0488155 6.14644661,17.8535534 C5.95118446,17.6582912 5.95118446,17.3417088 6.14644661,17.1464466 L16.2928932,7 Z"></path> </g></svg>
                        </span>
                    </div>

                </div>

            </div >
        </div >
    )
}

export default Highlights;