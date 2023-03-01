import React from "react";
// import Arrow from '../src/assets/svg/arrow-top-right.svg'
// import Arrow from '../assets/svg/arrow-top-right.svg'
import brahmaVideo from '../assets/videos/brahmaVideo.mp4'
import CardButton from './CardButton'


const Highlights = () => {
    return (
        <div className='mt-28 mb-10 overflow-hidden'>
            <div className='flex flex-col md:flex-row-reverse relative'>
                <div className='flex flex-col order-2'>
                    <h1 className='uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75] ml-5 md:mr-7 md:ml-0'>About Us</h1>
                    <button className='h-[30vw] md:h-[8vw] md:w-[25vw] md:ml-[14vw] mt-8 md:mt-0 mx-3 md:mx-0'>
                        <CardButton text={{ head: "Get", tail: "Tickets", caption: "Tickets" }} />
                    </button>
                </div>
                <div className='order-1 mx-2 mr-10 mb-[4vw] shadow-overlay-reverse relative rounded-md rounded-tr-[3vw] md:max-w-[50vw]'>
                    <video
                        width={"800"}
                        className='aspect-video hover:opacity-80 object-cover brightness-60 rounded-md rounded-tr-[3vw] md:max-w-[50vw]'
                        src={brahmaVideo} autoPlay loop muted />
                </div>
            </div>
            <p className='mx-[9vw] font-poppins font-semibold mt-8 md:mt-0 text-justify'>
                Flagged off in 2003 as a technical festival of the students of Adi Shankara Institute of Engineering and Technology, our festival is a showcase of innovation, creativity and diversity bringing together students from across India to explore their talents and learn from each other.
                Brahma witnesses footfall of 3500+ undergraduates, 70+ technical events, 45+ cultural competitions, attractive prize pools worth 1 Lakh+ in tandem with 2+ proshows each year.
                Scheduled to be a hybrid event comprising of online and offline events, Brahma 2023 offers thrilling competitions, exciting events , dynamic workshops, captivating live concert and electrifying DJ night.
            </p>
        </div>
    )
}

export default Highlights;
