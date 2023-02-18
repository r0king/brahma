import React, { Component } from "react";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Highlights from "../components/Highlights";
import Highlight from "../components/Highlight";
import EventsHome from "../components/EventsHome";
import "./HomePage.css"

export default class HomePage extends Component {
  render() {
    return (
      <div className="text-pri-color ">
        <NavBar />
        <Hero />
        <Highlights />
        {/* <Highlight /> */}
        <EventsHome />
        <ContactUs />
      </div>
    );
  }
}
