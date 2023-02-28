import React from 'react'
import CardButton from './CardButton'

export default function Sponsors() {
    return (
        <div className='mt-20 text-primary mx-20 font-poppins font-bold text-[4vw] md:text-[24px]'>
            Special Thanks To All Our Partners
            <div className=' flex flex-wrap gap-5 mt-5'>
                <div className=' ml-0 border-[1px] border-primary p-14 md:p-40 w-10 aspect-square rounded-tr-[8vw] md:rounded-tr-[60px] rounded-sm' ></div>
                <div className='ml-0 border-[1px] border-primary p-14 md:p-40 w-10 aspect-square rounded-tr-[8vw] md:rounded-tr-[60px] rounded-sm' ></div>
                <div className='ml-0 border-[1px] border-primary p-14 md:p-40 w-10 aspect-square rounded-tr-[8vw] md:rounded-tr-[60px] rounded-sm' ></div>
                <div className='ml-0 border-[1px] border-primary p-14 md:p-40 w-10 aspect-square rounded-tr-[8vw] md:rounded-tr-[60px] rounded-sm' ></div>
                <div className='flex md:flex-row flex-col'>
                    <div className='ml-0 border-[1px] border-primary p-14 md:p-40 w-10 aspect-square rounded-tr-[8vw] md:rounded-tr-[60px] rounded-sm' ></div>
                    <button className='mt-5 md:mt-0 h-[30vw] w-[73vw] md:h-[8vw] md:w-[21vw]'>
                        <CardButton text={{ head: "Sponsorship", tail: "Plans", caption: "Contact" }} />
                    </button>
                </div>
            </div>
        </div>
    )
}
