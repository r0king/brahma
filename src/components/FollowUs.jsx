import React from 'react'
import { FaInstagram  } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
// import CardButton from './CardButton';

export default function FollowUs() {
  return (
    <div className='flex flex-col md:flex-row text-[4vw] md:text-[1.5vw] md:mt-10 justify-center'>
      <div className='flex-auto '>
        {/* <h1 className='text-accent font-bold font-poppins'>
          Follow Us
        </h1> */}
        <div className='flex flex-wrap pb-5 justify-center'>
          <div className='hover:bg-secondary cursor-pointer border border-accent rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><SiGmail fill='var(--color-accent)' /></div>
          <div className='hover:bg-secondary cursor-pointer border border-accent rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><a href="https://www.instagram.com/brahma_asiet/" target="_blank" rel="noopener noreferrer"><FaInstagram fill='var(--color-accent)' /></a></div>
        </div>
      </div>
      {/* <div className='mt-8 md:mt-2 flex-auto'> */}
        {/* <h1 className='text-accent font-bold font-poppins'>
          Visit Us
        </h1> */}
        {/* <div className="relative mt-4 md:mt-8 mr-12 md:mr-24 text-4xl">
          adishankara.ac.in
        </div> */}
      {/* </div> */}
    </div>
  )
}