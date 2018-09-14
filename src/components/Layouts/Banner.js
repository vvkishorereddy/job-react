import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div
        className="page-header "
        style={{
          backgroundImage: `url(${
            process.env.REACT_APP_ASSETS_PATH
          }img/banner1.jpg)`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <h2 className="product-title">IT Jobs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
