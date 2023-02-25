import React from "react";
import P1 from "../assets/images/pic1.jpeg";
import P2 from "../assets/images/pic2.jpeg";
import P3 from "../assets/images/pic3.jpeg";
import P4 from "../assets/images/pic4.jpg";
import P5 from "../assets/images/pic5.jpeg";
import P6 from "../assets/images/pic6.jpeg";
import P7 from "../assets/images/pic7.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardButton from "./CardButton";

const Workshop = () => {
  const images = [
    {
      name: "Bike Engine Assembly",
      src: P1,
      prize: "200",
      organizer: "Pablo Stanley",
      place: "Buenos",
      state: "Mexico",
    },
    {
      name: "Bike Engine Assembly",
      src: P2,
      prize: "200",
      organizer: "Pablo Stanley",
      place: "Buenos",
      state: "Mexico",
    },
    {
      name: "Bike Engine Assembly",
      src: P3,
      prize: "200",
      organizer: "Pablo Stanley",
      place: "Buenos",
      state: "Mexico",
    },
    {
      name: "Bike Engine Assembly",
      src: P4,
      prize: "200",
      organizer: "Pablo Stanley",
      place: "Buenos",
      state: "Mexico",
    },
    {
      name: "Bike Engine Assembly",
      src: P5,
      prize: "200",
      organizer: "Pablo Stanley",
      place: "Buenos",
      state: "Mexico",
    },
    {
      name: "Bike Engine Assembly",
      src: P6,
      prize: "200",
      organizer: "Pablo Stanley",
      place: "Buenos",
      state: "Mexico",
    },
    {
      name: "Bike Engine Assembly",
      src: P7,
      prize: "200",
      organizer: "Pablo Stanley",
      place: "Buenos",
      state: "Mexico",
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

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row">
        <h2 className="leading-[0.75] text-[30vw] font-medium tracking-normal font-morganite text-pri-color uppercase md:text-[22vw]">
          WORKSHOPS
        </h2>
        <div className=" ml-24 mb-2 w-full h-[9em] md:w-1/4 md:h-[8vw] self-end">
          <CardButton
            href="/"
            text={{ head: "View", tail: "All Workshops", caption: "Workshops" }}
          />
        </div>
      </div>

      <div className="w-full h-[45vh] sm:h-[40vh] md:h-[70vh]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="flex flex-col">
                <img
                  className="rounded-tr-[4em] h-[50vw] sm:h-[30vw] md:h-[30vw] md:max-h-[40vh] md:max-w-[50vw] px-1"
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                />
                <div className="text-lg mt-4 font-poppins font-bold pl-2">
                  {image.name}
                </div>
                <div className="flex flex-row mt-4 font-semibold pl-2">
                  <div className="border-2 text-sm font-poppins w-12 md:h-6 pl-1 border-orange-500">
                    ₹{image.prize}
                  </div>
                  <div className="font-poppins ml-6">{image.organizer}</div>
                  <div className="font-poppins ml-6">{image.place}</div>
                  <div className="font-poppins ml-6">{image.state}</div>
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
