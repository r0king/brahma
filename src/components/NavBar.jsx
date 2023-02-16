import React from "react";
import asietLogo from "../assets/images/asiet-logo.png";
import arrowSVG from "../assets/images/arrow.svg";
const Navbar = () => {
  return (
    <>
      <nav class="text-black w-full h-10 border-b-1 drop-shadow-md ">
        <div class="md:mx-0 mx-5">
          <div class="flex justify-end items-center w-full border-b-[0.5px] border-[#21212146]">
            <label class=" font-semibold p-1">
              <img src={asietLogo} alt="logo" className="w-[9vw] p-2" />
            </label>
            <div class="flex justify-end items-center w-full text-xs ">
              <label class="p-2 font-light opacity-[0.6]">events</label>
              <label class="p-2 font-light opacity-[0.6]">gallery</label>
              <label class="p-2 font-light opacity-[0.6]">contact</label>
              {/* <label class="p-2 font-light ">about</label> */}
              <label class="p-2 font-semilight ">About Us</label>
              {/* <img
                src={arrowSVG}
                alt=" "
                className="aspect-square h-[20px] -mt-5 pr-2 mr-2"
                srcset=""
              /> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
