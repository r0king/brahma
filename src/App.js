import "./App.css";
import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingIcons from "react-loading-icons";
import { useEffect, useRef, useState } from "react";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import CardButton from "./components/CardButton";

function App() {
  const [loading, setLoading] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    function preventDefault(e) {
      e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
            return supportsPassive;
          },
        })
      );
    } catch (e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    // call this to Disable
    function disableScroll() {
      window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
      window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    }

    disableScroll();

    setTimeout(() => {
      setLoading(false);
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener("touchmove", preventDefault, wheelOpt);
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    }, 30);
  }, []);
  const rippleRef = useRef(null);
  return (
    <>
      <div
        style={{
          position: "fixed",
        }}
        className={`bg-black z-[999] h-screen w-screen flex flex-col justify-center items-center ${
          !loading && "hidden"
        }`}
      >
        <LoadingIcons.ThreeDots
          fill="#f0f0f0"
          strokeOpacity={1}
          height={"3.5rem"}
          className="w-20 h-20"
        />
        <div className="flex justify-center text-center ">Loading…</div>
      </div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/test"
            element={
              <div
                className={`h-screen w-screen bg-acc-color justify-center items-center flex ${
                  buttonClicked &&
                  "transform transition-all duration-1000 opacity-0 "
                }`}
              >
                <CardButton
                  onClick={(e) => {
                    const x = e.clientX;
                    const y = e.clientY;

                    if (rippleRef.current) {
                      rippleRef.current.classList.add("circle-ripple");
                      rippleRef.current.style.top = y + "px";
                      rippleRef.current.style.left = x + "px";
                    }
                    setButtonClicked(true);

                    setTimeout(() => {
                      window.location.pathname = "/";
                    }, 800);
                  }}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <div ref={rippleRef} className="fixed"></div>
    </>
  );
}

export default App;
