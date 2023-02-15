import React from 'react'

export default function EventsHome() {
    return (
        <div className='bg-[var(--bg-color)]'>
            <div className='flex flex-col font-sixcaps'>
                <div className='flex flex-row bottom-0'>
                    <div className='pl-1 text-7xl md:text-[40vh] text-[var(--primary-color)]'>
                        OUR
                    </div>
                    <div className='text-[#d35c39] pt-10 pl-20 font-bold text-xl md:text-7xl max-w-[90%]'>
                        Franco Arza & Clément Roche Amelie Maia Victor Costa  Franco Arza & Clément Roche Amelie Maia Victor Costa Simon D’haenens Claudio Guglieri Adriano Esteves Rhodi Iliadou & Peter Ha Filippo Cipriani Isabel Moranta Pablo Stanley
                    </div>
                </div>
                <div className='flex flex-row -mt-7 '>
                    <div className='pl-1 text-7xl md:text-[40vh] text-[var(--primary-color)]'>
                        SPEAKERS
                    </div>
                    <div className='text-[#d35c39] text-xl md:text-7xl font-bold pl-10'>
                        Josh Kirk Diana Varma Vitaly Friedman Femke van Schoonhoven Nicolas Brassard-Ferron Hilary Hayes Romain Prache Travis Neilson Brent David Freaney Jonathan Morin
                    </div>
                </div>
            </div>
        </div>
    )
}
