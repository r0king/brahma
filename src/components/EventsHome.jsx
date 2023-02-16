import React from 'react'

export default function EventsHome() {
    return (
            <div className='pt-[10vh]'>
                <div className='relative h-screen'>
                    <div className='font-morganite absolute left-0 bottom-0 md:top-0 text-pri-color text-[40vw] md:text-[21vw] pl-1'>
                        <div className='leading-[0.75]'>OUR</div>
                        <div className='leading-[0.75]'>SPEAKERS</div>
                    </div>
                    <div className='font-poppins absolute right-0 md:top-0 bottom-[15vh] font-bold text-sec-color text-[23px] md:text-[2.75rem] pl-1'>
                        <div className='leading-[0.85] pt-10 ml-[23vw]'>King of Trolls.Spark Plug</div>
                        <div className='leading-[0.75] ml-[41vw] pt-1'>Josh Kirk Diana Varma Vitaly Friedman Femke van Schoonhoven Nicolas Brassard-Ferron Hilary Hayes Romain Prache Travis Neilson Brent David Freaney Jonathan Morin</div>
                    </div>
                    <div className='font-poppins absolute text-sec-color text-[23px] md:text-[2.75rem] font-bold bottom-0  md:bottom-[17vw] right-0'>
                        (+30)
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute'>
                        <article>
                            <figure></figure>
                            <main>
                                <h2>Vitaly Friedman</h2>
                                <div></div>
                            </main>
                        </article>
                    </div>
                </div>
            </div>
    )
}
