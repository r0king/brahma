import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import HomePage from "./pages/HomePage";
import Faq from "./pages/FAQ/Faq";
import Schedule from "./pages/Schedule/Schedule";
import Event from "./pages/Event/Event";

import "./App.css";
import AllEvents from "./components/AllEvents";
import NavBar from "./components/NavBar";

function App() {
  const [isLoading, setLoading] = useState(true); // add a loading state

  const rippleRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = "var(--color-accent)";
    setTimeout(() => {
      setLoading(false); // set the loading state to false
    }, 3500);


  }, [isLoading]);


  // ---------------------------------------
  const [showAnimation, setShowAnimation] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* <div className={`fixed z-50   h-screen w-screen top-0 left-0 justify-center items-center flex ${!isLoading && "hidden"}   `}>
        <div
          ref={rippleRef}
          className=" fullscreen-fade isLoading &&  "
        >
        </div>

      </div> */}

      <div id="anidiv"
        ref={rippleRef}
        className={`fixed z-50 h-screen w-screen top-0 left-0 justify-start items-end flex hidden   `}>
        <div
        />
      </div>
      {/* <div
        className={`fixed z-50 h-screen w-screen top-0 left-0  justify-end items-start flex  ${!isLoading && "hidden  "
          }`}
      >       <div
        ref={rippleRef}
        className=" circle-ripple-loading  isLoading && "
      ></div>
      </div> */}
      <div ref={rootRef} className="load">
        <ParallaxProvider>
          <NavBar rippleRef={rippleRef}/>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/faq" element={<Faq />} />
              <Route exact path="/schedule" element={<Schedule />} />
              <Route exact path="/events" element={<AllEvents />} />
              <Route exact path="/event/:eventId" element={<Event />} />
            </Routes>
          </BrowserRouter>
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;
