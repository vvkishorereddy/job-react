import React, { Component } from "react";

import RightSideBar from "./Layouts/RightSideBar";

class Jobs extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const assetsPath = process.env.REACT_APP_ASSETS_PATH;
    const posts = [
      {
        id: 1,
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries`,
        companyLogo: `${assetsPath}img/jobs/img-1.jpg`,
        category: "Design",
        location: "Hyderabad",
        jobType: "Permanant"
      }
    ];

    this.setState({
      posts: posts
    });
  }

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <div className="job-list">
          <div className="thumb">
            <a href="job-details.html">
              <img src={post.companyLogo} alt="" />
            </a>
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
    });

    return (
      <section className="job-browse section">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8">{posts}</div>
            <RightSideBar />
          </div>
        </div>
      </section>
    );
  }
}

export default Jobs;
