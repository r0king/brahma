import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CardButton from "./components/CardButton";
// import LoadingIndicator from "./components/LoadingIndicator"; // add a LoadingIndicator component

import "./App.css";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isLoading, setLoading] = useState(true); // add a loading state

  const rippleRef = useRef(null);
  const rootRef = useRef(null);

  const handleButtonClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (rippleRef.current) {
      rippleRef.current.classList.remove("circle-ripple-loading");
      rippleRef.current.classList.remove("hidden");
      rippleRef.current.style.top = y + "px";
      rippleRef.current.style.left = x + "px";
      rippleRef.current.classList.add("fixed");
      rippleRef.current.classList.add("circle-ripple");
    }

    setButtonClicked(true);

    setLoading(true); // set the loading state to true

    setTimeout(() => {
      rippleRef.current.classList.remove("circle-ripple");
      rippleRef.current.classList.add("hidden");
      window.location.pathname = "/test";
    }, 500);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "var(--bg-color)";
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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
