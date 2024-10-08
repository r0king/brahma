import React, { Component } from "react";

export default class CountDown extends Component {
  constructor(props) {
    super();
    this.time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      live: false,
    };

    this.state = this.time;

    this.countDownDate = new Date("Mar 30, 2023 09:00:00").getTime();
  }
  calculateNewTime = () => {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = this.countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.time = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    this.setState(this.time);
    // If the count down is finished, write some text
    if (distance < 0) {
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        live: true,
      });
      clearInterval(this.x);
    }
  };
  componentDidMount() {
    this.x = setInterval(this.calculateNewTime, 10);
  }
  render() {
    return (
      <div
        className={`
             h-min py-4 px-[9vw] md:pl-4 md:pr-4 md:pt-3 md:pb-5 rounded-md md:mr-0 md:ml-[5vw] mx-auto md:mx-0 w-fit
             bg-secondary md:rounded-tl-md md:rounded-bl-md md:rounded-br-none  md:rounded-tr-none text-primarycontent
             grid grid-flow-col justify-center md:justify-start gap-5 auto-cols-max
             text-center text-xl group ${this.state.live && "ml-auto mr-8 md:-mr-4"}`}
      >
        {this.state.live ? (
          <h1 className="uppercase pl-2 text-[4vh] md:text-[5vh] md:pl-0 md:p-2 md:pb-0 font-bold text-left ">live now</h1>
        ) : (
          <>
            <div className="flex flex-col font-['Montserrat',sans-serif] md:p-2 md:pb-0 rounded-box text-base">
              <span className="countdown text-[4vh] md:text-[5vh] font-semibold ">
                <span style={{ "--value": this.state.days }}></span>
              </span>

              <span className="c-button_tag group-hover:text-[#1F1F1F] text-xs transition-all">
                days
              </span>
            </div>
            <div className="flex flex-col font-['Montserrat',sans-serif] pl-2 md:pl-0 md:p-2 md:pb-0 rounded-box text-base">
              <span className="countdown text-[4vh] md:text-[5vh] font-semibold">
                <span style={{ "--value": this.state.hours }}></span>
              </span>
              <span className="c-button_tag group-hover:text-[#1F1F1F] text-xs transition-all ">
                hours
              </span>
            </div>
            <div className="flex flex-col font-['Montserrat',sans-serif] pl-2 md:pl-0 md:p-2 md:pb-0 rounded-box text-base">
              <span className="countdown text-[4vh] md:text-[5vh] font-semibold">
                <span style={{ "--value": this.state.minutes }}></span>
              </span>
              <span className="c-button_tag group-hover:text-[#1F1F1F] text-xs transition-all ">
                min
              </span>
            </div>
            <div className="flex flex-col font-['Montserrat',sans-serif] pl-2 md:pl-0 md:p-2 md:pb-0 rounded-box text-base">
              <span className="countdown text-[4vh] md:text-[5vh] font-semibold">
                <span style={{ "--value": this.state.seconds }}></span>
              </span>
              <span className="c-button_tag group-hover:text-[#1F1F1F] text-xs transition-all ">
                sec
              </span>
            </div>
          </>
        )}
      </div>
    );
  }
}
