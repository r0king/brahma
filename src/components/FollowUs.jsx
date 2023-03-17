import React from 'react'
import { FaInstagram  } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
// import CardButton from './CardButton';

export default function FollowUs() {
  return (
    <div className='flex flex-col md:flex-row text-[4vw] md:text-[1.5vw] md:mt-10 justify-center'>
      <div className='flex-auto '>
        <div className='flex flex-wrap pb-5 justify-center'>
          <div className='hover:bg-secondary cursor-pointer border border-accent rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><SiGmail fill='var(--color-accent)' /></div>
          <div className='hover:bg-secondary cursor-pointer border border-accent rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><a href="https://www.instagram.com/brahma_asiet/" target="_blank" rel="noopener noreferrer"><FaInstagram fill='var(--color-accent)' /></a></div>
        </div>
      </div>
    </div>
  )
}