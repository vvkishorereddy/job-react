import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const JobRow = ({ post }) => {
  return (
    <Fragment>
      <div className="card bg-light mb-3 ">
        <div className="card-body clearfix">
          <img src={post.companyLogo} alt="" class="rounded mr-2 pull-left" />
          <h5 className="card-title">
            <Link to="/jobs/1">{post.title}</Link>
          </h5>
          <span className="text-secondary mr-2">
            <i className="fa fa-industry mr-2" />
            <small>Craeersera india pvt ltd</small>
          </span>
          <span className="text-secondary mr-2">
            <i className="fa fa-globe" /> <small>Hyderabad</small>
          </span>
          <span className="text-secondary mr-2">
            <i className="fa fa-list-alt" /> <small>It Jobs</small>
          </span>
          <span className="text-secondary mr-2">
            <i className="fa fa-history" /> <small>0-5 Years</small>
          </span>
          <span className="text-secondary">
            <i className="fa fa-inr" /> <small>Not disclosed</small>
          </span>
          <p className="card-text">
            <span className="text-secondary">
              <i className="fa fa-tags" /> A,b,c,d,c,e,f
            </span>
          </p>
          <p className="card-text">
            <span>Description : </span> {post.description}
          </p>
          <hr />
          <div className="mr-auto">
            <span className="text-secondary mr-2">
              <i className="fa fa-user" /> Admin
            </span>
            <span className="text-secondary mr-2">
              <i className="fa fa-clock-o" /> Just Now
            </span>

            <div className="float-right">
              <button className="btn btn-outline-app mr-2">
                <i className="fa fa-envelope" />
              </button>
              <Link to="/jobs/1" class="btn btn-outline-app ">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JobRow;
