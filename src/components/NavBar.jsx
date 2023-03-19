import React, { useEffect, useState } from "react";
import asietLogoDark from "../assets/images/asiet-logo-whitec.webp";
import asietLogoWhite from "../assets/images/asiet-logo-darkc.webp";
// import arrowSVG from "../assets/images/arrow.svg";
import { Link } from "react-scroll";

const NavBar = ({ rippleRef }) => {
  const [fade, setFade] = useState(false);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "dark"
  );
  const [showMenu, setShowMenu] = useState(false);
  const logoRef = React.createRef();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      logoRef.current.src = asietLogoDark;
      // set data theme as dark
      localStorage.setItem("theme", JSON.stringify("dark"));

      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      logoRef.current.src = asietLogoWhite;
      localStorage.setItem("theme", JSON.stringify("light"));
      // set data theme as light
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme, logoRef]);
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
  const handleClick = (name) => {
    // toggle circle ripple
    rippleRef.current.classList.toggle("circle-ripple");
    // after timeout of 1.5 sec
    setTimeout(() => {
      window.location.pathname = `/${name}`;
    }, 1500);
  };

  return (
    <nav className="text-black w-full font-poppins font-bold sticky -top-1 bg-accent z-50">
      <div className="flex justify-end items-center w-full">
        <label
          id="logo"
          className={`font-semibold pl-[4vw] relative z-[55] cursor-pointer ${
            fade
              ? "opacity-0 transition-opacity duration-500"
              : "opacity-100 transition-opacity duration-500"
          }`}
          onClick={() => {
            handleClick("");
          }}
        >
          <img
            src={asietLogoWhite}
            ref={logoRef}
            alt="logo"
            className=" md:w-[12vw] p-2 md:pt-2  w-[40vw]"
          />
        </label>
        <div className="flex justify-end items-center w-full text-[12px] text-primary">
          <div className="hidden md:flex w-full justify-end">
            <label
              onClick={() => {
                handleClick("");
              }}
              className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6] cursor-pointer"
            >
              Home
            </label>
            <label
              onClick={() => {
                handleClick("events");
              }}
              className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6] cursor-pointer"
            >
              Events
            </label>
            {/* <label
              className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6] cursor-pointer"
              onClick={() => {
                handleClick("events");
              }}
            >
              Workshops
            </label> */}
            <label
              onClick={() => {
                handleClick("schedule");
              }}
              className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6] cursor-pointer"
            >
              Schedule
            </label>
            <label
              onClick={() => {
                handleClick("faq");
              }}
              className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6] cursor-pointer"
            >
              FAQ
            </label>
            {/* <label className="p-2 pt-1 font-semibold ">about</label> */}

            {window.location.pathname !== "/" ? (
              ""
            ) : (
              <label
                className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6] cursor-pointer"
                onClick={(e) => {
                  if (window.location.pathname !== "/") {
                    handleClick("/");
                  }
                }}
              >
                <Link to={"about"} smooth={true} duration={700}>
                  About
                </Link>
              </label>
            )}
            <label className="p-2 hover:opacity-100 pt-1 font-bold opacity-[0.6] cursor-pointer">
              <Link to="contact" smooth={true} duration={700}>
                Contact Us
              </Link>
            </label>
          </div>
          <label className="p-2 md:hidden hover:opacity-100 md:pt-1 font-bold opacity-[0.6] cursor-pointer">
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              Menu
            </button>
          </label>
          <label className="swap swap-rotate py-3 pr-1 md:pt-[5.5px] opacity-70 hover:opacity-100">
            <input
              type="checkbox"
              checked={theme === "dark" ? true : false}
              onChange={() => {
                // setTheme(e.target.checked ? "light" : "dark");
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            />
            <svg
              className="swap-on fill-primary  focus:fill-white aspect-square w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-primary aspect-square w-4 "
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
          <label
            className="hover:opacity-50 transition-opacity"
            onClick={() => {
              handleClick("");
            }}
          >
            Home
          </label>
          <label
            onClick={() => {
              handleClick("events");
            }}
            className="hover:opacity-50 transition-opacity"
          >
            Events
          </label>
          <label
            onClick={() => {
              handleClick("schedule");
            }}
            className="hover:opacity-50 transition-opacity"
          >
            Schedule
          </label>
          <label
            onClick={() => {
              handleClick("faq");
            }}
            className="hover:opacity-50 transition-opacity"
          >
            FAQ
          </label>
          {window.location.pathname !== "/" ? (
            ""
          ) : (
            <label
              className="hover:opacity-50 transition-opacity "
              onClick={(e) => {
                if (window.location.pathname !== "/") {
                  handleClick("/");
                }
              }}
            >
              <Link
                to="about"
                smooth={true}
                duration={1000}
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                About
              </Link>
            </label>
          )}
          <label className="hover:opacity-50 transition-opacity border-b-2 border-accent pb-10">
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              Contact Us
            </Link>
          </label>
          <label className="hover:opacity-50 transition-opacity text-[0.625em]">
            Kalady
          </label>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
