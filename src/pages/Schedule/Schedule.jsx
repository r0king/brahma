import React, { useEffect, useState } from "react";
import "./schedule.css";
// import blank from "../../assets/images/blankimg.webp";

const Schedule = ({ rippleRef }) => {
  const [category, setcategory] = useState("");
  const [dayselect, setdayselect] = useState(1);

  const categorySelect = (e) => {
    setcategory(e.target.value);
  };

  const sched1 = [
    {
      id: -1,
      timing: "09:00 - 12:00",
      category: "Cultural",
      description: "Thyagaraj Program",
      personnel: "Main Stage",
    },

    {
      id: 25,
      timing: "10:30 - 16:00",
      category: "General",
      description: "Fun Zone",
      personnel: "Civil Block",
    },
    {
      id: 3,
      timing: "12:10 - 12:30",
      category: "Cultural",
      description: "Ranga Pooja",
      personnel: "Main Stage",
    },
    {
      id: 42,
      timing: "12:30 - 16:30",
      category: "General",
      description: "3D Printing Workshop",
      personnel: "CCF Lab",
    },
    {
      id: 10,
      timing: "12:30 - 14:30",
      category: "Cultural",
      description: "Percusion Instrument",
      personnel: "EC Seminar Hall",
    },
    {
      id: 5,
      timing: "12:30 - 14:30",
      category: "Cultural",
      description: "Raagam",
      personnel: "CS Seminar Hall",
    },
    {
      id: 7,
      timing: "12:30 - 16:30",
      category: "General",
      description: "Blind Fold",
      personnel: "TBD",
    },
    {
      id: 17,
      timing: "12:30 - 15:30",
      category: "Workshop",
      description: "Spotlight Acting Workshop",
      personnel: "TBD",
    },
    {
      id: 24,
      timing: "13:00 - 17:00",
      category: "General",
      description: "Game Of Rooms",
      personnel: "S6 EEE Class",
    },
    {
      id: 7,
      timing: "13:00 - 15:00",
      category: "Cultural",
      description: "Voice Of Brahma - Final",
      personnel: "Main Stage",
    },
    {
      id: 33,
      timing: "13:00 - 17:00",
      category: "General",
      description: "Go Cart Expo",
      personnel: "TBD",
    },
    {
      id: 18,
      timing: "13:30 - 15:30",
      category: "General",
      description: "Best Manager",
      personnel: "MBA DEPT",
    },
    {
      id: 36,
      timing: "13:30 - 15:30",
      category: "General",
      description: "JAM",
      personnel: "Stage Near CCF",
    },
    {
      id: 14,
      timing: "15:30 - 17:30",
      category: "Cultural",
      description: "Melam",
      personnel: "Lobby Stairs",
    },
    {
      id: 2,
      timing: "17:00 - 21:00",
      category: "Cultural",
      description: "Theme Show",
      personnel: "Main Stage",
    },
  ];

  const sched2 = [
    {
      id: 7,
      timing: "10:00 - 12:00",
      category: "Cultural",
      description: "Voice of Brahma - Preliminary",
      personnel: "CS Seminar Hall",
    },
    {
      id: 3,
      timing: "10:00 - 13:00",
      category: "Cultural",
      description: "Mudhra",
      personnel: "Main Stage",
    },
    {
      id: 40,
      timing: "10:00 - 14:00",
      category: "Workshop",
      description: "IEEE Workshop",
      personnel: "ADP Lab",
    },
    {
      id: 31,
      timing: "10:00 - 14:00",
      category: "General",
      description: "FIFA",
      personnel: "PL Lab",
    },
    {
      id: 19,
      timing: "10:30 - 12:00",
      category: "General",
      description: "RJ Hunt",
      personnel: "Auditorium",
    },

    {
      id: 28,
      timing: "10:30 - 14:30",
      category: "General",
      description: "Paint Ball",
      personnel: "Civil Parking",
    },
    {
      id: 26,
      timing: "11:00 - 15:00",
      category: "General",
      description: "Soapy Soccer",
      personnel: "TBD",
    },
    {
      id: 20,
      timing: "11:00 - 15:00",
      category: "General",
      description: "Cryogenic Museum",
      personnel: "Robotics Seminar Hall",
    },
    {
      id: 0,
      timing: "11:00 - 13:00",
      category: "Cultural",
      description: "Doodling",
      personnel: "EC Seminar Hall",
    },
    {
      id: 39,
      timing: "11:30 - 15:30",
      category: "Workshop",
      description: "IOT Workshop",
      personnel: "NP Lab",
    },
    {
      id: 13,
      timing: "11:30 - 14:00",
      category: "Cultural",
      description: "Stand Up Comedy",
      personnel: "Main Seminar Hall",
    },
    {
      id: 27,
      timing: "12:00 - 16:00",
      category: "General",
      description: "Glow Ball",
      personnel: "S1 ECA",
    },
    {
      id: 23,
      timing: "13:00 - 17:00",
      category: "General",
      description: "Treasure Hunt",
      personnel: "College Premises",
    },
    {
      id: 8,
      timing: "14:00 - 16:00",
      category: "Cultural",
      description: "Spot Dance",
      personnel: "Lobby",
    },
    {
      id: 12,
      timing: "14:00 - 16:00",
      category: "Cultural",
      description: "Mime",
      personnel: "Auditorium",
    },
    {
      id: 1,
      timing: "14:30 - 16:30",
      category: "General",
      description: "Band of Brahma",
      personnel: "Main Stage",
    },
    {
      id: 22,
      timing: "14:30 - 17:30",
      category: "General",
      description: "Maze",
      personnel: "EEE Classrooms",
    },
    {
      id: 11,
      timing: "18:00 - 21:00",
      category: "Cultural",
      description: "Choreo Night",
      personnel: "Main Stage",
    },
  ];

  const sched3 = [
    {
      id: 14,
      timing: "09:30 - 12:30",
      category: "Cultural",
      description: "Step N Synchro",
      personnel: "Main Stage",
    },
    {
      id: 37,
      timing: "10:00 - 12:00",
      category: "General",
      description: "Short Film",
      personnel: "Main Seminar Hall",
    },
    {
      id: 41,
      timing: "10:00 - 14:00",
      category: "Workshop",
      description: "IEI Workshop",
      personnel: "Simulation Lab",
    },
    {
      id: 16,
      timing: "10:00 - 13:00",
      category: "Workshop",
      description: "Mural Workshop",
      personnel: "AE&I Seminar Hall",
    },
    {
      id: 29,
      timing: "10:30 - 13:30",
      category: "General",
      description: "Knives Out",
      personnel: "S5 CSA",
    },
    {
      id: 6,
      timing: "10:30 - 12:30",
      category: "Cultural",
      description: "Hip Hop Battle",
      personnel: "Auditorium",
    },
    {
      id: 35,
      timing: "10:30 - 14:30",
      category: "General",
      description: "Brain Cycle",
      personnel: "Infront of Lobby",
    },
    {
      id: 7,
      timing: "11:00 - 15:00",
      category: "General",
      description: "Soapy Soccer",
      personnel: "TBD",
    },
    {
      id: 15,
      timing: "11:00 - 13:30",
      category: "Cultural",
      description: "DJ War",
      personnel: "Main Stage",
    },
    {
      id: 4,
      timing: "11:00 - 13:00",
      category: "Cultural",
      description: "Rap Battle",
      personnel: "EC Seminar Hall",
    },
    {
      id: 43,
      timing: "12:00 - 16:00",
      category: "Workshop",
      description: "CNC Workshop",
      personnel: "CNC Lab",
    },
    {
      id: 9,
      timing: "12:00 - 14:00",
      category: "Cultural",
      description: "Street Show",
      personnel: "Lobby",
    },
    {
      id: 21,
      timing: "13:00 - 15:00",
      category: "General",
      description: "Fire & Rescue Team + Dog Squad",
      personnel: "TBD",
    },
    {
      id: 30,
      timing: "15:00 -17:30",
      category: "General",
      description: "UnderArm Cricket",
      personnel: "Ground",
    },
    {
      id: 32,
      timing: "15:00 - 17:00",
      category: "General",
      description: "BasketBall 3S",
      personnel: "BasketBall Court",
    },
    {
      id: 15,
      timing: "17:00 - 22:00",
      category: "-",
      description: "Band and DJ",
      personnel: "Main Stage",
    },
  ];

  const [schedule, setSchedule] = useState(sched1);
  const changePage = (name) => {
    // toggle circle ripple
    rippleRef.current.classList.toggle("circle-ripple");
    setTimeout(() => {
      window.location.pathname = `/${name}`;
    }, 1500);
  };
  useEffect(() => {
    console.log("schedule", schedule);
  }, [schedule]);
  return (
    <>
      <div className="flex mt-[8vw] ml-[16vw] md:hidden">
        <p
          className=" text-secondary self-end font-semibold font-poppins text-lg 
           w-full leading-[0.9] tracking-tighter p-2 pb-6 md:pb-[5vw] mr-1 md:mr-auto text-justify md:text-start"
        >
          The schedule for our tech fest is packed with exciting events and
          activities, including workshops & events. Stay tuned for updates and
          timings for each event.
        </p>
      </div>

      <div className="justify-between md:flex">
        <div className=" font-morganite md:static text-primary text-[40vw] md:text-[26vw] pl-1 md:pt-[6.5%]">
          <h1 className="leading-[0.75]">FULL</h1>
          <h1 className="leading-[0.75]">SCHEDULE</h1>
        </div>
        <div className=" hidden mb-[18vw] ml-[12vw]  mt-[5vw] md:flex">
          <p
            className="mb-[12.8vw]  text-secondary self-end font-semibold font-poppins text-2xl md:text-[2.14rem] 
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
          >
            The schedule for our tech fest is packed with exciting events and
            activities, including workshops & events. Stay tuned for updates and
            timings for each event.
          </p>
        </div>
      </div>

      <div className="schedule-menu animate-moveUpSlow">
        <div className="filter-schedule border-[2px] border-secondary h-min font-semibold flex justify-center w-full md:w-1/3 rounded-[2vw] my-[1%] mx-auto md:ml-[16vw]">
          <select
            value={category}
            onChange={categorySelect}
            className="border-r-[1vw] appearance-none"
          >
            <option value="" selected>
              All
            </option>
            <option value="Cultural">Cultural</option>
            <option value="General">General</option>
            <option value="Workshop">Workshop</option>
          </select>
        </div>

        <div
          className="tabs relative md:mr-[16vw] w-[50%] md:w-1/3 font-semibold "
          // set css variable "curr_tab" as selected tab
          style={{ "--selectedtab": dayselect - 1 }}
        >
          <div className="absolute bg-accent border-secondary border-2 h-full p-1 w-1/3 rounded-[2vw] translate-x-[calc(var(--selectedtab)*100%)] duration-500 ease-in-out"></div>
          <h3
            className={`button  ${dayselect === 1 ? "btn1" : ""}`}
            onClick={() => {
              setSchedule([]);
              setTimeout(() => {
                setSchedule(sched1);
              }, 100);
              setdayselect(1);
            }}
          >
            Day 1
          </h3>
          <h3
            className={`button ${dayselect === 2 ? "btn2" : ""}`}
            onClick={() => {
              setSchedule([]);
              setTimeout(() => {
                setSchedule(sched2);
              }, 100);
              setdayselect(2);
            }}
          >
            Day 2
          </h3>
          <h3
            className={`button ${dayselect === 3 ? "btn3" : ""}`}
            onClick={() => {
              setSchedule([]);
              setTimeout(() => {
                setdayselect(3);
              }, 100);
              setSchedule(sched3);
            }}
          >
            Day 3
          </h3>
        </div>
      </div>

      <div className="schedule justify-center animate-moveUpSlow">
        <div className="sched-table">
          {schedule.map((item) => {
            if (category === "")
              return (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.id > 0) changePage(`event/${item.id}`);
                  }}
                  key={item.id}
                  className="group hover:py-5 transition-all duration-500 ease-in-out "
                >
                  <li className="row ">
                    <li className="timing font-semibold">{item.timing}</li>
                    <li className="description roun">
                      <li className="category">{item.category}</li>
                      <li>{item.description}</li>
                    </li>
                    <li className="personnel">{item.personnel}</li>
                  </li>
                </div>
              );
            else {
              return (
                category === item.category && (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      changePage(`event/${item.id}`);
                    }}
                    key={item.id}
                    className="group hover:py-5 transition-all duration-500 ease-in-out"
                  >
                    <li className="row">
                      <li className="timing">{item.timing}</li>
                      <li className="description">
                        <li className="category">{item.category}</li>
                        <li>{item.description}</li>
                      </li>
                      <li className="personnel">{item.personnel}</li>
                    </li>
                  </div>
                )
              );
            }
          })}

          {schedule.length === 0 && (
            <h2 style={{ padding: "10%", width: "max-content" }}>
              No Schedule Available
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Schedule;
