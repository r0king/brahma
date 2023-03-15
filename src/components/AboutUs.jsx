import React from "react";
import { Parallax } from "react-scroll-parallax";
import brahmaVideo from "../assets/videos/brahmaVideo.mp4";
import CardButton from "./CardButton";
import { useMediaQuery } from "react-responsive";

const AboutUs = ({ rippleRef }) => {
  const handleClick = (name) => {
    // toggle circle ripple
    rippleRef.current.classList.toggle("circle-ripple");
    // after timeout of 1.5 sec
    setTimeout(() => {
      window.location.pathname = `/${name}`;
    }, 1500);
  };
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className=" md:mt-32 md:mb-[3vh]">
      <div className="flex flex-col md:flex-row-reverse relative">

        <div className="flex flex-col md:order-2">
          <Parallax
            translateY={isMobile ? [0, 0] : [60, -30]}
            easing="ease" >
            <h1 className="uppercase order-2 font-morganite text-[30vw] md:text-[22vw] mt-10 leading-[0.75] ml-3 md:mr-7 md:ml-0">
              About Us
            </h1>
            <button className="order-1 h-[30vw] md:h-[8vw] md:w-[25vw] md:ml-[14vw] md:mt-0 px-2 md:mx-0">
              <CardButton
                text={{ head: "Get", tail: "Tickets", caption: "Tickets" }}
                onClick={() => {
                  handleClick("events");
                }}
              />
            </button>
          </Parallax>
        </div>
        <Parallax
          translateY={isMobile ? [0, 0] : [10, -10]}
          easing="ease" >
          <div className="order-1 mx-3 md:mr-10 mt-10 md:mt-0 mb-[4vw] shadow-overlay-reverse relative rounded-md rounded-tr-[3vw] md:max-w-[50vw]">
            <video
              width={"800"}
              className="aspect-video hover:opacity-80 object-cover brightness-60 rounded-md rounded-tr-[3vw] md:max-w-[50vw]"
              src={brahmaVideo}
              autoPlay
              loop
              muted
            />
          </div>
        </Parallax>
      </div>
      <p className="mx-3 font-poppins font-semibold mt-8 md:mt-0 text-justify">
        Flagged off in 2003 as a technical festival of the students of Adi
        Shankara Institute of Engineering and Technology, our festival is a
        showcase of innovation, creativity and diversity bringing together
        students from across India to explore their talents and learn from each
        other. Brahma witnesses footfall of 3500+ undergraduates, 70+ technical
        events, 45+ cultural competitions, attractive prize pools worth 1 Lakh+
        in tandem with 2+ proshows each year. Scheduled to be a hybrid event
        comprising of online and offline events, Brahma 2023 offers thrilling
        competitions, exciting events , dynamic workshops, captivating live
        concert and electrifying DJ night.
      </p>
    </div>
  );
};

export default AboutUs;
