import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardButton from "../../components/CardButton";
import eventsData from "./events.json";
import posterImg from "../../assets/images/pic6.jpeg";
import { Parallax } from "react-scroll-parallax";
export default function Event() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    setEventData(eventsData[eventId]);
  }, []);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  // return (
  //   <div>
  //     <h1>{eventData.name}</h1>
  //     <p>Date: {eventData.date}</p>
  //     <p>Location: {eventData.location}</p>
  //   </div>
  // );
  return (
    <div className="font-poppins">
      <div className="relative text-pri-color">
        <div className="md:h-[500px] md:flex ">
          <h3
            className="text-sec-color self-end font-semibold font-poppins text-4xl md:text-[3.14rem] mt-auto
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
          >
            How To Create & Sell Digital Collectibles With No Code
          </h3>
        </div>
        <div className="flex flex-col md:flex-row relative md:static">
          <div className="flex flex-row w-full justify-between absolute md:static gap-2 p-2 md:gap-10 md:pl-5 z-10">
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-[10px] md:text-xs font-medium">Type</h4>
              <p className="text-sec-color  leading-none font-semibold font-poppins text-base md:text-xl ">
                Design
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-[10px] md:text-xs font-medium">Date</h4>
              <p className="text-sec-color leading-none  font-semibold font-poppins text-base md:text-xl ">
                Wed.3rd
                <br />
                09:00 -> 16:00
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-[10px] md:text-xs font-medium">Location</h4>
              <p className="text-sec-color leading-none  font-semibold font-poppins text-base md:text-xl ">
                Level 100-North
                <br />
                Building (MTCC)
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-[10px] md:text-xs font-medium">Price</h4>
              <p className="text-sec-color leading-none  font-semibold font-poppins text-base md:text-xl ">
                Starting at $323
              </p>
            </div>
          </div>
          <img
            src={posterImg}
            alt=""
            srcset=""
            className="max-w-full md:absolute w-[460px] aspect-square object-cover rounded-tr-[20%] my-5
             relative right-[50%] md:left-[33%] md:top-0 "
          />
          <div className="flex md:flex-col w-full justify-between ">
            <div className="ml-auto md:mr-2 aspect-[9/3] w-full md:w-[calc((100vw-9.375rem)*3/14+1.875rem)]">
              <CardButton
                text={{ head: "Get", tail: "Tickets", caption: "Booking" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full px-2 flex-col md:flex-row ">
        <h1 className="py-[10vw] text-5xl md:text-9xl text-sec-color font-poppins font-semibold -tracking-widest">
          Speaker
        </h1>
        <h2 className="ml-auto text-right my-auto leading-[0.8] pt-11 text-pri-color text-[10rem] md:text-[20rem] font-morganite">
          01
        </h2>
      </div>
      <div className="-mt-[20%] md:mt-0 px-2 flex flex-col md:flex-row justify-center w-full text-lg md:px-[calc((100vw-9.375rem)*2/14+1.875rem)]">
        <div
          id="text-section"
          className="md:w-2/5 pr-[30%] md:pr-[calc((100vw-9.375rem)*1/14+.625rem)]"
        >
          <h4 className="font-semibold pb-10 leading-[1.05]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe
            nam amet laborum REM natus
          </h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            fuga laborum quia consectetur inventore dicta illo quo aspernatur
            sit, mollitia nostrum quam delectus quas quae eius animi labore, ex
            aliquam? Consequatur soluta itaque vitae nemo odio neque velit
            commodi nihil beatae sint culpa voluptas numquam, consectetur a illo
            porro amet! Dignissimos provident tempore debitis quas numquam
            labore vitae quis qui. Quaerat suscipit officia iusto aspernatur
            commodi consequatur doloribus molestiae vero repellat. In,
            laudantium quam asperiores tempore exercitationem quaerat veniam
            debitis, dignissimos nulla illum dicta doloribus, molestias
            laboriosam numquam consequatur animi.
          </p>
        </div>
        <div className="">
          <img
            src={posterImg}
            alt=""
            srcset=""
            className="max-w-full w-[460px] aspect-square object-cover rounded-tr-[20%] my-5"
          />
        </div>
      </div>

      <div className="flex w-full px-2 flex-col md:flex-row ">
        <h1 className="py-[10vw] text-5xl md:text-9xl text-sec-color font-poppins font-semibold -tracking-widest">
          About <br /> The Event
        </h1>
        <h2 className="ml-auto text-right my-auto leading-[0.8] pt-11 text-pri-color text-[10rem] md:text-[20rem] font-morganite">
          02
        </h2>
      </div>
      <div className="-mt-[20%] md:mt-0 px-2 flex flex-col md:flex-row justify-center w-full text-lg md:px-[calc((100vw-9.375rem)*2/14+1.875rem)]">
        <div
          id="text-section"
          className="md:w-2/5 pr-[30%] md:pr-[calc((100vw-9.375rem)*1/14+.625rem)]"
        >
          <h4 className="font-semibold pb-10 leading-[1.05]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe
            nam amet laborum REM natus
          </h4>
        </div>
        <div className="max-w-full w-[460px] aspect-square object-cover rounded-tr-[20%]">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            fuga laborum quia consectetur inventore dicta illo quo aspernatur
            sit, mollitia nostrum quam delectus quas quae eius animi labore, ex
            aliquam? Consequatur soluta itaque vitae nemo odio neque velit
            commodi nihil beatae sint culpa voluptas numquam, consectetur a illo
            porro amet! Dignissimos provident tempore debitis quas numquam
            labore vitae quis qui. Quaerat suscipit officia iusto aspernatur
            commodi consequatur doloribus molestiae vero repellat. In,
            laudantium quam asperiores tempore exercitationem quaerat veniam
            debitis, dignissimos nulla illum dicta doloribus, molestias
            laboriosam numquam consequatur animi.
          </p>
        </div>
      </div>
    </div>
  );
}
