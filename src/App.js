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
// import Sponsors from "./components/Sponsors";
import ContactUs from "./components/ContactUs";
// import FollowUs from "./components/FollowUs";

function App() {
  const today = new Date(),
    hours = today.getHours();
  const headings = document.querySelectorAll("h1");
  const headingh4 = document.querySelectorAll("h4");
  const paragraphs = document.querySelectorAll("p");
  // const listItems = document.querySelectorAll("ul");
  const buttons = document.querySelectorAll("button");
  const cards = document.querySelectorAll("card");
  const images = document.querySelectorAll("img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }
    // only once

    // { threshold: 0.2 }
  );

  headings.forEach((heading) => {
    observer.observe(heading);
  });

  paragraphs.forEach((paragraph) => {
    observer.observe(paragraph);
  });

  // listItems.forEach((listItem) => {
  //   observer.observe(listItem);
  // });

  buttons.forEach((button) => {
    observer.observe(button);
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
  images.forEach((img) => {
    observer.observe(img);
  });
  headingh4.forEach((img) => {
    observer.observe(img);
  });
  const [isLoading, setLoading] = useState(true); // add a loading state

  const rippleRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme === undefined || theme === null) {
      if (hours > 6 && hours < 18) {
        localStorage.setItem("theme", JSON.stringify("light"));
      } else {
        localStorage.setItem("theme", JSON.stringify("dark"));
      }
    }

    setTimeout(() => {
      setLoading(false); // set the loading state to false
    }, 2000);
  }, [isLoading, hours]);

  return (
    <>
      <div
        className={`z-[90] fixed animate-shrinkDown bg-accent border-primary border-[5px] rounded-full bottom-[-120%] left-[-100%] md:left-[-50%] ${isLoading && "h-[250em] w-[250em]"}`}
        ref={rippleRef}
      ></div>
      <div ref={rootRef} className="bg-accent min-h-screen">
        <ParallaxProvider>
          <NavBar rippleRef={rippleRef} />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route
                exact
                path="/"
                element={<HomePage rippleRef={rippleRef} />}
              />
              <Route exact path="/faq" element={<Faq />} />
              <Route
                exact
                path="/schedule"
                element={<Schedule rippleRef={rippleRef} />}
              />
              <Route
                exact
                path="/events"
                element={<AllEvents rippleRef={rippleRef} />}
              />
              <Route exact path="/event/:eventId" element={<Event />} />
              <Route
                path="*"
                element={
                  <>
                    <h1 className="text-left text-primary font-morganite leading-[0.75] py-[5vw] text-[35vw] md:text-[10vw] px-5 uppercase pr-10">
                      Oops, looks like you stumbled upon a page that's as lost
                      as you are.
                    </h1>
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
          {/* <Sponsors /> */}
          <ContactUs />
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;
