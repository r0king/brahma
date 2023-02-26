import React, { useEffect, useState } from "react";
import asietLogo from "../assets/images/asiet-logo.webp";
// import arrowSVG from "../assets/images/arrow.svg";

const NavBar = () => {
  const [fade, setFade] = useState(false);
  const [theme, setTheme] = useState("light");
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.setProperty("--color-primary", "#fafafa");
      document.documentElement.style.setProperty(
        "--color-secondary",
        "#d35c39"
      );
      document.documentElement.style.setProperty("--color-accent", "#1f1f1f");
    } else {
      document.documentElement.style.setProperty("--color-primary", "#1f1f1f");
      document.documentElement.style.setProperty(
        "--color-secondary",
        "#d35c39"
      );
      document.documentElement.style.setProperty("--color-accent", "#fafafa");
    }
  }, [theme]);
  useEffect(() => {
    if (showMenu) {
      document.documentElement.style.setProperty("overflow", "hidden");
    } else {
      
      document.documentElement.style.setProperty("overflow", "auto");
    }
  }, [showMenu]);
  const handleScroll = () => {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    setFade(scrollPosition > 0);
  };

  return (
    <nav className="text-black w-full font-poppins font-bold sticky -top-1 bg-accent z-30">
      <div className="flex justify-end items-center w-full">
        <label
          id="logo"
          className={`font-semibold pl-[4vw] relative z-[55] ${
            fade
              ? "opacity-0 transition-opacity duration-500"
              : "opacity-100 transition-opacity duration-500"
          }`}
        >
          <img
            src={asietLogo}
            alt="logo"
            className=" md:w-[9vw] p-2 md:pt-1  w-[40vw]"
          />
        </label>
        <div className="flex justify-end items-center w-full text-[12px] text-primary">
          <div className="hidden md:flex w-full justify-end ">
            <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">
              Speakers
            </label>
            <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">
              Workshops
            </label>
            <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">
              Schedule
            </label>
            <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">
              Venue
            </label>
            {/* <label className="p-2 pt-1 font-semibold ">about</label> */}
            <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">
              About
            </label>
            <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6]">
              Contact Us
            </label>
          </div>
          <label className="p-2 md:hidden hover:opacity-100 md:pt-1 font-bold opacity-[0.6]">
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              Menu
            </button>
          </label>
          <label className="swap swap-rotate pr-1 py-2 md:pt-1 opacity-70 hover:opacity-100">
            <input
              type="checkbox"
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />

            <svg
              className="swap-on fill-primary  focus:fill-white aspect-square w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-primary aspect-square w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
      <div>
        <div
          className={`${
            showMenu
              ? " translate-y-[0%] animate-moveDown"
              : "animate-moveUp translate-y-[-100%]"
          } md:hidden gap-2 p-2 pb-6 z-50 fixed w-screen h-screen top-0 left-0 flex justify-end flex-col font-normal 
          text-5xl bg-primary text-accent`}
        >
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="h-full ml-auto flex justify-end w-full"
          >
            <p
              className="
                relative pb-2.5 w-1/2
                font-poppins text-xs leading-4  text-left py-[10vh]         
                "
            >
              Unleash your genius at Brahma'23 - an unforgettable event that
              will inspire, educate, and entertain you!
            </p>
            <svg
              className={`swap-on ml-auto stroke-current transition-all opacity-75 aspect-square ${
                showMenu ? "animate-rotateIn" : "animate-rotateOut"
              }`}
              width="100"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <line x1={10} y1={10} x2={100} y2={100} strokeWidth={2} />
              <line x1={100} y1={10} x2={10} y2={100} strokeWidth={2} />
            </svg>
          </button>
          <label className="hover:opacity-50 transition-opacity">
            Speakers
          </label>
          <label className="hover:opacity-50 transition-opacity">
            Workshops
          </label>
          <label className="hover:opacity-50 transition-opacity">
            Schedule
          </label>
          <label className="hover:opacity-50 transition-opacity">Venue</label>
          <label className="hover:opacity-50 transition-opacity">About</label>
          <label className="hover:opacity-50 transition-opacity">Get Tickets</label>
          <label className="hover:opacity-50 transition-opacity border-b-2 border-accent pb-10">
            Contact Us
          </label>
          <label className="hover:opacity-50 transition-opacity text-[0.625em]">Kalady</label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
