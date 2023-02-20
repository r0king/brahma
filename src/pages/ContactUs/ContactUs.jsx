import React from 'react'
import CardButton from '../../components/CardButton'

export default function ContactUs() {
    return (
        <div className='bg-[#121212]    ' >
            <div >
                <div className=" flex justify-center text-sec-color font-morganite text-[22vw] pt-[5vh] md:pt-[5vw] md:text-[13vw] leading-[0.8] tracking-normal  uppercase">
                    HOW CAN WE HELP YOU?

                </div>
                <div className=" flex w-full justify-between  text-sec-color font-morganite text-[20vw] pt-[15vh] md:pt-[15vw] md:text-[13vw] leading-[0.8] uppercase ml-1">
                    reach our <br/>team <span className=' mr-1 text-acc-color pt-[15vh]  text-[26vh] '>01</span> 
                </div>
                 
                <div className=' ml-1 text-acc-color text-[] font-poppins flex flex-col'>
                    <div className='font-bold'>N Niranjan</div>
                    <div className='text-'>Head of Brahma'23</div>
                    <div className='opacity-50 pt-2' >niranjan.nand@gmail.com</div>
                
                
                    
                </div>

            </div>

            <div>
                <CardButton>
                    
                </CardButton>
            </div>

        </div>
    )
}
