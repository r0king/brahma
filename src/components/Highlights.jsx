import React from 'react'
// import Arrow from '../src/assets/svg/arrow-top-right.svg'
// import Arrow from '../assets/svg/arrow-top-right.svg'
import sunburnVideo from '../assets/videos/videoplayback.mp4'
import CardButton from './CardButton'


const Highlights = () => {
    return (
        <div className='mt-28 mb-10'>
            <div className='flex flex-col md:flex-row-reverse relative'>
                <div className='flex flex-col order-2'>
                    <div className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75] ml-5 md:ml-0'>About Us</div>
                    <div className='h-[30vw] md:h-[8vw] md:w-[25vw] md:ml-[14vw] mt-8 md:mt-0 mx-3 md:mx-0'>
                        <CardButton text={{ head: "Get", tail: "Tickets", caption: "Tickets" }} />
                    </div>
                </div>
                <div className='order-1 mx-2 mb-[4vw] relative shadow-overlay rounded-md rounded-tr-[3vw] md:max-w-[50vw]'>
                    <video
                        width={"800"}
                        className='hover:opacity-80 object-cover brightness-60 rounded-md rounded-tr-[3vw] md:max-w-[50vw]'
                        src={sunburnVideo} autoPlay muted />
                </div>
            </div>
            <p className='mx-[9vw] font-poppins font-semibold mt-8 md:mt-0 text-justify'>
                We return with the digital design community stronger than ever. Talks, networking, activities, and parties. Learn from global experts, connect with like-minded professionals, and move the industry forward together.
                We return with the digital design community stronger than ever. Talks, networking, activities, and parties. Learn from global experts, connect with like-minded professionals, and move the industry forward together.
                We return with the digital design community stronger than ever. Talks, networking, activities, and parties. Learn from global experts, connect with like-minded professionals, and move the industry forward together.
                We return with the digital design community stronger than ever. Talks, networking, activities, and parties. Learn from global experts, connect with like-minded professionals, and move the industry forward together.
            </p>
        </div>
    )
}

export default Highlights;