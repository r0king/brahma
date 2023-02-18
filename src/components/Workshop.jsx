import React from 'react';
import P1 from '../assets/images/pic1.jpeg'
import P2 from '../assets/images/pic2.jpeg'
import P3 from '../assets/images/pic3.jpeg'
import P4 from '../assets/images/pic4.jpg'
import P5 from '../assets/images/pic5.jpeg'
import P6 from '../assets/images/pic6.jpeg'
import P7 from '../assets/images/pic7.jpeg'
import CardButton from './CardButton'


const Workshop = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col md:flex-row'>
        <h2 className='leading-[0.75] text-[150px] font-medium tracking-normal font-morganite text-pri-color uppercase md:text-[25vw]'>WORKSHOPS</h2>
        <div class=' ml-24 mb-2 w-full h-[4em] md:w-1/4 md:h-[8vw] self-end'>
          <CardButton href='/' />
        </div>
      </div>


      <div className="carousel carousel-center w-full md:h-[50vw] h-[90vw] p-4 space-x-4 bg-neutral">
        <div className="carousel-item min-w-[30vw] md:max-w-[50vw]">
          <div className='flex flex-col'>
            <img src={P1} className="rounded-tr-[4em] h-[50vh] max-w-[90vw] md:max-w-[40vw]" alt="img" />
            <div className='text-lg mt-4 font-poppins font-bold'>Bike Engine Assembly</div>
            <div className='flex flex-row mt-4 font-semibold'>
              <div className='border-2 text-sm font-poppins w-12 border-orange-500 pl-1'>₹200</div>
              <div className="font-poppins ml-6">Pablo Stanley</div>
              <div className="font-poppins ml-6">Bueno</div>
              <div className="font-poppins ml-6">MEX</div>
            </div>
          </div>
        </div>
        <div className="carousel-item min-w-[30vw] md:max-w-[50vw] ">
          <div className='flex flex-col'>
            <img src={P2} className="rounded-tr-[4em] h-[50vh] max-w-[90vw] md:max-w-[40vw]" alt="img" />
            <div className='text-lg mt-4 font-poppins font-bold'>Bike Engine Assembly</div>
            <div className='flex flex-row mt-4 font-semibold'>
              <div className='border-2 text-sm font-poppins w-12 border-orange-500 pl-1'>₹200</div>
              <div className="font-poppins ml-6">Pablo Stanley</div>
              <div className="font-poppins ml-6">Bueno</div>
              <div className="font-poppins ml-6">MEX</div>
            </div>
          </div>
        </div>
        <div className="carousel-item min-w-[30vw] md:max-w-[50vw]">
          <div className='flex flex-col'>
            <img src={P3} className="rounded-tr-[4em] h-[50vh] max-w-[90vw] md:max-w-[50vw]" alt="img" />
            <div className='text-lg mt-4 font-poppins font-bold'>Bike Engine Assembly</div>
            <div className='flex flex-row mt-4 font-semibold'>
              <div className='border-2 text-sm font-poppins w-12 border-orange-500 pl-1'>₹200</div>
              <div className="font-poppins ml-6">Pablo Stanley</div>
              <div className="font-poppins ml-6">Bueno</div>
              <div className="font-poppins ml-6">MEX</div>
            </div>

          </div>
        </div>
        <div className="carousel-item min-w-[30vw] md:max-w-[50vw]">
          <div className='flex flex-col'>
            <img src={P4} className="rounded-tr-[4em] h-[50vh] max-w-[90vw] md:max-w-[50vw]" alt="img" />
            <div className='text-lg mt-4 font-poppins font-bold'>Bike Engine Assembly</div>
            <div className='flex flex-row mt-4 font-semibold'>
              <div className='border-2 text-sm font-poppins w-12 border-orange-500 pl-1'>₹200</div>
              <div className="font-poppins ml-6">Pablo Stanley</div>
              <div className="font-poppins ml-6">Bueno</div>
              <div className="font-poppins ml-6">MEX</div>
            </div>
          </div>

        </div>
        <div className="carousel-item min-w-[30vw] md:max-w-[50vw]">
          <div className='flex flex-col'>
            <img src={P5} className="rounded-tr-[4em] h-[50vh] max-w-[90vw] md:max-w-[50vw]" alt="img" />
            <div className='text-lg mt-4 font-poppins font-bold'>Bike Engine Assembly</div>
            <div className='flex flex-row mt-4 font-semibold'>
              <div className='border-2 text-sm font-poppins w-12 border-orange-500 pl-1'>₹200</div>
              <div className="font-poppins ml-6">Pablo Stanley</div>
              <div className="font-poppins ml-6">Bueno</div>
              <div className="font-poppins ml-6">MEX</div>
            </div>
          </div>
        </div>
        <div className="carousel-item min-w-[30vw] md:max-w-[50vw]">
          <div className='flex flex-col'>
            <img src={P6} className="rounded-tr-[4em] h-[50vh] max-w-[90vw] md:max-w-[50vw]" alt="img" />
            <div className='text-lg mt-4 font-poppins font-bold'>Bike Engine Assembly</div>
            <div className='flex flex-row mt-4 font-semibold'>
              <div className='border-2 text-sm font-poppins w-12 border-orange-500 pl-1'>₹200</div>
              <div className="font-poppins ml-6">Pablo Stanley</div>
              <div className="font-poppins ml-6">Bueno</div>
              <div className="font-poppins ml-6">MEX</div>
            </div>
          </div>
        </div>
        <div className="carousel-item min-w-[30vw] md:max-w-[50vw]">
          <div className='flex flex-col'>
            <img src={P7} className="rounded-tr-[4em] h-[50vh] max-w-[90vw] md:max-w-[50vw]" alt="img" />
            <div className='text-lg mt-4 font-poppins font-bold'>Bike Engine Assembly</div>
            <div className='flex flex-row mt-4 font-semibold'>
              <div className='border-2 text-sm font-poppins w-12 border-orange-500 pl-1'>₹200</div>
              <div className="font-poppins ml-6">Pablo Stanley</div>
              <div className="font-poppins ml-6">Bueno</div>
              <div className="font-poppins ml-6">MEX</div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Workshop;