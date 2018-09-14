import React, { Component } from "react";

class RightSideBar extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-4">
        <aside>
          <div className="sidebar">
            <div className="inner-box">
              <h3>Categories</h3>
              <ul className="cat-list">
                <li>
                  <a href="#">
                    Finance <span className="num-posts">4,287 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Techonologies <span className="num-posts">4,256 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Art/Design
                    <span className="num-posts">3,245 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Science <span className="num-posts">4,256 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Education Training{" "}
                    <span className="num-posts">4,560 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Logistics <span className="num-posts">3,256 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Food Services <span className="num-posts">1,256 Jobs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="inner-box">
              <h3>Job Status</h3>
              <ul className="cat-list">
                <li>
                  <a href="#">
                    Full Time <span className="num-posts">12,256 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Part Time <span className="num-posts">6,510 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Freelancer <span className="num-posts">1,171 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Internship <span className="num-posts">876 Jobs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="inner-box">
              <h3>Locations</h3>
              <ul className="cat-list">
                <li>
                  <a href="#">
                    New York <span className="num-posts">4,197 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    San Francisco <span className="num-posts">2,256 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    San Diego <span className="num-posts">3,278 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Los Angeles <span className="num-posts">5,294 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Chicago <span className="num-posts">1,746 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Houston <span className="num-posts">871 Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    New Orleans <span className="num-posts">2,163 Jobs</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}

export default RightSideBar;
