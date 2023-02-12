import React, { Component } from "react";
export class Card extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    const components = this.myRef.querySelectorAll(".c-page-head_split-title_inner");
    // for each elemnt in the componets array remove tranform property after 1 second
    setTimeout(() => {
      components.forEach((component) => {
        component.style.transform = "none";
      });
    }, 1000);
  }

  render() {
    return (
      <div data-load-container="">
        {/* <header className="c-header" data-module-header="">
          <nav className="c-header_nav">
            <ul className="c-header_nav_list">
              <li className="c-header_nav_item">
                <a href="speakers.html" className="c-header_nav_link">
                  Speakers
                </a>
              </li>
              <li className="c-header_nav_item">
                <a href="workshops.html" className="c-header_nav_link">
                  Workshops
                </a>
              </li>
              <li className="c-header_nav_item">
                <a href="schedule.html" className="c-header_nav_link">
                  Schedule
                </a>
              </li>
              <li className="c-header_nav_item">
                <a href="venue.html" className="c-header_nav_link">
                  Venue
                </a>
              </li>
              <li className="c-header_nav_item">
                <a href="news.html" className="c-header_nav_link">
                  News
                </a>
              </li>
              <li className="c-header_nav_item">
                <a href="contact-us.html" className="c-header_nav_link">
                  Contact us
                </a>
              </li>
              <li className="c-header_nav_item -tickets">
                <a
                  href="https://www.universe.com/events/digital-thinkers-conf-Brahma 23-2023-by-awwwards-tickets-N2TSX9?buttonColor=#3A66E5&buttonText=GetTickets"
                  target="_blank"
                  className="c-header_nav_link unii-listing-button"
                  data-load="false"
                  rel="noreferrer"
                >
                  Get tickets
                  <svg role="presentation" alt="Get tickets" aria-hidden="true">
                    <use xlinkHref="assets/images/sprite.svg#arrow-top-right-small" />
                  </svg>
                </a>
              </li>
            </ul>
            <button
              className="c-header_menu-toggler || c-header_nav_link"
              data-header="menu-toggler"
            >
              Menu
            </button>
          </nav>
          <nav className="c-menu">
            <div className="c-menu_bg" />
            <div className="c-menu_inner">
              <p className="c-menu_note">
                We're thrilled to welcome you back for this 8th edition of the
                awwwards conference.
              </p>
              <ul className="c-menu_nav">
                <li className="c-menu_nav_item">
                  <a href="/" target="_self" className="c-menu_nav_link">
                    Home
                  </a>
                </li>
                <li className="c-menu_nav_item">
                  <a
                    href="speakers.html"
                    target="_self"
                    className="c-menu_nav_link"
                  >
                    Speakers
                  </a>
                </li>
                <li className="c-menu_nav_item">
                  <a
                    href="workshops.html"
                    target="_self"
                    className="c-menu_nav_link"
                  >
                    Workshops
                  </a>
                </li>
                <li className="c-menu_nav_item">
                  <a
                    href="schedule.html"
                    target="_self"
                    className="c-menu_nav_link"
                  >
                    Schedule
                  </a>
                </li>
                <li className="c-menu_nav_item">
                  <a
                    href="venue.html"
                    target="_self"
                    className="c-menu_nav_link"
                  >
                    Venue
                  </a>
                </li>
                <li className="c-menu_nav_item">
                  <a
                    href="news.html"
                    target="_self"
                    className="c-menu_nav_link"
                  >
                    News
                  </a>
                </li>
                <li className="c-menu_nav_item">
                  <a href="faq.html" target="_self" className="c-menu_nav_link">
                    FAQ
                  </a>
                </li>
                <li className="c-menu_nav_item">
                  <a
                    href="contact-us.html"
                    target="_self"
                    className="c-menu_nav_link"
                  >
                    Contact us
                  </a>
                </li>
                <li className="c-menu_nav_item">
                  <a
                    href="https://www.universe.com/events/digital-thinkers-conf-Brahma 23-2023-by-awwwards-tickets-N2TSX9?buttonColor=#3A66E5&buttonText=GetTickets"
                    target="_blank"
                    className="c-menu_nav_link"
                    rel="noreferrer"
                  >
                    Get tickets
                  </a>
                </li>
              </ul>
              <button
                className="c-menu_location-picker"
                data-header="location-menu-toggler"
              >
                <span>Brahma 23</span>
              </button>
            </div>
            <button className="c-menu_close" data-header="menu-toggler">
              <span className="u-screen-reader-text">Close</span>
              <svg role="presentation" alt="Close" aria-hidden="true">
                <use xlinkHref="assets/images/sprite.svg#close" />
              </svg>
            </button>
          </nav>
          <nav className="c-location-menu">
            <div className="c-location-menu_bg">
              <span />
              <span />
              <span />
            </div>
            <div className="c-location-menu_inner">
              <div className="c-location-menu_head">
                <h2 className="c-location-menu_title">Pick a city</h2>
              </div>
              <ul className="c-location-menu_nav">
                <li className="c-location-menu_nav_item">
                  <div className="c-location-menu_nav_outer">
                    <div className="c-location-menu_nav_inner">
                      <a
                        href="index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="c-location-menu_nav_link -current"
                      >
                        <span>Brahma 23</span>
                        <span>May</span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="c-location-menu_decoration" aria-hidden="true">
                <span className="c-location-menu_heading || c-heading -huge">
                  <span className="c-location-menu_heading_line">
                    <span className="c-location-menu_heading_line_inner">
                      Pick a
                    </span>
                  </span>
                  <span className="c-location-menu_heading_line">
                    <span className="c-location-menu_heading_line_inner">
                      city
                    </span>
                  </span>
                </span>
                <figure className="c-location-menu_visual">
                  <div
                    className="c-character"
                    data-module-character="location-menu"
                    data-character-file="megaphone"
                  />
                </figure>
              </div>
            </div>
            <button
              className="c-location-menu_close"
              data-header="location-menu-toggler"
            >
              <span className="u-screen-reader-text">Close</span>
              <svg role="presentation" alt="Close" aria-hidden="true">
                <use xlinkHref="assets/images/sprite.svg#close" />
              </svg>
            </button>
          </nav>
        </header> */}
        <div className="o-scroll" data-module-scroll="main" ref={(ref) => this.myRef = ref}>
          <main>
            <div className="c-page-head" data-scroll-section="">
              <div className="c-page-head_inner">
                <h1 className="c-page-head_split-title -left">
                  <span className="c-page-head_split-title_outer">
                    <span className="c-page-head_split-title_inner">
                      Brahma
                    </span>
                  </span>
                  <span className="c-page-head_split-title_outer">
                    <span className="c-page-head_split-title_inner">
                      {" "}
                    </span>
                  </span>
                  <br />
                  <span className="c-page-head_split-title_outer">
                    <span className="c-page-head_split-title_inner">
                      '23
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
                  <span className="c-page-head_split-title_outer">
                    <span className="c-page-head_split-title_inner">
                      Live Soon
                    </span>
                  </span>
                </div>
                <div className="c-page-head_note">
                  <p className="u-note">
                    We're thrilled to welcome you back for the 21th edition of
                    Brahma the cultural Festival of ASIET.
                  </p>
                </div>
                <div className="c-page-head_cta">
                  <a
                    href="https://www.brahma.live"
                    target="_blank"
                    className="c-button -primary -stretch unii-listing-button"
                    data-load="false"
                    rel="noreferrer"
                  >
                    <span className="c-button_tag">Booking</span>
                    <span className="c-button_label">
                      Get
                      <br />
                      Tickets
                    </span>
                    <svg
                      className="c-button_icon"
                      role="presentation"
                      alt="Get tickets"
                      aria-hidden="true"
                    >
                      <use xlinkHref="assets/images/sprite.svg#arrow-top-right" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <div class="c-section" data-scroll-section>
      </div> */}
            <div className="c-intro" data-scroll-section="">
              <div
                className="c-intro_rail || c-rail || u-anim-scroll"
                data-scroll=""
              >
                <ul className="u-screen-reader-text">
                  <li>Brahma 23</li>
                </ul>
                <span
                  className="c-rail_text"
                  aria-hidden="true"
                  data-module-rail=""
                  data-rail-speed={1}
                  data-scroll=""
                  data-scroll-repeat=""
                  data-scroll-offset="0,0"
                  data-scroll-call="trigger,Rail"
                >
                  <span className="c-intro_rail_text">Brahma 23</span>
                </span>
                <button
                  className="c-intro_rail_button"
                  title="Select a conference"
                >
                  Select a conference
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Card;
