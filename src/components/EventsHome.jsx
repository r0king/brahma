import React, { useEffect, useRef, useState } from "react";
import Event1 from "../assets/images/events/themeShow.jpeg";
import Event2 from "../assets/images/events/DJ_War.jpg";
import Event3 from "../assets/images/events/voiceOfBrahma.jpeg";
import Event4 from "../assets/images/events/bandOfBrahma.jpeg";
import Event5 from "../assets/images/events/hipHopBattle.jpeg";
import Event6 from "../assets/images/events/rapBattle.jpeg";
import CardButton from "./CardButton";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from "react-scroll-parallax";

function DotSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="inline stroke-secondary w-5"
      fill="#d35c39"
      height="30"
      viewBox="0 96 960 960"
      width="30"
    >
      <path d="M478 578Zm2 278q-117 0-198.5-81.5T200 576q0-117 81.5-198.5T480 296q117 0 198.5 81.5T760 576q0 117-81.5 198.5T480 856Zm0-60q92 0 156-64t64-156q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 92 64 156t156 64Z" />
    </svg>
  );
}

export default function EventsHome({ rippleRef }) {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1.01 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  const isMobile = useMediaQuery({ maxWidth: 640 });

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
      id: 1,
      name: "Theme Show",
      venue: "Main Stage",
      time: "31-03-2023 10:00 AM",
      regLink: "/event/2",
      imgSrc: Event1,
    },
    {
      id: 2,
      name: "DJ War",
      venue: "Main Stage",
      time: "31-03-2023 10:00 AM",
      regLink: "/event/15",
      imgSrc: Event2,
    },
    {
      id: 3,
      name: "Voice of Brahma",
      venue: "Main Stage",
      time: "31-03-2023 10:00 AM",
      regLink: "/event/7",
      imgSrc: Event3,
    },
    {
      id: 4,
      name: "Band Of Brahma",
      venue: "Main Stage",
      time: "31-03-2023 10:00 AM",
      regLink: "/event/1",
      imgSrc: Event4,
    },
    {
      id: 5,
      name: "Hip Hop Hustle",
      venue: "Auditorium",
      time: "01-04-2023 10:00 AM",
      regLink: "/event/6",
      imgSrc: Event5,
    },
    {
      id: 6,
      name: "Rap Battle",
      venue: "Mini Seminar Hall",
      time: "01-04-2023 10:00 AM",
      regLink: "/event/4",
      imgSrc: Event6,
    },
  ];

  const culList = [
    "DJ War",
    "Mudhra",
    "Percusion Instrument",
    "Choreo Night",
    "Voice Of Brahma",
    "Theme Show",
    "Spot Dance",
    "Mime",
    "Ragam",
    "Stand Up Comedy",
    "Street Show",
    "Rap Battle",
    "Band Of Brahma",
    "Hip Hop Battle",
    "Step N Syncro",
    "Doodling",
    "Spotlight",
  ];

  const genList = [
    "Jam",
    "Fifa",
    "Valorant",
    "Spot Photography",
    "Brain Cycle",
    "Underarm Cricket",
    "Short Film Contest",
    "Basketball 3s",
    "Glowball",
    "Rj Hunt",
    "Game Of Rooms",
    "Soapy Soccer",
    "Fun Zone",
    "Fire And Rescue Team + Dog Squad",
    "Paint Ball",
    "Knives Out",
    "Maze",
    "Gun Expo",
    "Go Cart Museum",
    "Cryogenic Museum",
    "Photobooth With Poleroid Camera",
    "Treasure Hunt",
    "Blind Fold",
    "Best Manager",
  ];

  const culLen = culList.length;
  const genLen = genList.length;
  const [targetCulturall, setTarget] = useState();
  const targetCulturallRef = useRef();
  const targetGenerallRef = useRef();
  const [targetGeneral, setGeneralTarget] = useState();
  const [scale, setScale] = useState(1);
  useEffect(() => {
    setTarget(targetCulturallRef.current);
    setGeneralTarget(targetGenerallRef.current);
  }, [targetCulturallRef, targetGenerallRef]);

  const maxScale = 7; // maximum scale value
  const minScale = 0.5; // minimum scale value
  const pivot = 0.4; // point where scale starts decreasing

  const calculateScalePoint = (progress) => {
    if (progress < pivot) {
      return minScale + (progress / pivot) * (maxScale - minScale);
    } else {
      return (
        maxScale - ((progress - pivot) / (1 - pivot)) * (maxScale - minScale)
      );
    }
  };
  return (
    <>
      <div ref={targetCulturallRef} className="relative h-1 w-full"></div>
      <div className="mt-48 md:mt-[20vh]">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Parallax
              translateY={isMobile ? [-130, 50] : [-40, 0]}
              targetElement={!isMobile && targetCulturall}
            >
              <h2 className="uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75] pl-3">
                Cultural
              </h2>
            </Parallax>
            <div className="text-secondary  font-poppins font-semibold text-[4vw] md:text-[2.8vw] ml-2 md:ml-10 mt-[-32vw] md:mt-[4vw] mr-2 md:mr-8">
              <ul className="list-none relative">
                {culList.map((item, index) => {
                  if (index < culLen / 2 - 1) {
                    return (
                      <li key={index} className="inline">
                        {item}
                        {index < culLen / 2 - 2 && <DotSVG />}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-row">
            <Parallax
              translateY={isMobile ? [-50, 50] : [-40, 0]}
              targetElement={!isMobile && targetCulturall}
            >
              <h2 className="uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75] pl-3">
                Events
              </h2>
            </Parallax>
            <div className="text-secondary font-poppins font-semibold text-[4vw] md:text-[2.8vw] ml-2 md:ml-10 mr-2 md:mr-8">
              <ul className="list-none relative">
                {culList.map((item, index) => {
                  if (index > culLen / 2 - 1) {
                    return (
                      <li key={index} className="inline">
                        {item}
                        {index < culLen - 1 && <DotSVG />}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div
          ref={targetGenerallRef}
          className="relative invisible md:visible h-full w-full my-[5vh] mb-[15vh]"
        >
          <Parallax
            easing="ease"
            onProgressChange={(progress) => {
              setScale(calculateScalePoint(progress));
            }}
            style={{
              scale: 1.2,
            }}
            id="parallax"
            className={`bg-accent z-20`}
            translateX={isMobile ? [-50, -50] : [0, 100]}
          >
            <div
              id="glow-ball"
              style={{
                // transform: `scale(${scale})`,
                //scaley
                transform: `scaleX(${scale*1.5})`,                
              }}
              className="transform h-2 w-8 bg-white ease-in-out duration-75 rounded-xl"
            ></div>
          </Parallax>
        </div>
        <div className="flex flex-col mt-60 md:mt-10">
          <div className="flex flex-row-reverse">
            <Parallax
              translateY={isMobile ? [-200, 50] : [-33, 0]}
              targetElement={!isMobile && targetGeneral}
            >
              <h2 className="uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75] pr-3">
                General
              </h2>
            </Parallax>
            <div
              className="text-secondary font-poppins font-semibold text-[4vw] md:text-[2.5vw] ml-2 md:ml-2 mr-4 md:mr-10 mt-[-57vw] md:mt-[1.5vw]"
              dir="rtl"
            >
              <ul className="list-none relative ">
                {genList.map((item, index) => {
                  if (index < genLen / 2) {
                    return (
                      <li key={index} className="inline">
                        {item}
                        {index < genLen / 2 - 1 && <DotSVG />}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <Parallax
              translateY={isMobile ? [-50, 50] : [-30, 3]}
              targetElement={!isMobile && targetGeneral}
            >
              <h2 className="uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75] pr-3">
                Events
              </h2>
            </Parallax>
            <div
              className="text-secondary font-poppins font-semibold text-[4vw] md:text-[2.5vw] ml-2 md:ml-3 mr-4 md:mr-10"
              dir="rtl"
            >
              <ul className="list-none relative">
                {genList.map((item, index) => {
                  if (index > genLen / 2 - 1) {
                    return (
                      <li key={index} className="inline">
                        {item}
                        {index < genLen - 1 && <DotSVG />}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
        </div>
        {isMobile ? (
          <div>
            <div className="w-full mt-10">
              <Slider {...settings}>
                {events.map((event, index) => (
                  <a href={event.regLink} alt={event.name}>
                    <div key={index} className="text-base">
                      <div className="flex flex-col">
                        <img
                          className="aspect-auto mobile object-top px-1"
                          src={event.imgSrc}
                          alt={`Slide ${index + 1}`}
                        />
                        <div className="mt-4 font-poppins font-bold pl-2">
                          {event.name}
                        </div>
                        <div className="flex flex-row mt-4 font-semibold ml- 2">
                          <div className="font-poppins ml-2">{event.venue}</div>
                          <div className="font-poppins ml-6">{event.time}</div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </Slider>
            </div>
            <div className="mx-auto md:ml-24 mb-2 mt-2 md:mt-0 w-[95vw] md:w-[20vw] min-w-[16rem] self-end aspect-[7/3]">
              <CardButton
                onClick={() => {
                  handleClick("events");
                }}
                text={{ head: "View", tail: "All Events", caption: "Events" }}
              />
            </div>
          </div>
        ) : (
          <div className="text-primary py-5 px-1 md:p-5 md:mt-20 mt-[3vw] font-poppins font-semibold">
            <div className="flex flex-col">
              <div className="flex flex-row mb-10 gap-5">
                {events.slice(0, 2).map((event) => (
                  <a href={event.regLink} alt={event.name}>
                    <div
                      key={event.id}
                      className="relative md:w-[32vw] w-[55vw] shadow-overlay-event"
                    >
                      <img
                        src={event.imgSrc}
                        alt={event.name}
                        className="relative aspect-[1/1] object-cover w-full rounded-md"
                      />
                      <div className="absolute z-40 bottom-16 p-3 text-2xl">
                        {event.name}
                      </div>
                      <div className="absolute z-40 bottom-8 p-3">
                        {event.venue}
                      </div>
                      {/* <div className="absolute bottom-0 right-0 p-3">{event.time}</div> */}
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex flex-row-reverse mb-10 gap-5">
                {events.slice(2, 4).map((event) => (
                  <a href={event.regLink} alt={event.name}>
                    <div
                      key={event.id}
                      className="relative md:w-[32vw] w-[55vw] shadow-overlay-event"
                    >
                      <img
                        src={event.imgSrc}
                        alt={event.name}
                        className="relative aspect-[1/1] object-cover w-full rounded-md"
                      />
                      <div className="absolute z-40 bottom-16 p-3 text-2xl">
                        {event.name}
                      </div>
                      <div className="absolute z-40 bottom-8 p-3">
                        {event.venue}
                      </div>
                      {/* <div className="absolute bottom-0 right-0 p-3">{event.time}</div> */}
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap mb-10 gap-5">
                {events.slice(4, 6).map((event) => (
                  <a href={event.regLink} alt={event.name}>
                    <div
                      key={event.id}
                      id="mainDiv"
                      className="relative md:w-[32vw] w-[55vw] shadow-overlay-event"
                    >
                      <img
                        src={event.imgSrc}
                        alt={event.name}
                        className="relative aspect-[1/1] object-cover w-full rounded-md"
                      />
                      <div
                        id="subDiv1"
                        className="absolute z-40 bottom-16 p-3 text-2xl"
                      >
                        {event.name}
                      </div>
                      <div id="subDiv2" className="absolute z-40 bottom-8 p-3">
                        {event.venue}
                      </div>
                      {/* <div className="absolute bottom-0 right-0 p-3">{event.time}</div> */}
                    </div>
                  </a>
                ))}
                <div className="mx-auto md:ml-24 mb-2 mt-2 md:mt-0 w-[95vw] md:w-[20vw] min-w-[16rem] self-end aspect-[7/3]">
                  <CardButton
                    onClick={() => {
                      handleClick("events");
                    }}
                    text={{
                      head: "View",
                      tail: "All Events",
                      caption: "Events",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
