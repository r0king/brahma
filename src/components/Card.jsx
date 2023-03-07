import React, { Component } from "react";
import CountDown from "./CountDown";
import diya from "../assets/images/diwali-lamp.gif";
export class Card extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    const components = this.myRef.querySelectorAll(
      ".c-page-head_split-title_inner"
    );
    // for each elemnt in the componets array remove tranform property after 1 second
    setTimeout(() => {
      components.forEach((component) => {
        component.style.transform = "none";
      });
    }, 100);
  }

  render() {
    return (
      <div data-load-container="" className="bg-[#f0f0f0]">        
        <div
          className="o-scroll"
          data-module-scroll="main"
          ref={(ref) => (this.myRef = ref)}
        >
          <main>
            <div className="c-page-head " data-scroll-section="">
              <div className="c-page-head_inner">
                <h1 className="c-page-head_split-title -left pl-[2vw]">
                  <span className="c-page-head_split-title_outer ">
                    <span className="c-page-head_split-title_inner text-[#D35C39]">
                      Brahma '23
                    </span>
                  </span>
                  <span className="c-page-head_split-title_outer">
                    <span className="c-page-head_split-title_inner"> </span>
                  </span>
                  <br />
                  <span className="c-page-head_split-title_outer">
                    <span className="c-page-head_split-title_inner text-[#D35C39]">
                      &nbsp;
                    </span>
                  </span>
                </h1>
                <div className="c-page-head_split-title -right">
                  <span className="c-page-head_split-title_outer">
                    <span className="c-page-head_split-title_inner">
                      Mar.28—29
                    </span>
                  </span>
                  <br />
                  <span className="c-page-head_split-title_outer ">
                    <span className="c-page-head_split-title_inner ">
                      @ASIET
                    </span>
                  </span>
                </div>
                <div className="c-page-head_note">
                  <p className="u-note">
                    We're thrilled to welcome you back for the 21
                    <span className="align-text-top text-[11px]">th </span>
                    edition of Brahma the cultural Festival of ASIET.
                  </p>
                </div>

                <div className="c-page-head_visual -home">
                  <img src={diya} alt="lamp" />
                </div>
                <div className="c-page-head_cta">
                  <div className="c-button -primary -stretch unii-listing-button group ">
                    <span className="c-button_label group-hover:text-[#1F1F1F] transition-all h-[10vh]">
                      <CountDown />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="c-section" data-scroll-section>
      </div> */}

            <div className="marquee font-[neue-bit] text-[4vw] fixed bottom-0 font-bold opacity-40">
              <ul className="marquee__content ">
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
              </ul>
              <ul className="marquee__content" aria-hidden="true">
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
                <li>&nbsp; ---Live Soon--- &nbsp;</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Card;
