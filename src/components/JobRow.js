import React from "react";
import { Link } from "react-router-dom";
const JobRow = ({ post }) => {
  return (
    <div className="job-list">
      <div className="thumb">
        <Link to="/jobs/1">
          <img src={post.companyLogo} alt="" />
        </Link>
      </div>

      <div className="job-list-content">
        <h4>
          <a href="job-details.html">{post.title}</a>
          <span className="full-time">{post.jobType}</span>
        </h4>
        <p>{post.description}</p>
        <div className="job-tag">
          <div className="pull-left">
            <div className="meta-tag">
              <span>
                <a href="browse-categories.html">
                  <i className="ti-brush" />
                  {post.category}
                </a>
              </span>
              <span>
                <i className="ti-location-pin" />
                {post.location}
              </span>
            </div>
          </div>
          <div className="pull-right">
            <div className="icon">
              <i className="ti-heart" />
            </div>
            <div className="btn btn-common btn-rm">More Detail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRow;
