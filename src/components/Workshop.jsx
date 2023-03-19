import React, { useRef } from "react";
import P1 from "../assets/images/workshops/cnc.webp";
import P2 from "../assets/images/workshops/3dprinting.webp";
import P3 from "../assets/images/workshops/ieee.webp";
import P4 from "../assets/images/workshops/iot.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardButton from "./CardButton";
import "../App.css";

const Workshop = ({ rippleRef }) => {
  const handleClick = (name) => {
    // toggle circle ripple
    rippleRef.current.classList.toggle("circle-ripple");
    // after timeout of 1.5 sec
    setTimeout(() => {
      window.location.pathname = `/${name}`;
    }, 1500);
  };
  const events = [
    {
      name: "CNC Workshop",
      src: P1,
      regFees: "",
      organizer: "9:00AM",
      place: "CNC Lab",
      Date: "Wed, 29 Mar 2023",
    },
    {
      name: "3D Printing Workshop",
      src: P2,
      regFees: "",
      organizer: "9:00AM",
      place: "CCF Lab",
      Date: "Wed, 29 Mar 2023 ",
    },
    {
      name: "IEEE Workshop",
      src: P3,
      regFees: "",
      organizer: "9:00AM",
      place: "Simulation Lab (Lab 7)",
      Date: "Wed, 29 Mar 2023",
    },
    {
      name: "IoT Workshop",
      src: P4,
      regFees: "",
      organizer: "9:00AM",
      place: "CCF Lab",
      Date: "Wed, 29 Mar 2023",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };
  const slickRef = useRef(null);
  const half = window.innerWidth / 2;
  const arrowRef = React.useRef(null);

  const handleCarouselClick = (e) => {
    if (e.clientX > half) {
      slickRef.current.slickNext();
    } else {
      slickRef.current.slickPrev();
    }
  };

  const handleMouseMove = (e) => {
    if (e.clientX > half) {
      arrowRef.current.classList.remove("arrow-left");
      arrowRef.current.classList.add("arrow-right");
    } else {
      arrowRef.current.classList.remove("arrow-right");
      arrowRef.current.classList.add("arrow-left");
    }
  };

  return (
    <div className="mt-32">
      <div className="flex flex-col md:flex-row">
        <h2 className="ml-3 leading-[0.75] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw]">
          WORKSHOPS
        </h2>
        <div className="mx-auto md:ml-24 mb-2 mt-2 md:mt-0 w-[95vw] md:w-[20vw] min-w-[16rem] self-end aspect-[7/3]">
          <CardButton
            onClick={() => {
              handleClick("events");
            }}
            text={{ head: "View", tail: "All Workshops", caption: "Workshops" }}
          />
        </div>
      </div>

      <div
        className="w-full arrow-right "
        onMouseMove={handleMouseMove}
        ref={arrowRef}
        onClick={handleCarouselClick}
      >
        <Slider {...settings} ref={slickRef}>
          {events.map((image, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <img
                  className="px-1 w-full aspect-[4/3]"
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                />
                <div className="text-lg mt-4 font-poppins font-bold pl-2">
                  {image.name}
                </div>
                <div className="flex flex-row mt-4 font-semibold pl-2 gap-5">
                  {/* if registration frees then show */}
                  {image.regFees === "" ? (
                    <></>
                  ) : (
                    <>
                      <div className="border-2 text-sm font-poppins w-12 md:h-6 pl-1 border-orange-500">
                        {image.regFees}
                      </div>
                    </>
                  )}
                  <div className="font-poppins">{image.organizer}</div>
                  <div className="font-poppins">{image.place}</div>
                  <div className="font-poppins">{image.Date}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Workshop;
