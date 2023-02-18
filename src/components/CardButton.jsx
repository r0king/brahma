import React from "react";
import Link from "react-ripples-hover";

export default function CardButton({ onClick, href }) {
  return (
    <button
      className="relative bg-sec-color group scale-[0.98] rounded-md w-full h-full flex justify-center items-center"
      onClick={onClick}
    >
      <Link
        rippleColor="#fff"
        duration={0.5}
        href={href}
        block
        style={{
          padding: "2px",
        }}
        className="hover:scale-[1.1] transition-all ease-in-out duration-150 hover:shadow-2xl shadow-pri-color h-full w-full flex justify-center items-center"
      >
        <div className="text-xl ripple text-left leading-none p-3 flex items-end group-hover:text-pri-color h-full font-poppins font-semibold text-acc-color ">
          Get <br /> tickets
        </div>
        <div className="flex justify-end w-full items-end mr-[2vw]">
          <div
            className="-mt-5 group-hover:fill-pri-color fill-acc-color mr-1 "
            // style={{

            // }}
          >
            <svg
              width="88"
              className="aspect-square h-5 w-5"
              height="80"
              viewBox="0 0 88 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="1"
                d="M10.1625 79.875L7.24792e-05 70.0417L64.6189 13.1875H10.1625V0H87.0376V70.0417H73.8501V22.4188L10.1625 79.875Z"
              />
            </svg>
          </div>
        </div>
      </Link>
    </button>
  );
}
