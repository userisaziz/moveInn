import React from "react";
import logo from "../assets/img/logo1.png";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container" id="navigator">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img src={logo} className="nav_logo"></img>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Activities Blog
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Booking
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Special Offer
              </a>
            </li>
            <li>
              <button className="btn btn-custom btn-lg">Book Now</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
