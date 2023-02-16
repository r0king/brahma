import React, { Component } from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import NavBar from "../components/NavBar";

export default class HomePage extends Component {
  render() {
    return (
      <div className="bg-acc-color">
        <NavBar />
        <Hero />
        <Highlights />
      </div>
    );
  }
}
