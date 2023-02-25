import React, { useEffect, useState } from "react";
import asietLogo from "../assets/images/asiet-logo.png";
import arrowSVG from "../assets/images/arrow.svg";

const NavBar = () => {

  const [fade, setFade] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    setFade(scrollPosition > 0);
  };

  return (
    <>
      <nav className="text-black w-full font-poppins font-bold fixed bg-acc-color z-30">
        <div className="md:mx-0">
          <div className="flex justify-end items-center w-full">
            <label id="logo" className={`font-semibold ${fade ? 'opacity-0 transition-opacity duration-500' : 'opacity-100 transition-opacity duration-500'}`}>
              <img
                src={asietLogo}
                alt="logo"
                className=" md:w-[9vw] p-2 md:pt-1 md:ml-[4vw] w-[40vw]"
              />
            </label>
            <div className="flex justify-end items-center w-full text-[12px] mr-[2vw]">
              <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">Speakers</label>
              <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">Workshops</label>
              <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">Schedule</label>
              <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">Venue</label>
              {/* <label className="p-2 pt-1 font-semibold ">about</label> */}
              <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">About</label>
              <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">Contact Us</label>
              <img
                src={arrowSVG}
                alt=" "
                className="aspect-square h-[2.5vh] -mt-1 pr-2 mr-2"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;