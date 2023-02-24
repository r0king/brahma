import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import HomePage from "./pages/HomePage";
import Faq from "./pages/FAQ/Faq";
import Schedule from "./pages/Schedule/Schedule";

import "./App.css";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  const [isLoading, setLoading] = useState(true); // add a loading state

  const rippleRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = "var(--bg-color)";
    setTimeout(() => {
      setLoading(false); // set the loading state to false
    }, 2500);
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
      <div className={`fixed z-50 bg-white   h-screen w-screen top-0 left-0 justify-center items-center flex ${!isLoading && "hidden"}   `}>
        <div
          ref={rippleRef}
          className=" fullscreen-fade isLoading &&  "
        >
        </div>

      </div>
      <div
        className={`fixed z-50 h-screen w-screen top-0 left-0  justify-end items-start flex  ${!isLoading && "hidden  "
          }`}
      > 

        <div    
          ref={rippleRef}
          className=" circle-ripple-loading  isLoading && "
        > 
        
        
        </div>
      </div>





      <div
        className={`fixed z-50 h-screen w-screen top-0 left-0 justify-start items-end flex ${!isLoading && "hidden "
          }`}
      >

        <div
          ref={rippleRef}
          className=" circle-ripple isLoading &&"
        >


        </div>
      </div>

      


      <div ref={rootRef} className="load-to-view">
        <ParallaxProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/faq" element={<Faq />} />
              <Route exact path="/schedule" element={<Schedule />} />
              <Route exact path="/contact" element={<ContactUs />} />
            </Routes>
          </BrowserRouter>
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;
