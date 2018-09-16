import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class JobDetails extends Component {
  assetsPath = process.env.REACT_APP_ASSETS_PATH;
  state = {
    post: {
      id: 1,
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      description: "",
      location: "",
      companyLogo: `${this.assetsPath}img/jobs/img-1.jpg`
    }
  };

  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <section className="job-browse section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title text-app">
                          {this.state.post.title}
                        </h5>
                        <span className="text-secondary mr-2">
                          <i className="fa fa-clock-o" /> Just Now
                        </span>
                        <span className="text-secondary mr-2">
                          <i className="fa fa-list-alt mr-2" />
                          <small>It Jobs</small>
                        </span>
                        <span className="text-secondary mr-2">
                          <i className="fa fa-history mr-2" />
                          <small>0-5 Years</small>
                        </span>
                        <span className="text-secondary">
                          <i className="fa fa-inr mr-2" />
                          <small>Not disclosed</small>
                        </span>
                      </div>
                      <div className="col-4">
                        <div className="row">
                          <div className="col-8">
                            <span className="text-secondary mr-2 float-right">
                              <i className="fa fa-industry mr-2" />
                              <small className="mr-2">
                                Craeersera india pvt ltd
                              </small>
                              <br />
                              <i className="fa fa-globe mr-2" />
                              <small>Hyderabad</small>
                            </span>
                          </div>
                          <div className="col-4">
                            <img
                              src={this.state.post.companyLogo}
                              alt=""
                              class="rounded mr-2 float-left"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default JobDetails;
