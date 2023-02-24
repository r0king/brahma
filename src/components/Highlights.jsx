import React from 'react'
// import Arrow from '../src/assets/svg/arrow-top-right.svg'
// import Arrow from '../assets/svg/arrow-top-right.svg'
import sunburnVideo from '../assets/videos/videoplayback.mp4'
import CardButton from './CardButton'


const Highlights = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className='flex flex-col md:flex-row-reverse relative'>
                <div className='md:mt-[7.5vw] uppercase font-morganite text-[50vw] md:text-[22vw] leading-[0.75] md:leading-none order-2'>About</div>
                <div className='order-1 mx-2 mb-[4vw] relative shadow-overlay rounded-md rounded-tr-[3vw]'>
                    <video
                        width={"800"}
                        class='hover:opacity-80 object-cover brightness-60 rounded-md rounded-tr-[3vw]'
                        src={sunburnVideo} autoPlay muted autoReplay />
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <p className='md:basis-1/5 order-2 md:order-1 ml-[10vw] md:ml-[10vw] md:w-[1vw] mr-[4vw] md:mx-0 mt-[20vw] md:mt-[3vw] font-poppins font-semibold'>
                    We return with the digital design community stronger than ever. Talks, networking, activities, and parties. Learn from global experts, connect with like-minded professionals, and move the industry forward together.
                </p>
                <h1 className='uppercase font-morganite text-[50vw] md:text-[22vw] leading-[0.5] md:leading-[0.4] ml-[45vw] md:ml-[10vw] mt-[5vw] md:mt-0 order-1 md:order-2'>US</h1>
                <div className='basis-1/3 order-3 h-[10vw] mt-[10vw] md:mt-0'>
                    <CardButton text={{ head: "Get", tail: "Tickets", caption: "Tickets" }} />
                </div>
            </div>
        </div>
    )
}

export default Highlights;