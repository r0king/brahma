import React, { Component } from "react";
import CountDown from "../components/CountDown";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Hero />
                <CountDown />
            </div>
        );
    }
}
