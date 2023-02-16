import React, { Component } from "react";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";

export default class HomePage extends Component {
  render() {
    return (
      <div className="bg-acc-color">
        {/* <NavBar /> */}
        <Hero />
        <ContactUs/>
      </div>
    );
  }
}
