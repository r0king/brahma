import eventsData from "../assets/events.json";
import { useState } from "react";
import CardButton from "./CardButton";
const AllEvents = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="md:mb-32">
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
          <div className="font-poppins absolute text-secondary  text-[3rem] font-bold  right-0">
            (45+)
          </div>
        </div>
        <button className="hidden mr-6 w-[28vw] h-[8vw] md:inline mt-[38vw] md:mt-[37vw] mb-[6vw]">
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
      <div className="flex justify-center mb-4 space-x-4">
        <h3
          className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
            filter === "All"
              ? "bg-primary text-secondary"
              : "bg-secondary text-primary"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </h3>
        <h3
          className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
            filter === "Cultural"
              ? "bg-primary text-secondary"
              : "bg-secondary text-primary"
          }`}
          onClick={() => setFilter("Cultural")}
        >
          Cultural
        </h3>
        <h3
          className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
            filter === "General"
              ? "bg-primary text-secondary"
              : "bg-secondary text-primary"
          }`}
          onClick={() => setFilter("General")}
        >
          General
        </h3>
        <h3
          className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer ${
            filter === "Workshop"
              ? "bg-primary text-secondary"
              : "bg-secondary text-primary"
          }`}
          onClick={() => setFilter("Workshop")}
        >
          Workshop
        </h3>
      </div>
      <div className="mt-[5vw] grid max-w-screen-xl grid-cols-1 gap-4 mx-3 md:mx-auto my-5 md:gap-y-20 justify-items-center md:grid-cols-3">
        {eventsData.map((event, index) => {
          if (filter === "All" || event.type === filter) {
            return (
              <div key={index} className="max-w-sm">
                <div className="flex flex-col justify-center text-primary">
                  <a href={`event\\${index}`} alt={event.name}>
                    <img
                      className="rounded-xl md:w-full aspect-[1/1] hover:scale-105 show"
                      src={event.main_img}
                      alt={event.name}
                    />
                  </a>
                  <div className="pl-2 mt-4 text-lg font-bold font-poppins text-primary">
                    {event.name}
                  </div>
                  <div className="flex flex-row pl-2 mt-4 font-semibold w-[100vw]">
                    <div className=" font-poppins text-primary">
                      {event.price === "" ? (
                        "Free"
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: event.price,
                          }}
                          className="px-1 text-sm border-2 border-orange-500"
                        ></span>
                      )}
                    </div>
                    <div className="ml-6 font-poppins text-primary">
                      {event.location}
                    </div>
                    <div className="ml-6 font-poppins text-primary">
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
