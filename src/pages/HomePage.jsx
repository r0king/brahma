import React, { Component } from "react";
// import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import SpotLight from "../components/SpotLight";
import AboutUs from "../components/AboutUs";
// import Highlight from "../components/Highlight";
import EventsHome from "../components/EventsHome";
import "./HomePage.css";
import Workshop from "../components/Workshop";
// import Sponsors from "../components/Sponsors";
import MarqueeScroll from "../components/MarqueeScroll";
import CardButton from "../components/CardButton";
import LoadingIcons from "react-loading-icons";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount = () => {
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
      this.setState({
        loading: false,
      });
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener("touchmove", preventDefault, wheelOpt);
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    }, 1000);
  };
  render() {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    cards.forEach((card) => {
      observer.observe(card);
    });

    const handleClick = (name) => {
      // toggle circle ripple
      this.props.rippleRef.current.classList.toggle("circle-ripple");
      // after timeout of 1.5 sec
      setTimeout(() => {
        window.location.pathname = `/${name}`;
      }, 1500);
    };
    return (
      <div className="bg-accent text-primary overflow-x-clip transition-all duration-500">
        <div
          style={{
            position: "fixed",
          }}
          className={`bg-accent z-[999] h-screen w-screen flex flex-col justify-center items-center ${
            this.state.loading ? "" : "hidden"
          }`}
        >
          <LoadingIcons.Puff
            stroke="#d35c39"
            strokeOpacity={1}
            height={"3.5rem"}
            className="w-20 h-20"
          />
          <div className="flex font-poppins font-semibold pt-5 justify-center text-center text-pri-color">
            &nbsp;&nbsp;Loading..
          </div>
        </div>
        <Hero />
        <AboutUs rippleRef={this.props.rippleRef} />
        <EventsHome rippleRef={this.props.rippleRef} />
        <Workshop rippleRef={this.props.rippleRef} />
        <SpotLight />
        <div className="h-[35vh] mt-32">
          <CardButton
            onClick={() => {
              handleClick("schedule");
            }}
            text={{ head: "View", tail: "Schedule", caption: "Speakers" }}
            huge={true}
          />
        </div>
        <MarqueeScroll />
      </div>
    );
  }
}
