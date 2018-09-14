import React, { Component } from "react";

class Footer extends Component {
  d = new Date();

  render() {
    return (
      <footer>
        <section className="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Cities</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">Hyderabad</a>
                    </li>
                    <li>
                      <a href="#">Bangalore</a>
                    </li>
                    <li>
                      <a href="#">Chennai</a>
                    </li>
                    <li>
                      <a href="#">Delhi</a>
                    </li>
                    <li>
                      <a href="#">All Cities</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Category</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">Infirmation & Technology</a>
                    </li>
                    <li>
                      <a href="#">Banking</a>
                    </li>
                    <li>
                      <a href="#">Pharma</a>
                    </li>
                    <li>
                      <a href="#">Civil</a>
                    </li>
                    <li>
                      <a href="#">All Categories</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Type</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">Permanent</a>
                    </li>
                    <li>
                      <a href="#">Contract</a>
                    </li>
                    <li>
                      <a href="#">Freshers</a>
                    </li>
                    <li>
                      <a href="#">Experienced</a>
                    </li>
                    <li>
                      <a href="#">Freelance</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Pages</h3>
                  <ul className="menu">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Faq</a>
                    </li>
                    <li>
                      <a href="#">License</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Follow Us</h3>
                  <div className="bottom-social-icons social-icon">
                    <a className="twitter" href="https://twitter.com/GrayGrids">
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="facebook"
                      href="https://web.facebook.com/GrayGrids"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a className="youtube" href="https://instagram.com/">
                      <i className="fa fa-instagram" />
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                  <p>
                    Join our mailing list to stay up to date and get notices
                    about our Latest Jobs!
                  </p>
                  <form className="subscribe-box">
                    <input type="text" placeholder="Your email" />
                    <input
                      type="submit"
                      className="btn-system"
                      value="Subscribe"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  All Rights reserved {this.d.getFullYear()}
                  <a rel="nofollow" href="http://careersera.com">
                    &nbsp;&copy; &nbsp;Careers ERA
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
