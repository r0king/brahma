import React, { Component } from "react";

export default class MarqueeScroll extends Component {
  render() {
    return (
      <div>
        <div
          className="marquee font-morganite text-[20vh] md:text-[40vh] text-primary leading-none"          
        >
          <ul className="marquee__content uppercase">
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
          </ul>
          <ul className="marquee__content uppercase" aria-hidden="true">
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
            <li dangerouslySetInnerHTML={{ __html: ` &nbsp; &nbsp;${this.props.text} &nbsp; &nbsp;` }}/>
          </ul>
        </div>
      </div>
    );
  }
}