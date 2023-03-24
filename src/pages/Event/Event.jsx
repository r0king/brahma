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
        <div
          className="max-w-full max-h-[75%] mx-auto w-full md:w-[460px] aspect-square object-cover md:my-5 rounded-xl
          absolute z-20 md:right-0 md:left-0 md:top-0"
        >
          <img
            alt="poster"
            src={eventData.main_img}
            className="w-2/3 md:w-full mx-auto rounded-xl"
          />
        </div>
        <p className="md:absolute mt-20 md:top-0 ">
          <MarqueeScroll
            text={
              // if char count is more than 10, then use the event name else snd it twice
              eventData.name && eventData.name.length > 10
                ? eventData.name
                : eventData.name +
                  " &nbsp; &nbsp;  &nbsp; &nbsp;" +
                  eventData.name
            }
          />
        </p>
        <div className="md:h-[60vh] md:flex md:mt-[5vw] mt-[14vw] ">
          <h1
            className="text-primary self-end font-semibold tracking-tighter font-poppins text-[32px] text-center md:text-left md:text-[3.14rem] pt-5 md:mt-auto 
           w-full leading-[0.9]  p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] md:pt-10vw] pb-[5vw] md:ml-3 md:leading-none mr-auto z-50"
          >
            {eventData.name}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row relative md:static ">
          <div className="flex flex-col md:flex-row w-full justify-between absolute md:static gap-0 p-2 md:gap-10 md:pl-5 z-10">
            <div className="flex flex-row md:flex-col h-[6vh] md:h-[13vh] justify-between text-right md:justify-between">
              <h4 className="text-xl font-semibold text-primary ">Type :</h4>
              <p className="text-secondary md:leading-none font-semibold font-poppins text-xl md:text-lg ml-7 md:ml-0">
                {eventData.type}
              </p>
            </div>
            <div className="flex flex-row md:flex-col h-[6vh] md:h-[13vh] justify-between md:justify-between">
              <h4 className="text-xl font-semibold text-primary ">Date :</h4>
              <p className="text-secondary md:leading-none  font-semibold font-poppins text-xl md:text-lg ml-7 md:ml-0">
                {eventData.date}
              </p>
            </div>
            <div className="flex flex-row md:flex-col h-[6vh] md:h-[13vh] justify-between md:justify-between">
              <h4 className="text-xl font-semibold text-primary ">
                Location :
              </h4>
              <p className="text-secondary md:leading-none  font-semibold font-poppins text-xl md:text-lg ml-7 md:ml-0">
                {eventData.location}
              </p>
            </div>
            <div className="flex flex-row md:flex-col h-[6vh] md:h-[13vh] justify-between md:justify-between">
              <h4 className="text-xl font-semibold text-primary ">Time :</h4>
              <p className="text-secondary md:leading-none  font-semibold font-poppins text-xl md:text-lg ml-7 md:ml-0">
                {eventData.time}
              </p>
            </div>
            <div className="flex flex-row md:flex-col h-[6vh] md:h-[13vh] justify-between md:justify-between">
              <h4 className="text-xl font-semibold text-primary">
                Registration Fees :
              </h4>
              <p className="flex items-start md:items-end">
                <span
                  className="text-secondary md:leading-none font-semibold font-poppins text-xl md:text-lg ml-7 md:ml-0"
                  dangerouslySetInnerHTML={{ __html: eventData.price }}
                ></span>
                {eventData.price !== "FREE" ? (
                  eventData.team ? (
                    <span className="text-secondary md:leading-none text-xl font-semibold">
                      &nbsp;/Team
                    </span>
                  ) : (
                    <span className="text-secondary md:leading-none text-xl font-semibold">
                      &nbsp;/Head
                    </span>
                  )
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
          <div className="flex md:flex-col md:pl-[15vw] justify-between mt-[100vw] md:mt-0">
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
            <h1 className="py-[10vw] text-5xl md:text-9xl text-primary font-poppins font-semibold -tracking-widest">
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
                {eventData.speaker_tagline}:
              </h4>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: eventData.speaker_content }}
              ></p>
            </div>
          </div>
        </>
      )}
      <div className="flex w-full px-2 flex-col md:flex-row ">
        <h1 className="py-[10vw] text-5xl md:text-9xl text-primary font-poppins font-semibold -tracking-widest">
          About <br /> The Event
        </h1>
        <h2 className="ml-auto text-right my-auto leading-[0.8] pt-0 md:pt-11 text-primary text-[10rem] md:text-[20rem] font-morganite">
          {eventData.speaker ? "02" : "01"}
        </h2>
      </div>
      <div className="-mt-[9%] text-primary md:mt-0 px-2 flex flex-col md:flex-row justify-center w-full text-lg md:px-[calc((100vw-9.375rem)*2/14+1.875rem)]">
        <div
          id="text-section"
          className="md:w-2/5 pr-[30%] md:pr-[calc((100vw-9.375rem)*1/14+.625rem)]"
        >
          <h4 className="font-semibold pb-10 text-xl md:text-2xl leading-[1.05] text-secondary">
            {eventData.event_tagline}:
          </h4>
        </div>
        <div className="max-w-full  w-[460px] object-cover font-poppins">
          <p
            className="text-lg "
            dangerouslySetInnerHTML={{ __html: eventData.event_content }}
          ></p>
        </div>
      </div>
    </div>
  );
}
