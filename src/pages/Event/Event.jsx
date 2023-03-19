import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardButton from "../../components/CardButton";
import eventsData from "../../assets/events.json";
import MarqueeScroll from "../../components/MarqueeScroll";
// import posterImg from "../../assets/images/pic6.jpeg";
// import { Parallax } from "react-scroll-parallax";
export default function Event() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    setEventData(eventsData[eventId]);
  }, [eventId]);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="font-poppins">
      <div className="relative text-primary overflow-hidden">
        <div className="md:absolute">
          <MarqueeScroll
            text={
              // if char count is more than 10, then use the event name else snd it twice
              eventData.name && eventData.name.length > 10
                ? eventData.name
                : eventData.name + " &nbsp; &nbsp;  &nbsp; &nbsp;" + eventData.name
            }
          />
        </div>
        <div className="md:h-[500px] md:flex ">
          <h3
            className="text-primary self-end font-semibold font-poppins text-3xl md:text-[3.14rem] mt-auto
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
          >
            {eventData.name}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row relative md:static">
          <div className="flex flex-row w-full justify-between absolute md:static gap-2 p-2 md:gap-10 md:pl-5 z-10">
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-xl font-medium">Type</h4>
              <p className="text-secondary  leading-none font-semibold font-poppins text-lg">
                {eventData.type}
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-xl font-medium">Date</h4>
              <p className="text-secondary leading-none  font-semibold font-poppins text-lg">
                {eventData.date}
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-xl font-medium">Location</h4>
              <p className="text-secondary leading-none  font-semibold font-poppins text-lg">
                {eventData.location}
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-xl font-medium">Time</h4>
              <p className="text-secondary leading-none  font-semibold font-poppins text-lg">
                {eventData.time}
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-xl font-medium">Registration Fees</h4>
              <p
                className="text-secondary leading-none  font-semibold font-poppins text-lg"
                dangerouslySetInnerHTML={{ __html: eventData.price }}
              ></p>
            </div>
          </div>
          <div
            className="max-w-full md:absolute w-[460px] aspect-square object-cover my-5 rounded-xl
           relative right-[50%] md:left-[33.33%] md:top-0"
          >
            <img alt="poster" src={eventData.main_img} className="rounded-xl"/>
          </div>
          <div className="flex md:flex-col md:pl-[15vw] justify-between ">
            <button className="ml-auto px-2 md:mr-2 aspect-[9/3] w-full md:w-[calc((100vw-9.375rem)*3/14+1.875rem)]">
              <CardButton
                href={eventData.reg_link}
                onClick={() => {
                  window.open(eventData.reg_link, "_blank");
                }}
                text={{ head: "Get", tail: "Tickets", caption: "Booking" }}
              />
            </button>
          </div>
        </div>
      </div>
      {eventData.speaker && (
        <>
          <div className="flex w-full px-3 flex-col md:flex-row ">
            <h1 className="py-[10vw] text-5xl md:text-9xl text-secondary font-poppins font-semibold -tracking-widest">
              Speaker
            </h1>
            <h2 className="ml-auto text-right my-auto leading-[0.8] pt-11 text-primary text-[10rem] md:text-[20rem] font-morganite">
              01
            </h2>
          </div>
          <div className="-mt-[20%] md:mt-0 px-3 flex flex-col text-primary md:flex-row justify-center w-full text-lg md:px-[calc((100vw-9.375rem)*2/14+1.875rem)]">
            <div
              id="text-section"
              className="md:w-2/5 pr-[30%] md:pr-[calc((100vw-9.375rem)*1/14+.625rem)] text-secondary"
            >
              <h4 className="font-semibold pb-10 leading-[1.05]">
                {eventData.speaker_tagline}
              </h4>
              <p className="text-sm">{eventData.speaker_content}</p>
            </div>
            <div className="">
              <img
                src={eventData.speaker_img}
                alt=""
                className="max-w-full w-[460px] rounded-xl aspect-square object-cover my-5"
              />
            </div>
          </div>
        </>
      )}
      <div className="flex w-full px-2 flex-col md:flex-row ">
        <h1 className="py-[10vw] text-5xl md:text-9xl text-primary font-poppins font-semibold -tracking-widest">
          About <br /> The Event
        </h1>
        <h2 className="ml-auto text-right my-auto leading-[0.8] pt-11 text-secondary text-[10rem] md:text-[20rem] font-morganite">
          {eventData.speaker ? "02" : "01"}
        </h2>
      </div>
      <div className="-mt-[20%] text-primary md:mt-0 px-2 flex flex-col md:flex-row justify-center w-full text-lg md:px-[calc((100vw-9.375rem)*2/14+1.875rem)]">
        <div
          id="text-section"
          className="md:w-2/5 pr-[30%] md:pr-[calc((100vw-9.375rem)*1/14+.625rem)]"
        >
          <h4 className="font-semibold pb-10 text-2xl leading-[1.05] text-secondary">
            {eventData.event_tagline}
          </h4>
        </div>
        <div className="max-w-full  w-[460px] aspect-square object-cover font-poppins">
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: eventData.event_content }}
          ></p>
        </div>
      </div>
    </div>
  );
}
