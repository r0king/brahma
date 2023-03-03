import { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import CardButton from "../../components/CardButton";
import eventsData from "./events.json";
import posterImg from "../../assets/images/pic6.jpeg";
// import { Parallax } from "react-scroll-parallax";

const isUserTypingReducer = (state, action) => {
  switch (action.field) {
    case 'title':
      return {
        ...state,
        title: !state.title
      }
    case 'type':
      return {
        ...state,
        type: !state.type,
      }
    case 'date':
      return {
        ...state,
        date: !state.date,
      }
    case 'location':
      return {
        ...state,
        location: !state.location,
      }
    case 'price':
      return {
        ...state,
        price: !state.price,
      }
    case 'speaker_title':
      return {
        ...state,
        speaker_title: !state.speaker_title,
      }
    case 'speaker_description':
      return {
        ...state,
        speaker_description: !state.speaker_description,
      }
    case 'about_title':
      return {
        ...state,
        about_title: !state.about_title,
      }
    case 'about_description':
      return {
        ...state,
        about_description: !state.about_description,
      }
    case 'image_url':
      return {
        ...state,
        image_url: !state.image_url,
      }
  }
}


export default function EventEdit() {
  const { eventId } = useParams();
  const [showPreview, setShowPreview] = useState(false)
  const [isUserTyping, setUserTyping] = useReducer(isUserTypingReducer, {
    title: false,
    type: false,
    date: false,
    location: false,
    price: false,
    speaker_title: false,
    speaker_description: false,
    about_title: false,
    about_description: false,
    image_url: false

  })
  const [eventData, setEventData] = useState({
    title: "",
    type: "",
    date: "",
    location: "",
    price: "",
    speaker_title: "",
    speaker_description: "",
    about_title: "",
    about_description: "",
    image_url: ""
  });

  const grabValuesFromTags = () => {
    setEventData({
      title: document.getElementById('event_title').innerText,
      type: document.getElementById('event_type').innerText,
      date: document.getElementById('event_date').innerText,
      location: document.getElementById('event_location').innerText,
      price: document.getElementById('event_price').innerText,
      speaker_title: document.getElementById('event_speaker_title').innerText,
      speaker_description: document.getElementById('event_speaker_description').innerText,
      about_title: document.getElementById('event_about_title').innerText,
      about_description: document.getElementById('event_about_description').innerText,
      image_url: ""
    });
  }
  useEffect(() => {
    grabValuesFromTags();

  }, [])

  // useEffect(() => {
  //   setEventData(eventsData[eventId]);
  // }, [eventId]);

  const sendToBackend = () => {

    for (let key in isUserTyping) {
      if (isUserTyping[key] == true) {
        alert("Warning: Make sure to click on update before submiting!!!")
        return;
      }
    }
    const payload = JSON.stringify(eventData)
    alert(payload)
  }

  useEffect(() => {
    console.log(eventData)
  }, [eventData])

  const updateEventData = (jsonfield, event) => {
    const value = ""
    const img_value = ""
    console.log(value)
    if (jsonfield === "title")
      setEventData({
        ...eventData,
        title: document.getElementById('event_title').innerText,
      })
    else if (jsonfield === "type")
      setEventData({
        ...eventData,
        type: document.getElementById('event_type').innerText,
      })
    else if (jsonfield === "date")
      setEventData({
        ...eventData,
        date: document.getElementById('event_date').innerText,
      })
    else if (jsonfield === "location")
      setEventData({
        ...eventData,
        location: document.getElementById('event_location').innerText,
      })
    else if (jsonfield === "price")
      setEventData({
        ...eventData,
        price: document.getElementById('event_price').innerText,
      })
    else if (jsonfield === "speaker_title")
      setEventData({
        ...eventData,
        speaker_title: document.getElementById('event_speaker_title').innerText,
      })
    else if (jsonfield === "speaker_description")
      setEventData({
        ...eventData,
        speaker_description: document.getElementById('event_speaker_description').innerText,
      })
    else if (jsonfield === "about_title")
      setEventData({
        ...eventData,
        about_title: document.getElementById('event_about_title').innerText,
      })
    else if (jsonfield === "about_description")
      setEventData({
        ...eventData,
        about_description: document.getElementById('event_about_description').innerText,
      })
    else if (jsonfield === "image_url")
      setEventData({
        ...eventData,
        image_url: event.target.value
      })
    setUserTyping({ field: jsonfield })
  }


  if (!eventData) {
    return <div>Loading...</div>;
  }



  return (
    <>
      <div className="font-poppins">
        < div className="relative text-primary" >
          <div className="md:h-[500px] md:flex ">
            <h3
              id='event_title'
              contentEditable onClick={() => setUserTyping({ field: "title" })}
              className="text-secondary self-end font-semibold font-poppins text-4xl md:text-[3.14rem] mt-auto
           w-full leading-[0.9] tracking-tighter p-2 md:p-0 md:w-[calc((100vw-9.375rem)*4/14+2.5rem)] pb-[5vw] md:ml-3 md:leading-none mr-auto"
            >
              How To Create & Sell Digital Collectibles With No Code
            </h3>
          </div>
          {
            isUserTyping.title == true ?
              <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("title")}> Update title</div>
              : <></>
          }
          <div className="flex flex-col md:flex-row relative md:static">
            <div className="flex flex-row w-full justify-between absolute md:static gap-2 p-2 md:gap-10 md:pl-5 z-10">
              <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
                <h4 className="text-[10px] md:text-xs font-medium">Type</h4>
                <p id='event_type' contentEditable onClick={() => setUserTyping({ field: "type" })} className="text-secondary  leading-none font-semibold font-poppins text-base md:text-xl ">
                  Design
                </p>
                {
                  isUserTyping.type == true ?
                    <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("type")}> Update design</div>
                    : <></>
                }
              </div>
              <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
                <h4 className="text-[10px] md:text-xs font-medium">Date</h4>
                <p id='event_date' contentEditable onClick={e => setUserTyping({ field: "date" })} className="text-secondary leading-none  font-semibold font-poppins text-base md:text-xl ">
                  Wed.3rd
                  <br />
                  09:00 - 16:00
                </p>
                {
                  isUserTyping.date == true ?
                    <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("date")}> Update date</div>
                    : <></>
                }
              </div>
              <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
                <h4 className="text-[10px] md:text-xs font-medium">Location</h4>
                <p id='event_location' contentEditable onClick={() => setUserTyping({ field: "location" })} className="text-secondary leading-none  font-semibold font-poppins text-base md:text-xl ">
                  Level 100-North
                  <br />
                  Building (MTCC)
                </p>
                {
                  isUserTyping.location == true ?
                    <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("location")}> Update location</div>
                    : <></>
                }
              </div>
              <div className="flex flex-col h-[17vh] md:h-[13vh] justify-between">
                <h4 className="text-[10px] md:text-xs font-medium">Price</h4>
                <p id='event_price' className="text-secondary leading-none  font-semibold font-poppins text-base md:text-xl ">
                  Starting at $<label onClick={() => setUserTyping({ field: "price" })} contentEditable >323</label>
                </p>
                {
                  isUserTyping.price == true ?
                    <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("price")}> Update price</div>
                    : <></>
                }
              </div>
            </div>
            <div>
              {eventData.image_url !== "" ?
                <img
                  src={eventData.image_url}
                  alt=""
                  className="max-w-full md:absolute w-[460px] aspect-square object-cover rounded-tr-[20%] my-5
              relative right-[50%] md:left-[33%] md:top-0 "
                /> : <></>
              }

              <div>
                <label>Enter image url: </label>
                <input type="text" class='text-blue-800 bg-blue-200' onChange={(e => updateEventData("image_url", e))} />
              </div>

            </div>
            <div className="flex md:flex-col w-full justify-between ">
              <button className="ml-auto md:mr-2 aspect-[9/3] w-full md:w-[calc((100vw-9.375rem)*3/14+1.875rem)]">
                <CardButton
                  text={{ head: "Get", tail: "Tickets", caption: "Booking" }}
                />
              </button>
            </div>
          </div>
        </div >
        <div className="flex w-full px-2 flex-col md:flex-row ">
          <h1 className="py-[10vw] text-5xl md:text-9xl text-secondary font-poppins font-semibold -tracking-widest">
            Speaker
          </h1>
          <h2 contentEditable className="ml-auto text-right my-auto leading-[0.8] pt-11 text-primary text-[10rem] md:text-[20rem] font-morganite">
            01
          </h2>
        </div>
        <div className="-mt-[20%] md:mt-0 px-2 flex flex-col md:flex-row justify-center w-full text-lg md:px-[calc((100vw-9.375rem)*2/14+1.875rem)]">
          <div
            id="text-section"
            className="md:w-2/5 pr-[30%] md:pr-[calc((100vw-9.375rem)*1/14+.625rem)]"
          >
            <h4 id='event_speaker_title' onClick={() => setUserTyping({ field: 'speaker_title' })} contentEditable className="font-semibold pb-10 leading-[1.05]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe
              nam amet laborum REM natus
            </h4>
            {
              isUserTyping.speaker_title == true ?
                <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("speaker_title")}> Update speaker title</div>
                : <></>
            }
            <p id='event_speaker_description' onClick={() => setUserTyping({ field: 'speaker_description' })} contentEditable className="text-sm">
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
            {
              isUserTyping.speaker_description == true ?
                <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("speaker_description")}> Update speaker desc</div>
                : <></>
            }
          </div>
          <div className="">
            {eventData.image_url !== "" ?
              <img
                src={eventData.image_url}
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
            <h4 id='event_about_title' onClick={() => setUserTyping({ field: 'about_title' })} contentEditable className="font-semibold pb-10 leading-[1.05]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum saepe
              nam amet laborum REM natus
            </h4>
            {
              isUserTyping.about_title == true ?
                <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("about_title")}> Update about title</div>
                : <></>
            }
          </div>
          <div className="max-w-full w-[460px] aspect-square object-cover rounded-tr-[20%]">
            <p id='event_about_description' onClick={() => setUserTyping({ field: 'about_description' })} contentEditable className="text-sm">
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
            {
              isUserTyping.about_description == true ?
                <div class='bg-red-500 w-28 p-2 text-white h-18 mx-4' onClick={() => updateEventData("about_description")}> Update about desc</div>
                : <></>
            }
          </div>
        </div>

        <div onClick={sendToBackend} class="ml-24 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
          Submit
        </div>
        :
        <div>

        </div>

      </div >
    </>
  );
}
