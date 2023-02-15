import React, { Component } from "react";
import CountDown from "../components/CountDown";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
// import NavBar from "../components/NavBar";
import NavBar from "../components/Navbar";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Highlights />
        {/* FIX(gokul): this countdown overlaps with other components */}

        {/* <CountDown /> */}
      </div>
    );
  }
}
