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
import ContactUs from "./components/ContactUs";
import FollowUs from "./components/FollowUs";

function App() {
  const headings = document.querySelectorAll("h1");
  const paragraphs = document.querySelectorAll("p");
  const listItems = document.querySelectorAll("ul");
  const buttons = document.querySelectorAll("button");
  const cards = document.querySelectorAll("card");
  // const images = document.querySelectorAll("img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  });

  headings.forEach((heading) => {
    observer.observe(heading);
  });

  paragraphs.forEach((paragraph) => {
    observer.observe(paragraph);
  });

  listItems.forEach((listItem) => {
    observer.observe(listItem);
  });

  buttons.forEach((button) => {
    observer.observe(button);
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
  // images.forEach((img) => {
  //   observer.observe(img);
  // });
  const [isLoading, setLoading] = useState(true); // add a loading state

  const rippleRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme === undefined || theme === null) {
      localStorage.setItem("theme", JSON.stringify("dark"));
    }

    setTimeout(() => {
      setLoading(false); // set the loading state to false
    }, 1000);
  }, [isLoading]);

  return (
    <>
      <div
        className={`z-[90] fixed bottom-0 left-0 ${isLoading && "hidden"}`}
        ref={rippleRef}
      ></div>
      <div ref={rootRef} className="bg-accent">
        <ParallaxProvider>
          <NavBar rippleRef={rippleRef} />
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
          <ContactUs />
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;
