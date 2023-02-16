import React, { Component } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
// import Highlights from "../components/Highlights";
// import Highlight from "../components/Highlight";
import EventsHome from "../components/EventsHome";


export default class HomePage extends Component {
  render() {
    return (
      <div className="bg-acc-color text-pri-color ">
        <Navbar />
        <Hero />
        {/* <Highlights /> */}
        {/* <Highlight/> */}
        <EventsHome/>
      </div>
    );
  }
}
