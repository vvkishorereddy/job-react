import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Layouts/Header";
import Banner from "./components/Layouts/Banner";
import RoutesList from "./components/Layouts/RoutesList";
import Footer from "./components/Layouts/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Banner />
          <RoutesList />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
