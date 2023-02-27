import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import HomePage from "./pages/HomePage";
import Faq from "./pages/FAQ/Faq";
import Event from "./pages/Event/Event";
import Schedule from "./pages/Schedule/Schedule";

import "./App.css";
import AllEvents from "./components/AllEvents";
import NavBar from "./components/NavBar";
import Sponsors from "./components/Sponsors";

function App() {
  const [isLoading, setLoading] = useState(true); // add a loading state

  const rippleRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = "var(--color-accent)";
    setTimeout(() => {
      setLoading(false); // set the loading state to false
    }, 1500);
  }, [isLoading]);

  return (
    <>
      <div
        className={`fixed z-50 h-screen w-screen justify-center items-center flex ${
          !isLoading && "hidden "
        }`}
      >
        <div
          ref={rippleRef}
          className="circle-ripple-loading isLoading &&"
        ></div>
      </div>
      <div ref={rootRef} className="load-to-view">
        <ParallaxProvider>
          <NavBar />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/faq" element={<Faq />} />
              <Route exact path="/schedule" element={<Schedule />} />
              <Route exact path="/events" element={<AllEvents />} />
              <Route exact path="/event/:eventId" element={<Event />} />
            </Routes>
          </BrowserRouter>
          <Sponsors />
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;
