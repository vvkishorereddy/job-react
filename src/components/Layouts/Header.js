import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    const assetsPath = process.env.REACT_APP_ASSETS_PATH;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={assetsPath + "img/logo.png"}
              width="30"
              height="30"
              alt=""
            />
            &nbsp;Careers ERA
          </Link>
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
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fresher-jobs">
                  Fresher Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/it-jobs">
                  IT Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/govt-jobs">
                  Govt Jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
