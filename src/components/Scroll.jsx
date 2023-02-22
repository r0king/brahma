import React, { Component } from "react";

export default class CarouselAni extends Component {
  state = {
    prevScrollPos: window.pageYOffset,
    scrollDirection: "forwards",
    scrollSpeed: 20,
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
  
    if (currentScrollPos > prevScrollPos) {
      newScrollDirection = "forwards";
      if (scrollSpeed > 7) {
        newScrollSpeed = scrollSpeed - 0.1;
      }
    } else if (currentScrollPos < prevScrollPos) {
      newScrollDirection = "reverse";
      if (scrollSpeed > 7) {
        newScrollSpeed = scrollSpeed - 0.1;
      }
      
    } else {
      newScrollSpeed =20; // default speed
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
