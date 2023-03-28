import React, { useRef } from "react";
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
      src: "https://live.staticflickr.com/65535/52757689891_d9ffd91826_n.jpg",
      regFees: "₹ 400",
      organizer: "12 PM",
      place: "CNC Lab",
      Date: "1<sup>st</sup> Apr",
    },
    {
      name: "3D Printing Workshop",
      src: "https://live.staticflickr.com/65535/52757938654_326170f1c8_n.jpg",
      regFees: "₹ 400",
      organizer: "12 PM",
      place: "CCF Lab",
      Date: "30<sup>th</sup> Mar",
    },
    {
      name: "Arduino Workshop - IEEE",
      src: "https://live.staticflickr.com/65535/52757191231_fec65491ce_c.jpg",
      regFees: "₹ 150",
      organizer: "9:00AM",
      place: "Simulation Lab",
      Date: "30<sup>th</sup> Mar",
    },
    {
      name: "IoT Workshop",
      src: "https://live.staticflickr.com/65535/52757439059_7c348e4499_b.jpg",
      regFees: "₹ 300",
      organizer: "11 AM",
      place: "NP Lab",
      Date: "31<sup>th</sup> Mar",
    },
    {
      name: "Web Design & Development Workshop - IEI",
      src: "https://live.staticflickr.com/65535/52757438974_6f87b9e115_c.jpg",
      regFees: "₹ 250",
      organizer: "10 AM",
      place: "Simulation Lab",
      Date: "1<sup>st</sup> Apr",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1.0001 } },
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
        <div className="mx-auto md:ml-3 md:mb-3 mb-2 mt-2 md:mt-0 w-[95vw] md:w-[20vw] min-w-[16rem] self-end aspect-[7/3]">
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
                  className="px-1 w-full relative z-30 aspect-[1/1] rounded-xl"
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                />
                <h1 className="text-lg reverse mt-4 font-poppins font-bold pl-2">
                  {image.name}
                </h1>
                <div className="flex flex-row mt-4 font-semibold">
                  {/* if registration frees then show */}
                  {image.regFees === "" ? (
                    <></>
                  ) : (
                    <>
                      <div className="border-2 text-sm font-poppins w-14 md:h-6 pl-1 ml-2 border-orange-500 rounded-md">
                        {image.regFees}
                      </div>
                    </>
                  )}
                  <div className="show flex font-poppins gap-5 justify-between w-full px-5 ">
                    <p className="reverse">{image.organizer}</p>
                    <p className="reverse">{image.place}</p>
                    <p className="reverse" dangerouslySetInnerHTML={{ __html: image.Date }}></p>
                  </div>
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
