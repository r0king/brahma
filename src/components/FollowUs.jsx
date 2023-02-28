import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CardButton from './CardButton';

export default function FollowUs() {
  return (
    <div className='flex flex-col md:flex-row pl-10 text-[4vw] md:text-[1.5vw] md:mt-10'>
      <div className='flex-auto'>
        <h1 className='text-primary font-bold font-poppins'>
          Follow Us
        </h1>
        <div className='flex flex-wrap pb-5'>
          <div className='hover:bg-secondary cursor-pointer border border-primary rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaFacebookF fill='var(--color-primary)' /></div>
          <div className='hover:bg-secondary cursor-pointer border border-primary rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaTwitter fill='var(--color-primary)' /></div>
          <div className='hover:bg-secondary cursor-pointer border border-primary rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaYoutube fill='var(--color-primary)' /></div>
          <div className='hover:bg-secondary cursor-pointer border border-primary rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaInstagram fill='var(--color-primary)' /></div>
          <div className='hover:bg-secondary cursor-pointer border border-primary rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaLinkedin fill='var(--color-primary)' /></div>
        </div>
      </div>
      <div className='mt-8 md:mt-2 flex-auto'>
        <h1 className='text-primary font-bold font-poppins'>
          Visit Us
        </h1>
        {/* <div className="relative mt-4 md:mt-8 mr-12 md:mr-24 text-4xl">
          adishankara.ac.in
        </div> */}
      </div>
    </div>
  )
}