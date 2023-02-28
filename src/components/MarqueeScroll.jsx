import React, { Component } from "react";

export default class Scroll extends Component {
  state = {
    prevScrollPos: window.pageYOffset,
    scrollDirection: "forwards",
    scrollSpeed: 60,
  };
  marqueeRef = React.createRef();
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const { prevScrollPos, scrollDirection, scrollSpeed } = this.state;

    let newScrollSpeed = scrollSpeed;
    let newScrollDirection = scrollDirection;
    const scrollDiff = Math.abs(currentScrollPos - prevScrollPos);

    if (currentScrollPos > prevScrollPos) {
      newScrollDirection = "forwards";
      if (scrollSpeed > 20) {
        // newScrollSpeed = scrollSpeed - 0.2;
        newScrollSpeed = Math.max(30, scrollSpeed - scrollDiff / 50);
      }
      else {
        newScrollSpeed = 20;
      }
    } else if (currentScrollPos < prevScrollPos) {
      newScrollDirection = "reverse";
      if (scrollSpeed > 20) {
        // newScrollSpeed = scrollSpeed - 0.2;
        newScrollSpeed = Math.max(30, scrollSpeed - scrollDiff / 50);
      }
      else {
        newScrollSpeed = 20;
      }
    }

    // Check if user has stopped scrolling
    if (newScrollSpeed === scrollSpeed) {
      newScrollSpeed = 60;
    }

    const animationStyle = `scroll ${newScrollSpeed}s ${newScrollDirection} linear infinite`;

    this.marqueeRef.current
      .querySelectorAll(".marquee__content")
      .forEach((el) => {
        el.style.animation = animationStyle;
      });

    this.setState({
      prevScrollPos: currentScrollPos,
      scrollDirection: newScrollDirection,
      scrollSpeed: newScrollSpeed,
    });
  };

  render() {
    return (
      <div
        className="marquee font-morganite text-[20vh] md:text-[35vh] opacity-90"
        ref={this.marqueeRef}
      >
        <ul className="marquee__content uppercase">
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
        </ul>
        <ul className="marquee__content uppercase" aria-hidden="true">
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
          <li>&nbsp;live Soon&nbsp;</li>
        </ul>
      </div>
    );
  }
}