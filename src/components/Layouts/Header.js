import React, { Component } from "react";

class Header extends Component {
  render() {
    const assetsPath = process.env.REACT_APP_ASSETS_PATH;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={assetsPath + "img/logo.png"}
              width="30"
              height="30"
              alt=""
            />
            &nbsp;Careers ERA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fresher Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  IT Jobs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Govt Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
