import React from "react";
// import dotSVG from "../assets/images/dot.svg"
// import imgSrc from "../assets/images/imgSrc.jpg"
// import Event1 from "../assets/images/event1.jpg";
import Event1 from "../assets/images/events/theme_show.jpeg";
import Event2 from "../assets/images/events/dj-war.jpeg";
import Event3 from "../assets/images/events/voice.jpeg";
import Event4 from "../assets/images/events/fifa.jpeg";
import Event5 from "../assets/images/events/maze.jpeg";
import Event6 from "../assets/images/events/spot-pic.jpeg";
import CardButton from "./CardButton";
// import { Parallax } from 'react-scroll-parallax';
// import { useMediaQuery } from 'react-responsive';

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
  // const isMobile = useMediaQuery({ maxWidth: 640 });

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
      imgSrc: Event1,
    },
    {
      id: 2,
      name: "DJ War",
      venue: "Main Stage",
      time: "31-03-2023 10:00 AM",
      imgSrc: Event2,
    },
    {
      id: 3,
      name: "Voice of Brahma",
      venue: "Main Stage",
      time: "31-03-2023 10:00 AM",
      imgSrc: Event3,
    },
    {
      id: 4,
      name: "Fifa",
      venue: "CCF Lab",
      time: "31-03-2023 10:00 AM",
      imgSrc: Event4,
    },
    {
      id: 5,
      name: "Maze",
      venue: "PL Lab",
      time: "31-03-2023 10:00 AM",
      imgSrc: Event5,
    },
    {
      id: 6,
      name: "Spot Photography",
      venue: "College Premise",
      time: "31-03-2023 10:00 AM",
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

  return (
    <div className="mt-28 mb-48">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <h1 className="uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]">
            Cultural
          </h1>
          <div className="text-secondary font-poppins font-bold text-[2vw] ml-2 md:ml-10 mt-[5vw] md:mt-[7vw] mr-2 md:mr-8">
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
          <h1 className="uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]">
            Events
          </h1>
          <div className="text-secondary font-poppins font-bold text-[2vw] ml-2 md:ml-10 mr-2 md:mr-8">
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
      <div className="flex flex-col mt-10">
        <div className="flex flex-row-reverse">
          <h1 className="uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]">
            General
          </h1>
          <div
            className="text-secondary font-poppins font-bold text-[2vw] ml-2 md:ml-0 md:mr-10 mt-[5vw] md:mt-[7vw]"
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
          <h1 className="uppercase font-morganite text-[30vw] md:text-[22vw] leading-[0.75]">
            Events
          </h1>
          <div
            className="text-secondary font-poppins font-bold text-[2vw] ml-2 md:ml-20 md:mr-10"
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
      <div className="py-5 px-1 md:p-5 md:mt-20 mt-[3vw] font-poppins font-semibold">
        <div className="flex flex-col">
          <div className="flex flex-row mb-10 gap-5">
            {events.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className="relative md:w-[32vw] w-[55vw] shadow-overlay-reverse"
              >
                <img
                  src={event.imgSrc}
                  alt={event.name}
                  className="relative aspect-[3/4] object-cover w-full rounded-md rounded-tr-[5vw]"
                />
                <div className="absolute z-40 bottom-16 p-3 text-2xl">
                  {event.name}
                </div>
                <div className="absolute z-40 bottom-8 p-3">{event.venue}</div>
                {/* <div className="absolute bottom-0 right-0 p-3">{event.time}</div> */}
              </div>
            ))}
          </div>
          <div className="flex flex-row-reverse mb-10 gap-5">
            {events.slice(2, 4).map((event) => (
              <div
                key={event.id}
                className="relative md:w-[32vw] w-[55vw] shadow-overlay-reverse"
              >
                <img
                  src={event.imgSrc}
                  alt={event.name}
                  className="relative aspect-[3/4] object-cover w-full rounded-md rounded-tr-[5vw]"
                />
                <div className="absolute z-40 bottom-16 p-3 text-2xl">
                  {event.name}
                </div>
                <div className="absolute z-40 bottom-8 p-3">{event.venue}</div>
                {/* <div className="absolute bottom-0 right-0 p-3">{event.time}</div> */}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap mb-10 gap-5">
            {events.slice(4, 6).map((event) => (
              <div
                key={event.id}
                className="relative md:w-[32vw] w-[55vw] shadow-overlay-reverse"
              >
                <img
                  src={event.imgSrc}
                  alt={event.name}
                  className="relative aspect-[3/4] object-cover w-full rounded-md rounded-tr-[5vw]"
                />
                <div className="absolute z-40 bottom-16 p-3 text-2xl">
                  {event.name}
                </div>
                <div className="absolute z-40 bottom-8 p-3">{event.venue}</div>
                {/* <div className="absolute bottom-0 right-0 p-3">{event.time}</div> */}
              </div>
            ))}
            <div className="relative -mt-7 md:mt-0 md:ml-5 h-[35vh] w-[48%] md:w-[22%]">
              <CardButton
                onClick={() => {
                  handleClick("events");
                }}
                text={{ head: "View", tail: "All Events", caption: "Events" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
