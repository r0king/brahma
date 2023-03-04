import React, { useEffect, useState } from "react";
import CardButton from "../../components/CardButton";
import eventsData from "./events.json";
import posterImg from "../../assets/images/pic6.jpeg";

export default function EventEditable() {
  const eventId = 1;
  const [eventData, setEventData] = useState(null);
  const [imageUrl, setImageUrl] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const heading = document.getElementById("event_heading").innerText;
    const type = document.getElementById("event_type").innerText;
    const date = document.getElementById("event_date").innerText;
    const location = document.getElementById("event_location").innerText;
    const price = document.getElementById("event_price").innerText;
    const speaker_heading = document.getElementById("event_speaker_heading").innerText;
    const speaker_desc = document.getElementById("event_speaker_desc").innerText;
    const about_heading = document.getElementById("event_about_heading").innerText;
    const about_desc = document.getElementById("event_about_desc").innerText;

    const payload = {
      title: heading,
      type: type,
      date: date,
      location: location,
      price: price,
      speaker_heading: speaker_heading,
      speaker_description: speaker_desc,
      about_heading: about_heading,
      about_description: about_desc,
      image_url: imageUrl,
    }

    alert(JSON.stringify(payload))

  };
  useEffect(() => {
    setEventData(eventsData[eventId]);
  }, [eventId]);

  if (!eventData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="font-poppins">
      <div className="relative text-primary">
        <div className="md:h-[500px] md:flex ">
          <h3
            id="event_heading"
            contentEditable
            className="text-secondary self-end font-semibold font-poppins text-4xl md:text-[3.14rem] mt-auto
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
          >
            How To Create & Sell Digital Collectibles With No Code
          </h3>
        </div>
        <div className="flex flex-col md:flex-row relative md:static">
          <div className="flex flex-row w-full justify-between absolute md:static gap-2 p-2 md:gap-10 md:pl-5 z-10">
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-[10px] md:text-xs font-medium">Type</h4>
              <p id='event_type' contentEditable className="text-secondary  leading-none font-semibold font-poppins text-base md:text-xl ">
                Design
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-[10px] md:text-xs font-medium">Date</h4>
              <p id='event_date' contentEditable className="text-secondary leading-none  font-semibold font-poppins text-base md:text-xl ">
                Wed.3rd
                <br />
                09:00 - 16:00
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-[10px] md:text-xs font-medium">Location</h4>
              <p id='event_location' contentEditable className="text-secondary leading-none  font-semibold font-poppins text-base md:text-xl ">
                Level 100-North
                <br />
                Building (MTCC)
              </p>
            </div>
            <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
              <h4 className="text-[10px] md:text-xs font-medium">Price</h4>
              <p id='event_price' contentEditable className="text-secondary leading-none  font-semibold font-poppins text-base md:text-xl ">
                Starting at $323
              </p>
            </div>
          </div>
          <img
            src={imageUrl}
            alt=""
            className="max-w-full md:absolute w-[460px] aspect-square object-cover rounded-tr-[20%] my-5
             relative right-[50%] md:left-[33%] md:top-0 "
          />
          <div>
            <label>Enter image url: </label>
            <input id='event_image_url' onChange={(e) => setImageUrl(e.target.value)} type="text" class='text-blue-800 bg-blue-200' />
          </div>

          <div className="flex md:flex-col w-full justify-between ">
            <button className="ml-auto md:mr-2 aspect-[9/3] w-full md:w-[calc((100vw-9.375rem)*3/14+1.875rem)]">
              <CardButton
                text={{ head: "Get", tail: "Tickets", caption: "Booking" }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full px-2 flex-col md:flex-row ">
        <h1 className="py-[10vw] text-5xl md:text-9xl text-secondary font-poppins font-semibold -tracking-widest">
          Speaker
        </h1>
        <h2 className="ml-auto text-right my-auto leading-[0.8] pt-11 text-primary text-[10rem] md:text-[20rem] font-morganite">
          01
        </h2>
      </div>
      <div className="-mt-[20%] md:mt-0 px-2 flex flex-col md:flex-row justify-center w-full text-lg md:px-[calc((100vw-9.375rem)*2/14+1.875rem)]">
        <div
          id="text-section"
          className="md:w-2/5 pr-[30%] md:pr-[calc((100vw-9.375rem)*1/14+.625rem)]"
        >
          <h4 contentEditable id='event_speaker_heading' className="font-semibold pb-10 leading-[1.05]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            saepe nam amet laborum REM natus
          </h4>
          <p contentEditable id='event_speaker_desc' className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            fuga laborum quia consectetur inventore dicta illo quo aspernatur
            sit, mollitia nostrum quam delectus quas quae eius animi labore,
            ex aliquam? Consequatur soluta itaque vitae nemo odio neque velit
            commodi nihil beatae sint culpa voluptas numquam, consectetur a
            illo porro amet! Dignissimos provident tempore debitis quas
            numquam labore vitae quis qui. Quaerat suscipit officia iusto
            aspernatur commodi consequatur doloribus molestiae vero repellat.
            In, laudantium quam asperiores tempore exercitationem quaerat
            veniam debitis, dignissimos nulla illum dicta doloribus, molestias
            laboriosam numquam consequatur animi.
          </p>
        </div>
        <div className="">
          {imageUrl !== "" ?
            <img
              src={imageUrl}
              alt=""
              className="max-w-full w-[460px] aspect-square object-cover rounded-tr-[20%] my-5"
            />
            :
            <div class='bg-gray-200 h-8'>
              <label class='m-8 text-bold text-blue-800'> Provide an image url above </label>
            </div>
          }
        </div>
      </div>

      <div className="flex w-full px-2 flex-col md:flex-row ">
        <h1 className="py-[10vw] text-5xl md:text-9xl text-secondary font-poppins font-semibold -tracking-widest">
          About <br /> The Event
        </h1>
        <h2 className="ml-auto text-right my-auto leading-[0.8] pt-11 text-primary text-[10rem] md:text-[20rem] font-morganite">
          02
        </h2>
      </div>
      <div className="-mt-[20%] md:mt-0 px-2 flex flex-col md:flex-row justify-center w-full text-lg md:px-[calc((100vw-9.375rem)*2/14+1.875rem)]">
        <div
          id="text-section"
          className="md:w-2/5 pr-[30%] md:pr-[calc((100vw-9.375rem)*1/14+.625rem)]"
        >
          <h4 id='event_about_heading' contentEditable className="font-semibold pb-10 leading-[1.05]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            saepe nam amet laborum REM natus
          </h4>
        </div>
        <div id='event_about_desc' contentEditable className="max-w-full w-[460px] aspect-square object-cover rounded-tr-[20%]">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            fuga laborum quia consectetur inventore dicta illo quo aspernatur
            sit, mollitia nostrum quam delectus quas quae eius animi labore,
            ex aliquam? Consequatur soluta itaque vitae nemo odio neque velit
            commodi nihil beatae sint culpa voluptas numquam, consectetur a
            illo porro amet! Dignissimos provident tempore debitis quas
            numquam labore vitae quis qui. Quaerat suscipit officia iusto
            aspernatur commodi consequatur doloribus molestiae vero repellat.
            In, laudantium quam asperiores tempore exercitationem quaerat
            veniam debitis, dignissimos nulla illum dicta doloribus, molestias
            laboriosam numquam consequatur animi.
          </p>
        </div>
      </div>
      <div type="submit" class="ml-24 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
        Submit
      </div>
    </div >
  );
}
