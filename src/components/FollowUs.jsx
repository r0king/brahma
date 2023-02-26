import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CardButton from './CardButton';

export default function FollowUs() {
  return (
    <div className='flex flex-col md:flex-row pl-10 text-[4vw] md:text-[1.5vw]'>
      <div className='flex-auto'>
        <h1 className='text-pri-color font-bold font-poppins'>
          Follow Us
        </h1>
        <div className='flex flex-wrap'>
          <div className='border border-pri-color rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaFacebookF /></div>
          <div className='border border-pri-color rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaTwitter /></div>
          <div className='border border-pri-color rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaYoutube /></div>
          <div className='border border-pri-color rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaInstagram /></div>
          <div className='border border-pri-color rounded-full p-4 md:p-6 mr-2 md:mr-6 mt-8 text-[4vw] md:text-[1vw]'><FaLinkedin /></div>
        </div>
      </div>
      <div className='mt-8 md:mt-2 flex-auto'>
        <h1 className='text-pri-color font-bold font-poppins'>
          Subscribe To Our Newsletter
        </h1>
        <div className="relative mt-4 md:mt-8 mr-12 md:mr-24">
          <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-md font-poppins font-semibold text-pri-color bg-transparent border-0 border-b-2 border-pri-color appearance-none focus:outline-none focus:ring-0 focus:border-sec-color peer" placeholder="Your Email" />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          <div className='absolute top-0 right-2 bottom-1 w-[40vw] md:w-[12vw]'>
            <CardButton text={{ head: "Subscribe", tail: "", caption: "" }} />
          </div>
        </div>
      </div>
    </div>
  )
}