import React, { Component } from "react";
import CountDown from "../components/CountDown";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import NavBar from "../components/NavBar";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Hero />
                {/* FIX(gokul): this countdown overlaps with other components */}
                {/* <CountDown /> */}
            </div>
        );
    }
}

export default HomePage;
