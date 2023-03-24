import eventsData from "../assets/events.json";
import { useState } from "react";
import CardButton from "./CardButton";
const AllEvents = ({ rippleRef }) => {
  const [filter, setFilter] = useState("All");
  const [dayfilter, setDay] = useState("All");
  return (
    <div className="md:mb-32 overflow-hidden">
      <div className="flex mt-[8vw] ml-[16vw] md:hidden">
        <p className="absolute top-[24.8vw] left-0 text-lg font-bold font-poppins text-secondary">
          (45+)
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
          {/* <img src={lightSVG} alt="Prize Money"/> */}
        </p>
      </div>

      <div className="justify-between md:flex">
        <div className=" font-morganite md:static text-primary text-[40vw] md:text-[26vw] pl-1 md:pt-[6%]">
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
            {/* <img src={darkSVG} alt="Prize Money"/> */}
          </p>
          <p className="font-poppins absolute text-secondary  text-[3rem] font-bold  right-0">
            (45+)
          </p>
        </div>
        <button className="hidden mr-6 w-[28vw] h-[8vw] md:inline mt-[38vw] md:mt-[37vw] mb-[6vw]">
          <CardButton
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.yepdesk.com/profile/brahmaasiet");
            }}
            target={"_blank"}
            text={{ head: "Get", tail: "Slots", caption: "Registration" }}
          />
        </button>
      </div>
      <button className="mt-[5vw] h-full w-full md:hidden">
        <CardButton
          onClick={(e) => {
            e.preventDefault();
            window.open("https://www.yepdesk.com/profile/brahmaasiet");
          }}
          target={"_blank"}
          text={{ head: "Get", tail: "Slots", caption: "Registration" }}
        />
      </button>
      <div className="flex justify-center flex-wrap gap-y-2 md:mb-4 mt-4 md:mt-0 space-x-2 md:space-x-4 md:mx-0">
        <p
          className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-secondary  hover:bg-secondary hover:text-accent ${
            filter === "All"
              ? "bg-secondary text-accent animate-selectedHeptics"
              : "bg-accent text-primary border"
          }`}
          onClick={() => {
            setDay("All");
            setFilter("All");
          }}
        >
          All Events
        </p>
        <p
          className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-secondary  hover:bg-secondary hover:text-accent ${
            filter === "Cultural"
              ? "bg-secondary text-accent animate-selectedHeptics"
              : "bg-accent text-primary border"
          }`}
          onClick={() => setFilter("Cultural")}
        >
          Cultural
        </p>
        <p
          className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-secondary  hover:bg-secondary hover:text-accent ${
            filter === "General"
              ? "bg-secondary text-accent animate-selectedHeptics"
              : "bg-accent text-primary border"
          }`}
          onClick={() => setFilter("General")}
        >
          General
        </p>
        <p
          className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-secondary  hover:bg-secondary hover:text-accent ${
            filter === "Workshop"
              ? "bg-secondary text-accent animate-selectedHeptics"
              : "bg-accent text-primary border"
          }`}
          onClick={() => setFilter("Workshop")}
        >
          Workshop
        </p>
        {/* <p
          className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-secondary  hover:bg-secondary hover:text-accent ${
            dayfilter === "All"
              ? "bg-secondary text-accent animate-selectedHeptics"
              : "bg-accent text-primary border"
          }`}
          onClick={() => setDay("All")}
        >
          All Days
        </p> */}
        <p
          className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-secondary  hover:bg-secondary hover:text-accent ${
            dayfilter === "1"
              ? "bg-secondary text-accent animate-selectedHeptics"
              : "bg-accent text-primary border"
          }`}
          onClick={() => setDay("1")}
        >
          Day 1
        </p>
        <p
          className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-secondary  hover:bg-secondary hover:text-accent ${
            dayfilter === "2"
              ? "bg-secondary text-accent animate-selectedHeptics"
              : "bg-accent text-primary border"
          }`}
          onClick={() => setDay("2")}
        >
          Day 2
        </p>
        <p
          className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer border-secondary  hover:bg-secondary hover:text-accent ${
            dayfilter === "3"
              ? "bg-secondary text-accent animate-selectedHeptics"
              : "bg-accent text-primary border"
          }`}
          onClick={() => setDay("3")}
        >
          Day 3
        </p>
      </div>
      <div className="mt-[5vw] grid max-w-screen-xl grid-cols-1 gap-4 mx-3 md:mx-auto my-5 md:gap-y-20 justify-items-center md:grid-cols-3 ">
        {eventsData.map((event, index) => {
          if (
            (filter === "All" || event.type === filter) &&
            (dayfilter === "All" || event.day === dayfilter)
          ) {
            return (
              <div key={index} className="max-w-sm mt-8 md:mt-0">
                <div className="flex flex-col justify-center text-primary">
                  <a
                    href={`event\\${index}`}
                    alt={event.name}
                    onClick={(e) => {
                      e.preventDefault();
                      rippleRef.current.classList.toggle("circle-ripple");
                      // after timeout of 1.5 sec
                      setTimeout(() => {
                        window.location.pathname = `event\\${index}`;
                      }, 1500);
                    }}
                  >
                    <img
                      className="rounded-xl w-[95vw] md:w-full mx-auto md:mx-0 aspect-[1/1] hover:scale-105 show"
                      src={event.main_img}
                      alt={event.name}
                    />
                  </a>
                  <div className="pl-2 mt-4 text-lg font-bold flex w-full justify-between font-poppins text-primary">
                    <div className="w-[20vw]">{event.name}</div>
                    {event.day === "" ? (
                      ""
                    ) : (
                      <div className="mr-2">Day {event.day}</div>
                    )}
                  </div>
                  <div className="flex flex-row w-full justify-between pl-2 mt-4 font-semibold">
                    <div className=" font-poppins text-primary">
                      {event.price === "" ? (
                        "Free"
                      ) : (
                        <>
                          <div className="border-2 border-orange-500 rounded-md w-min inline pl-1">
                            ₹
                            <span
                              dangerouslySetInnerHTML={{
                                __html: event.price,
                              }}
                              className="px-1 text-sm "
                            ></span>
                          </div>
                          {event.team ? (
                            <span className="ml-1"> per team</span>
                          ) : (
                            <span className="ml-1"> per head</span>
                          )}
                        </>
                      )}
                    </div>
                    <div className="ml-6 font-poppins text-primary">
                      {event.location}
                    </div>
                    <div className="ml-6 md:mr-2 font-poppins text-primary">
                      {event.time}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
    </div>
  );
};

export default AllEvents;
