import React, { Component } from "react";
import CountDown from "../componets/CountDown";
import Hero from "../componets/Hero";
import NavBar from "../componets/NavBar";

export default class HomePage extends Component {
  render() {
    return (
      <div className="bg-acc-color">
        {/* <NavBar /> */}
        <Hero />
      </div>
    );
  }
}
