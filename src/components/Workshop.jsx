import React from "react";
import P1 from "../assets/images/workshops/cnc.jpeg";
import P2 from "../assets/images/workshops/3dprinting.jpeg";
import P3 from "../assets/images/pic3.jpeg";
import P4 from "../assets/images/pic4.jpg";
import P5 from "../assets/images/pic5.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardButton from "./CardButton";
import '../App.css'

const Workshop = ({ rippleRef }) => {
  const handleClick = (name) => {
    // toggle circle ripple
    rippleRef.current.classList.toggle("circle-ripple");
    // after timeout of 1.5 sec
    setTimeout(() => {
      window.location.pathname = `/${name}`;
    }, 1500);
  };
  const images = [
    {
      name: "CNC Workshop",
      src: P1,
      regFees: "400",
      organizer: "Pablo Stanley",
      place: "CNC Lab",
      Date: "31-03-2023",
    },
    {
      name: "3D Printing Workshop",
      src: P2,
      regFees: "400",
      organizer: "Pablo Stanley",
      place: "CCF Lab",
      Date: "31-03-2023",
    },
    {
      name: "IEI Workshop ",
      src: P3,
      regFees: "250",
      organizer: "Pablo Stanley",
      place: "Simulation Lab (Lab 7)",
      Date: "31-03-2023",
    },
    {
      name: "IEEE Workshop",
      src: P4,
      regFees: "100",
      organizer: "Pablo Stanley",
      place: "Simulation Lab (Lab 7)",
      Date: "31-03-2023",
    },
    {
      name: "IoT Workshop",
      src: P5,
      regFees: "300",
      organizer: "Pablo Stanley",
      place: "CCF Lab",
      Date: "31-03-2023",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  const half=window.innerWidth/2;
  const arrowRef = React.useRef(null);

const handleMouseMove = (e) => {
  console.log(e.clientX,e.clientY);
  console.log(arrowRef.current.classList);
  if (e.clientX > half) {
    arrowRef.current.classList.remove("arrow-left");
    arrowRef.current.classList.add("arrow-right");
  } else {
    arrowRef.current.classList.remove("arrow-right");
    arrowRef.current.classList.add("arrow-left");
  }
};
 


  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row">
        <h2 className="leading-[0.75] text-[30vw] font-medium tracking-normal font-morganite text-primary uppercase md:text-[22vw]">
          WORKSHOPS
        </h2>
        <div className=" ml-24 mb-2 w-[20vw] min-w-[16rem] self-end aspect-[7/3]">
          <CardButton
            onClick={() => {
              handleClick("events");
            }}
            text={{ head: "View", tail: "All Workshops", caption: "Workshops" }}
          />
        </div>
      </div>

      <div className="w-full " onMouseMove={handleMouseMove}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <img
                  className="rounded-tr-[4em] aspect-video object-top px-1"
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  ref={arrowRef}
                />
                <div className="text-lg mt-4 font-poppins font-bold pl-2">
                  {image.name}
                </div>
                <div className="flex flex-row mt-4 font-semibold pl-2">
                  <div className="border-2 text-sm font-poppins w-12 md:h-6 pl-1 border-orange-500">
                    ₹{image.regFees}
                  </div>
                  <div className="font-poppins ml-6">{image.organizer}</div>
                  <div className="font-poppins ml-6">{image.place}</div>
                  <div className="font-poppins ml-6">{image.Date}</div>
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
