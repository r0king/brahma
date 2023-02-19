import React, { Component } from "react";

export default class CarouselAni extends Component {
  state = {
    prevScrollPos: window.pageYOffset,
    scrollDirection: "forwards",
  };
  marqueeRef = React.createRef();
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  scrollCount = 0;
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const { prevScrollPos } = this.state;
    const scrollDirection =
      currentScrollPos > prevScrollPos ? "forwards" : "reverse";
    // update scrollcount if scroll direction changes
    this.scrollCount =
      scrollDirection === "forwards"
        ? this.scrollCount + 0.6
        : this.scrollCount - 0.6;
    // udpate the speed of the animation based on scroll count in the range of 5-20
    this.scrollCount = Math.min(Math.max(this.scrollCount, 10), 20);
    const scrollSpeed = this.scrollCount;
    console.log(scrollSpeed);

    const animationStyle = `scroll ${scrollSpeed}s ${scrollDirection} linear infinite`;
    //   update animation of all marquee__content elements in the marquee component
    this.marqueeRef.current
      .querySelectorAll(".marquee__content")
      .forEach((el) => {
        // console.log(el)
        el.style.animation = animationStyle;
      });

    this.setState({ prevScrollPos: currentScrollPos, scrollDirection });
  };

  render() {
    return (
      <div
        className="marquee font-morganite md:text-[35vh] opacity-90"
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
