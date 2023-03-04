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
// import FollowUs from "../components/FollowUs";
import CardButton from "../components/CardButton";

export default class HomePage extends Component {
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
        <Hero />
        <AboutUs rippleRef={this.props.rippleRef} />
        <div className="card">
          <EventsHome rippleRef={this.props.rippleRef} />
        </div>
        <div className="card">
          <Workshop rippleRef={this.props.rippleRef} />
        </div>
        <div className="card">
          <SpotLight />
        </div>
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
        {/* <div className="card"><Sponsors /></div> */}
        {/* <ContactUs /> */}
      </div>
    );
  }
}
