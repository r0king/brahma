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
                <div className=' hover:bg-acc-color  bg-pri-color text-center   text-9xl font-morganite text-pri-color  border-[1px] border-acc-color md:p-36 md:w-[10vw] w-[80vw] hover:w-[95vw] md:h-[10vh] h-[20vh] hover:h-[70vh] rounded-tr-[60px] mr-5 rounded-sm group hover:hidden  ' > 
                <span className=' text-acc-color  block hover:hidden'>
                    MAP
                </span>
                    <div className='md:h-[90vh] h-[50vh] md:w-[-90vw]   md:mt-[-30vh] '>
                       
                    </div>
                
                </div>
                </div>
                </div>

            </div>








        </div>
    )
}
