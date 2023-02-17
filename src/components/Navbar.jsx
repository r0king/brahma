import React from "react";
import asietLogo from "../assets/images/asiet-logo.png";
// import arrowSVG from "../assets/images/arrow.svg";
const NavBar = () => {
  return (
    <>
      <nav className="text-black w-full h-10 font-poppins font-bold fixed mt-[1vh]">
        <div className="md:mx-0">
          <div className="flex justify-end items-center w-full">
            <label className=" font-semibold p-1 ">
              <img
                src={asietLogo}
                alt="logo"
                className=" md:w-[9vw] p-2 md:pt-4 md:ml-[4vw] w-[40vw]"
              />
            </label>
            <div className="flex justify-end items-center w-full text-[12px] mr-[2vw]">
              {/* <label className="p-2 pt-1 font-semibold opacity-[0.4]">events</label> */}
              {/* <label className="p-2 pt-1 font-semibold ">about</label> */}
              <label className="p-2 hover:opacity-100 pt-1 font-semibold opacity-[0.4]">
                About
              </label>
              <label className="p-2 hover:opacity-100 pt-1 font-semibold opacity-[0.4]">
                Contact Us
              </label>
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

export default NavBar;
