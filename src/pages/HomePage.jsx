import React, { Component } from "react";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
 import SpotLight from "../components/SpotLight";
import NavBar from "../components/NavBar";
import Highlights from "../components/Highlights";
// import Highlight from "../components/Highlight";
import EventsHome from "../components/EventsHome";
import "./HomePage.css";
import Workshop from "../components/Workshop";
import CarouselAni from "../components/CarouselAni";
import Sponsors from "../components/Sponsors";
import Scroll from "../components/Scroll";

export default class HomePage extends Component {
  render() {
    return (
      <div className="text-pri-color overflow-x-hidden">
        <NavBar />
        <Hero />
        <Scroll/>
        <Highlights />
        <EventsHome />
        <SpotLight/>
        <CarouselAni />
        <Workshop />
        <Sponsors />
        <ContactUs />
      </div>
    );
  }
}
