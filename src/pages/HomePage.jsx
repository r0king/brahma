import React, { Component } from "react";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Highlights from "../components/Highlights";
// import Highlight from "../components/Highlight";
import EventsHome from "../components/EventsHome";
import "./HomePage.css"
import Workshop from "../components/Workshop";

export default class HomePage extends Component {
  render() {
    return (
      <div className="text-pri-color ">
        <Navbar />
        <Hero />
        <Workshop/>
        {/* <Highlights /> */}
        {/* <SpotLight/> */}
        <EventsHome />
        <ContactUs />
      </div>
    );
  }
}
