import React, { Component } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";

export default class HomePage extends Component {
  render() {
    return (
      <div className="bg-acc-color text-pri-color h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    );
  }
}
