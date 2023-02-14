import React, { Component } from "react";
import CountDown from "../componets/CountDown";
import NavBar from "../componets/NavBar";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CountDown />
      </div>
    );
  }
}
