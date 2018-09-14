import React, { Component } from "react";
import {Link} from 'react-router-dom';

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
                  <Link to="/category/govt-jobs">
                    Finance <span className="num-posts">4,287 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="category/it-jobs">
                    Techonologies <span className="num-posts">4,256 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="category/fresher-jobs">
                    Freshers
                    <span className="num-posts">3,245 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="category/bank-jobs">
                    Banking <span className="num-posts">4,256 Jobs</span>
                  </Link>
                </li>               
              </ul>
            </div>
            <div className="inner-box">
              <h3>Job Status</h3>
              <ul className="cat-list">
                <li>
                  <Link to="/permanent">
                    Permanent <span className="num-posts">12,256 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contract">
                    Contract <span className="num-posts">6,510 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/freelancer">
                    Freelancer <span className="num-posts">1,171 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/freshers">
                    Freshers <span className="num-posts">876 Jobs</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="inner-box">
              <h3>Locations</h3>
              <ul className="cat-list">
                <li>
                  <Link to="/location/hyderabad">
                    Hyderabad <span className="num-posts">4,197 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/location/chennai">
                    Chennai <span className="num-posts">2,256 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/location/bangalore">
                    Bangalore <span className="num-posts">3,278 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/delhi">
                    Delhi <span className="num-posts">5,294 Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link to="/mumbai">
                    Mumbai <span className="num-posts">1,746 Jobs</span>
                  </Link>
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
