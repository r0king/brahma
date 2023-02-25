import React from "react";
import Link from "react-ripples-hover";

export default function CardButton({ onClick, href, text = {} }) {
  return (
    <button
      className="relative bg-secondary group scale-[0.98] rounded-md w-full h-full flex justify-center items-center"
      onClick={onClick}
    >
      <Link
        rippleColor="#fff"
        duration={0.5}
        href={href}
        block
        style={{
          padding: "2px",
          display: "flex",
        }}
        className="hover:scale-[1.1] transition-all ease-in-out duration-150 hover:shadow-2xl shadow-primary h-full w-full flex flex-col justify-center"
      >
        <div className="text-left p-2 pb-0 mb-auto group-hover:text-primary font-poppins font-semibold text-accent">
          {text.caption}
        </div>
        <div className="flex justify-between mt-auto">
          <div className=" bottom-0 left-0 text-left text-base md:text-sm pl-3 pb-1 pt-0 group-hover:text-primary font-poppins font-semibold text-accent">
            {text.head}
            <br />
            {text.tail}
          </div>
          {text.tail === "" ? "" :
            <div className=" right-0 bottom-0 p-3 self-end">
              <div className="group-hover:fill-primary fill-accent">
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
          }
        </div>
      </Link>
    </button>
  );
}
