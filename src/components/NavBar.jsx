import React from "react";
import asietLogo from "../assets/images/asiet-logo.png";
import arrowSVG from "../assets/images/arrow.svg";
const Navbar = () => {
  return (
    <>
      <nav class="text-black w-full h-10 font-poppins font-bold">
        <div class="md:mx-0">
          <div class="flex justify-end items-center w-full">
            <label class=" font-semibold p-1 ">
              <img
                src={asietLogo}
                alt="logo"
                className=" md:w-[9vw] p-2 md:pt-4 md:ml-[4vw]"
              />
            </label>
            <div class="flex justify-end items-center w-full text-[10px] mr-[1vw]">
              {/* <label class="p-2 pt-1 font-semibold opacity-[0.6]">events</label> */}
              {/* <label class="p-2 pt-1 font-semibold ">about</label> */}
              <label class="p-2 hover:opacity-100 pt-1 font-semibold opacity-[0.6]">About</label>
              <label class="p-2 hover:opacity-100 pt-1 font-semibold opacity-[0.6]">Contact Us</label>
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
