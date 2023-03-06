// import React, { useState } from "react";
import P1 from "../assets/images/events/dj-war.jpeg";
import P2 from "../assets/images/events/fifa.jpeg";
import P3 from "../assets/images/events/maze.jpeg";
import P4 from "../assets/images/events/spot-pic.jpeg";
import P5 from "../assets/images/events/themeShow.jpeg";
import P6 from "../assets/images/events/voiceOfBrahma.jpeg";
import RapBattle from "../assets/images/events/rapBattle.jpeg";
import HipHopBattle from "../assets/images/events/hipHopBattle.jpeg";
import SpotDance from "../assets/images/events/spotDance.jpeg";
import BandofBrahma from "../assets/images/events/bandOfBrahma.jpeg";
import P7 from "../assets/images/events/comingSoon.jpeg";
import w1 from "../assets/images/workshops/3dprinting.jpeg";
import w2 from "../assets/images/workshops/cnc.jpeg";
import w3 from "../assets/images/workshops/ieee.jpeg";
import w4 from "../assets/images/workshops/iot.jpeg";
import CardButton from "./CardButton";
const AllEvents = () => {
  const images = [
    {
      name: "DJ War",
      src: P1,
      reg: "500",
      venue: "Main Stage",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/dj-war",
      category: "Cultural",
    },
    {
      name: "Fifa",
      src: P2,
      reg: "100",
      venue: "PL Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/fifa-versus2",
      category: "General",
    },
    {
      name: "Maze",
      src: P3,
      reg: "200/Team",
      venue: "S1 CSA & S1 CS(AI)",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/maze",
      category: "General",
    },
    {
      name: "Spot Photography",
      src: P4,
      reg: "100",
      venue: "College Premise",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/spot-photography1",
      category: "General",
    },
    {
      name: "Theme Show",
      src: P5,
      reg: "200",
      venue: "Main Stage",
      time: "30-03-2023 10:00 AM",
      regLink: "https://min.lc/Theme-Show",
      category: "Cultural",
    },
    {
      name: "Voice of Brahma",
      src: P6,
      reg: "200",
      venue: "Main Stage",
      time: "30-03-2023 10:00 AM",
      regLink: "https://min.lc/voiceofbrahma",
      category: "Cultural",
    },
    {
      name: "Spot Dance",
      src: SpotDance,
      reg: "200",
      venue: "Outdoor",
      time: "30-03-2023 10:00 AM",
      regLink: "https://min.lc/spotdance",
      category: "Cultural",
    },
    {
      name: "Rap Battle",
      src: RapBattle,
      reg: "200",
      venue: "Mini Seminar Hall",
      time: "01-04-2023 10:00 AM",
      regLink: "https://min.lc/rapbattle",
      category: "Cultural",
    },
    {
      name: "Band of Brahma",
      src: BandofBrahma,
      reg: "200",
      venue: "Main Stage",
      time: "31-03-2023 10:00 AM",
      regLink: "https://min.lc/bandofbrahma",
      category: "Cultural",
    },
    {
      name: "Hip Hop Battle",
      src: HipHopBattle,
      reg: "150",
      venue: "Auditorium",
      time: "01-04-2023 10:00 AM",
      regLink: "https://min.lc/Hip-Hop-Hustle",
      category: "Cultural",
    },
    {
      name: "CNC Workshop",
      src: w2,
      reg: "400",
      venue: "CNC Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Workshop",
    },
    {
      name: "3D Printing Workshop",
      src: w1,
      reg: "400",
      venue: "CCF Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/3d-printing-workshop1",
      category: "Workshops",
    },
    {
      name: "IEEE Workshop",
      src: w3,
      reg: "100",
      venue: "Simulation Lab (Lab 7)",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Workshop",
    },
    {
      name: "IoT Workshop",
      src: w4,
      reg: "300",
      venue: "CCF Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Workshop",
    },
    {
      name: "IEI Workshop",
      src: P7,
      reg: "250",
      venue: "Simulation Lab (Lab 7)",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Workship",
    },
    {
      name: "Mudhra",
      src: P7,
      reg: "200",
      venue: "Auditorium",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Percusion Instrument",
      src: P7,
      reg: "200",
      venue: "Seminar Hall",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Choreo Night",
      src: P7,
      reg: "200",
      venue: "Main Stage",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Mime",
      src: P7,
      reg: "200",
      venue: "Auditorium",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Ragam",
      src: P7,
      reg: "200",
      venue: "Seminar Hall",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Stand Up Comedy",
      src: P7,
      reg: "150",
      venue: "CS Seminar Hall",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Street Show",
      src: P7,
      reg: "100",
      venue: "Outdoor",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Step N Synchro",
      src: P7,
      reg: "200",
      venue: "Main Stage",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Doodling",
      src: P7,
      reg: "100",
      venue: "Mini Seminar Hall",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Cultural",
    },
    {
      name: "Jam",
      src: P7,
      reg: "150",
      venue: "Classrooms",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Valorant",
      src: P7,
      reg: "150/Team",
      venue: "Online",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Brain Cycle",
      src: P7,
      reg: "100",
      venue: "Infront of Lobby",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Underarm Cricket",
      src: P7,
      reg: "300/Team",
      venue: "Ground/Basketball Court",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Short Film Contest",
      src: P7,
      reg: "600/Team",
      venue: "Seminar Hall",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Basketball 3S",
      src: P7,
      reg: "450/Team",
      venue: "Basketball Court",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Glowball",
      src: P7,
      reg: "150/Team",
      venue: "S1 ECA",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "RJ Hunt",
      src: P7,
      reg: "200",
      venue: "Auditorium/Main Stage",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Game of Romms",
      src: P7,
      reg: "200/Team",
      venue: "EEE S5/S6 Classroom",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Soapy Soccer",
      src: P7,
      reg: "300/Team",
      venue: "Basketball Court",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Fun Zone",
      src: P7,
      reg: "20/Game",
      venue: "Civil Block",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Fire & Rescue + Dog Squad",
      src: P7,
      reg: "",
      venue: "Basketball Court",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Paint Ball",
      src: P7,
      reg: "500/Team",
      venue: "Civil Block Parking",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Knives Out",
      src: P7,
      reg: "100/Team",
      venue: "Classroom",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Gun Expo",
      src: P7,
      reg: "30",
      venue: "Mechanical Block",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Go Cart Museum",
      src: P7,
      reg: "30",
      venue: "Main Block",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Cryogenic Museum",
      src: P7,
      reg: "50",
      venue: "Main Block",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Photobooth With Poleroid Camera",
      src: P7,
      reg: "100/Pic",
      venue: "Lawn",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Treasure Hunt",
      src: P7,
      reg: "250/Team",
      venue: "College Premise",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Blind Fold",
      src: P7,
      reg: "",
      venue: "Auditorium",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
    {
      name: "Best Manager",
      src: P7,
      reg: "300",
      venue: "MBA Department",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "General",
    },
  ];

  return (
    <div className="md:mb-32">
      <div className="flex mt-[8vw] ml-[16vw] md:hidden">
        <p className="absolute top-[24.8vw] left-0 text-lg font-bold font-poppins text-secondary">
          (46)
        </p>
        <p
          className=" text-secondary self-end font-semibold font-poppins text-lg 
           w-full leading-[0.9] tracking-tighter p-2  pb-[5vw]  mr-auto"
        >
          <span className="font-morganite text-[19vw] md:text-[7vw] text-primary uppercase">
            Total Prize Pool ₹6L{" "}
          </span>
          <span className="text-[6vw]">
            Choreonite ₹80k
            <br />
            Theme Show ₹60k
            <br />
            Band of Brahma ₹30k
            <br />
            Mime ₹25k
          </span>
        </p>
      </div>

      <div className="justify-between md:flex">
        <div className=" font-morganite md:static text-primary text-[40vw] md:text-[26vw] pl-1 md:pt-[8%]">
          <h1 className="leading-[0.75]">ALL</h1>
          <h1 className="leading-[0.75]">EVENTS</h1>
        </div>
        <div className=" hidden mb-[18vw] ml-[12vw]  mt-[5vw] md:flex">
          <p
            className="mb-[12.8vw]  text-secondary self-end font-semibold font-poppins text-2xl md:text-[2.14rem] 
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
          >
            <span className="font-morganite text-[7vw] text-primary uppercase">
              Total Prize Pool ₹6L{" "}
            </span>
            <span className="text-[2vw]">
              Choreonite ₹80k
              <br />
              Theme Show ₹60k
              <br />
              Band of Brahma ₹30k
              <br />
              Mime ₹25k
            </span>
          </p>
          <div className="font-poppins absolute text-secondary  text-[3rem] font-bold  right-0">
            (46)
          </div>
        </div>
        <button className="hidden mr-6 w-[28vw] h-[8vw] md:inline mt-[38vw] mb-[6vw]">
          <CardButton
            href="/"
            text={{ head: "Get", tail: "Slots", caption: "registration" }}
          />
        </button>
      </div>
      <button className="mt-[2vw] h-full w-full md:hidden">
        <CardButton
          href="/"
          text={{ head: "Get", tail: "Slots", caption: "registration" }}
        />
      </button>
      <div className="mt-[5vw] grid max-w-screen-xl grid-cols-1 gap-4 mx-3 md:mx-auto my-5 md:gap-y-20 justify-items-center md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="max-w-sm">
            <div className="flex flex-col justify-center text-primary">
              <a href={image.regLink} alt={image.name}>
                <img
                  className="rounded-tr-[4em] md:w-full aspect-[1/1] hover:scale-105"
                  src={image.src}
                  alt={image.name}
                />
              </a>
              <div className="pl-2 mt-4 text-lg font-bold font-poppins text-primary">
                {image.name}
              </div>
              <div className="flex flex-row pl-2 mt-4 font-semibold">
                <div className=" font-poppins text-primary">
                  {image.reg === "" ? (
                    "Free"
                  ) : (
                    <>
                      <span className="px-1 text-sm border-2 border-orange-500">
                        ₹{image.reg.split("/")[0]}
                      </span>
                      {image.reg.split("/")[1] && (
                        <>
                          <br />
                          <span className="">
                            per&nbsp;{image.reg.split("/")[1]}
                          </span>
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="ml-6 font-poppins text-primary">
                  {image.venue}
                </div>
                <div className="ml-6 font-poppins text-primary">
                  {image.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
