import "./App.css";
import "animate.css/animate.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingIcons from "react-loading-icons";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import EventsHome from "./components/EventsHome";

function App() {
  const [loading, setLoading] = useState(true);

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
    }, 3000);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
        }}
        className={`bg-acc-color z-[999] h-screen w-screen flex flex-col justify-center items-center ${
          !loading && "hidden"
        }`}
      >
        <LoadingIcons.Puff
          stroke="#d35c39"
          strokeOpacity={1}
          height={"3.5rem"}
          className="w-20 h-20"
        />
        <div className="flex font-poppins font-semibold pt-5 justify-center text-center text-pri-color">&nbsp;&nbsp;Loading..</div>
      </div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/events" element={<EventsHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
