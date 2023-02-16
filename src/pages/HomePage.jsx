import React, { Component } from "react";
import CountDown from "../components/CountDown";
import Hero from "../components/Hero";
import Highlight_J from "../components/Highlight_J";
import NavBar from "../components/NavBar";


export default class HomePage extends Component {
  render() {
    return (
      <div className="bg-acc-color">
        {/* <NavBar /> */}
        <Hero />
        <Highlight_J/>
      </div>
    );
  }
}
