import React from 'react'
import CardButton from '../../components/CardButton'
import NavBar from '../../components/NavBar'

export default function ContactUs() {
    return (
        <div className='bg-acc-color    ' ><NavBar/>
            <div >
                <div className=" flex justify-center text-pir-color font-morganite text-[22vw] pt-[5vh] md:pt-[5vw] md:text-[13vw] leading-[0.8] tracking-normal  uppercase">
                    HOW CAN WE HELP YOU?

                </div>
                <div className='m-7'>
                    <div className=" flex w-full justify-between  text-sec-color font-morganite text-[20vw] pt-[15vh] md:pt-[15vw] md:text-[13vw] leading-[0.8] uppercase ml-">
                        reach our <br />team <span className='  text-pri-color pt-[15vh]  text-[55vh] '>01</span>
                    </div>
                </div>


                <div className=' md:ml-60 ml-10 text-pri-color font-poppins flex flex-col'>
                    <div className='font-bold text-2xl'>N Niranjan</div>
                    <div className='text-xl'>Head of Brahma'23</div>
                    <div className='opacity-50 text-lg pt-2' >niranjan.nand@gmail.com</div>



                </div>
                <div className='flex justify-center'>
                    <div className=' md:mt-[50vh] mt-[30vh] h-60 w-[85%] ml-1'>
                    <CardButton
                        text={{ head: "View", tail: "All Events", caption: "Events" }}
                    />
                    </div>
                </div>
                
                <div className=' '>
                <div className=' flex justify-end mt-[10vh] m-10 '>
                <div className=' hover:bg-acc-color  bg-pri-color text-center   text-9xl font-morganite text-pri-color  border-[1px] border-acc-color md:p-36  w-[10vw] hover:w-[95vw] h-[10vh] hover:h-[70vh] rounded-tr-[60px] mr-5 rounded-sm  ' > 
                <span className=' text-acc-color  block hover:hidden'>
                    MAP
                </span>
                    <div className='md:h-[67vh] h-[40vh] md:w-[-90vw]   md:mt-[-30vh] '>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6214.8211700506645!2d76.428809361558!3d10.17761954352797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0807bfa8906d61%3A0x11ad08dbd85357dc!2sAdi%20Shankara%20Institute%20of%20Engineering%20and%20Technology%20Kaladi!5e0!3m2!1sen!2sin!4v1672305829425!5m2!1sen!2sin"
                            title="map"
                             
                            className=" md:w-full  md:h-64 w-full  h-full rounded-tr-[60px] md:mr-5 rounded-sm  hover:border-zinc-300 hover:border-[1px] "
                            loading="lazy"
                        />
                    </div>
                
                </div>
                </div>
                </div>

            </div>








        </div>
    )
}
