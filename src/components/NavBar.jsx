import React from 'react'

const NavBar = () => {
    return (
      <>
      <nav class='text-black w-full h-10 border-b-1 drop-shadow-md'>
        <div class='md:mx-20 mx-5'>
        <div class='flex justify-end items-center w-full '>
          <label class='p-2 font-semibold'>brahma</label>
          <div class='flex justify-end items-center w-full '>
            <label class='p-2 font-light '>events</label>
            <label class='p-2 font-light '>gallery</label>
            <label class='p-2 font-light '>contact</label>
            <label class='p-2 font-light '>about</label>
            <label class='p-2 font-semilight '>hackathon</label>
          </div>
        </div>

        </div>
      </nav>
      </>
    )
}

export default NavBar;