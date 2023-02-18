import React, { Component } from "react";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
// import SpotLight from "../components/SpotLight";
import NavBar from "../components/NavBar";
import Highlights from "../components/Highlights";
import EventsHome from "../components/EventsHome";
import "./HomePage.css"
import Workshop from "../components/Workshop";

export default class HomePage extends Component {
  render() {
    return (
      <div className="text-pri-color ">
        <NavBar />
        <Hero />
        <Highlights />
        {/* <SpotLight/> */}
        <EventsHome />
        <Workshop/>
        <ContactUs />
      </div>
    );
  }
}
