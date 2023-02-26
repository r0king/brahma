import React, { Component } from "react";
// import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import SpotLight from "../components/SpotLight";
import Highlights from "../components/Highlights";
// import Highlight from "../components/Highlight";
import EventsHome from "../components/EventsHome";
import "./HomePage.css";
import Workshop from "../components/Workshop";
import Sponsors from "../components/Sponsors";
import Scroll from "../components/MarqueeScroll";
import FollowUs from "../components/FollowUs";
import CardButton from "../components/CardButton";

export default class HomePage extends Component {
  render() {
    return (
      <div className="bg-accent text-primary overflow-x-clip transition-all duration-500">
        <Hero />
        <Highlights />
        <EventsHome />
        <Workshop />
        <SpotLight />
        <div className="h-[35vh]">
          <CardButton
            text={{ head: "View", tail: "Schedule", caption: "Speakers" }}
            huge={true}
          />
        </div>
        <Scroll />
        <FollowUs />
        <Sponsors />
        {/* <ContactUs /> */}
      </div>
    );
  }
}
