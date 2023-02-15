import React, { Component } from "react";
import CountDown from "../components/CountDown";
import Hero from "../components/Hero";
import Highlight from "../components/Highlight";
import NavBar from "../components/NavBar";


export default class HomePage extends Component {
  render() {
    return (
      <div className="bg-acc-color">
        {/* <NavBar /> */}
        <Hero />
        <Highlight/>
      </div>
    );
  }
}
