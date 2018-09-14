import React, { Component } from "react";


import RightSideBar from "./Layouts/RightSideBar";
import JobRow from './JobRow';

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
    const posts = this.state.posts.map( post => <JobRow key={post.id} post={post} />);

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
