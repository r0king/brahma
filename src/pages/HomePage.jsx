import React, { Component } from "react";
// import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import SpotLight from "../components/SpotLight";
import NavBar from "../components/NavBar";
import Highlights from "../components/Highlights";
// import Highlight from "../components/Highlight";
import EventsHome from "../components/EventsHome";
import "./HomePage.css";
import Workshop from "../components/Workshop";
import Sponsors from "../components/Sponsors";
import Scroll from "../components/Scroll";
import FollowUs from "../components/FollowUs";

export default class HomePage extends Component {
  compponentDidMount() {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    // Set the scrolling behavior to smooth
    document.documentElement.style.scrollBehavior = "smooth";

    // Add an event listener to the window for scrolling
    window.addEventListener("scroll", () => {
      // Calculate the current scroll position as a percentage of the document height
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = scrollTop / (documentHeight - window.innerHeight);

      // Modify the scrolling speed by adjusting the scroll-behavior CSS property
      const speed = 0; // adjust this value to change the speed
      document.documentElement.style.scrollBehavior = `smooth ${
        speed * (1 - scrollPercent)
      }`;
    });
  }
  render() {
    return (
      <div className="bg-accent text-primary overflow-x-clip">
        <NavBar />
        <Hero />
        <Highlights />
        <EventsHome />
        <Workshop />
        <SpotLight/>
        <Scroll/>
        <FollowUs />
        <Sponsors />
        {/* <ContactUs /> */}
      </div>
    );
  }
}
