import React, { Component } from "react";

export default class CountDown extends Component {
  constructor(props) {
    super();
    this.time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.state = this.time;

    this.countDownDate = new Date("Mar 29, 2023 00:00:00").getTime();
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
        className="            
            absolute -mt-[10vh] mx-auto w-full
             grid grid-flow-col justify-center md:justify-start gap-5 auto-cols-max
            text-center text-xl bottom-[3%]"
      >
        <div className="flex flex-col md:p-2 md:pb-0 rounded-box text-base text-neutral-content">
          <span className="countdown font-[coign] text-[10vh] font-semibold ">
            <span style={{ "--value": this.state.days }}></span>
          </span>

          <span className="c-button_tag group-hover:text-[#1F1F1F] transition-all">
            days
          </span>
        </div>
        <div className="flex flex-col md:p-2 md:pb-0 rounded-box text-base text-neutral-content">
          <span className="countdown font-[coign] text-[10vh] font-semibold">
            <span style={{ "--value": this.state.hours }}></span>
          </span>
          <span className="c-button_tag group-hover:text-[#1F1F1F] transition-all">
            hours
          </span>
        </div>
        <div className="flex flex-col md:p-2 md:pb-0 rounded-box text-base text-neutral-content">
          <span className="countdown font-[coign] text-[10vh] font-semibold">
            <span style={{ "--value": this.state.minutes }}></span>
          </span>
          <span className="c-button_tag group-hover:text-[#1F1F1F] transition-all">
            min
          </span>
        </div>
        <div className="flex flex-col md:p-2 md:pb-0 rounded-box text-base text-neutral-content">
          <span className="countdown font-[coign] text-[10vh] font-semibold">
            <span style={{ "--value": this.state.seconds }}></span>
          </span>
          <span className="c-button_tag group-hover:text-[#1F1F1F] transition-all">
            sec
          </span>
        </div>
      </div>
    );
  }
}
