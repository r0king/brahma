import React from 'react';
import P1 from '../assets/images/pic1.jpeg'
import P2 from '../assets/images/pic2.jpeg'
import P3 from '../assets/images/pic3.jpeg'
import P4 from '../assets/images/pic4.jpg'
import P5 from '../assets/images/pic5.jpeg'
import P6 from '../assets/images/pic6.jpeg'
import P7 from '../assets/images/pic7.jpeg'
import '../App.css'


const Workshop = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col md:flex-row'>
        <h2 className='leading-[0.75] text-[150px] font-medium tracking-normal font-morganite text-pri-color uppercase md:text-[25vw]'>WORKSHOPS</h2>
        <div class='relative self-end group overflow-hidden transition-all md:mx-10 md:h-1/3 h-[7.5em] md:w-[20em] w-screen mb-4 bg-red-600 rounded-lg'>
          <span className="w-full h-full rounded-lg bg-orange-500 absolute top-0 bottom-0 ease-out 
                        duration-300 transition-all group-hover:h-0 -z-0" />
          <span class='transition-colors duration-100 ease-in-out text-white stroke-white z-10 
                        relative rounded-lg p-2 flex justify-between w-full '>
            <div class='text-left'>
              <label class='text-xs font-medium mb-2'>Workshops</label>
              <div class='mt-4 flex flex-col items-stretch text-2xl font-semibold'>
                <label class=''>View</label>
                <label class=''>All Workshops</label>
              </div>
            </div>
            <svg class='absolute m-2 bottom-0 right-0' width="34px" height="34px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.2928932,7 L11.5,7 C11.2238576,7 11,6.77614237 11,6.5 C11,6.22385763 11.2238576,6 11.5,6 L17.5,6 C17.7761424,6 18,6.22385763 18,6.5 L18,12.5 C18,12.7761424 17.7761424,13 17.5,13 C17.2238576,13 17,12.7761424 17,12.5 L17,7.70710678 L6.85355339,17.8535534 C6.65829124,18.0488155 6.34170876,18.0488155 6.14644661,17.8535534 C5.95118446,17.6582912 5.95118446,17.3417088 6.14644661,17.1464466 L16.2928932,7 Z"></path> </g></svg>
          </span>
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