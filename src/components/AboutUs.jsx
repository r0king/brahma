import React from "react";
// import Arrow from '../src/assets/svg/arrow-top-right.svg'
// import Arrow from '../assets/svg/arrow-top-right.svg'
import brahmaVideo from "../assets/videos/brahmaVideo.webm";
import CardButton from "./CardButton";
// import { useMediaQuery } from "react-responsive";

const AboutUs = ({ rippleRef }) => {
  const handleClick = (name) => {
    // toggle circle ripple
    rippleRef.current.classList.toggle("circle-ripple");
    // after timeout of 1.5 sec
    setTimeout(() => {
      window.location.pathname = `/${name}`;
    }, 1500);
  };
  // const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className=" md:mt-32 md:mb-[3vh]" id="about">
      <div className="flex flex-col md:flex-row-reverse relative justify-between px-3">
        <div className="flex flex-col md:order-2 ml-auto">
          {/* <Parallax translateY={isMobile ? [0, 0] : [60, -21]} easing="ease" className="flex flex-col ml-auto"> */}
            <h1 className="uppercase order-2 font-morganite text-[30vw] md:text-[22vw] leading-[0.75] ml-3 mt-5 md:ml-0">
              About Us
            </h1>
            <div className="order-1 w-full flex md:justify-end">
              <button className="md:ml-24 mb-2 mt-2 ml-auto md:mt-0 w-[95vw] md:w-[20vw] min-w-[16rem] self-end aspect-[7/3] z-10">
                <CardButton
                  text={{ head: "Get", tail: "Tickets", caption: "Tickets" }}
                  onClick={() => {
                    handleClick("events");
                  }}
                />
              </button>
            </div>
          {/* </Parallax> */}
        </div>
        {/* <Parallax translateY={isMobile ? [0, 0] : [10, -10]} easing="ease"> */}
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
        {/* </Parallax> */}
      </div>
      <p className="mx-3 md:mx-[9vw] font-poppins font-semibold mt-8 md:-mt-[5vh] text-justify">
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
