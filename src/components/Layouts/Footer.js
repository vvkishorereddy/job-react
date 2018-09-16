import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                  <h3 className="block-title">Location</h3>
                  <ul className="menu">
                    <li>
                      <Link to="/location/hyderabad">Hyderabad</Link>
                    </li>
                    <li>
                      <Link to="/location/bangalore">Bangalore</Link>
                    </li>
                    <li>
                      <Link to="/location/chennai">Chennai</Link>
                    </li>
                    <li>
                      <Link to="/location/delhi">Delhi</Link>
                    </li>
                    <li>
                      <Link to="/location">All Cities</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Category</h3>
                  <ul className="menu">
                    <li>
                      <Link to="/category/it">Infirmation & Technology</Link>
                    </li>
                    <li>
                      <Link to="/category/banking">Banking</Link>
                    </li>
                    <li>
                      <Link to="/category/pharma">Pharma</Link>
                    </li>
                    <li>
                      <Link to="/category/civil">Civil</Link>
                    </li>
                    <li>
                      <Link to="/category">All Categories</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Type</h3>
                  <ul className="menu">
                    <li>
                      <Link to="/permanent">Permanent</Link>
                    </li>
                    <li>
                      <Link to="/contract">Contract</Link>
                    </li>
                    <li>
                      <Link to="/freshers">Freshers</Link>
                    </li>
                    <li>
                      <Link to="/experienced">Experienced</Link>
                    </li>
                    <li>
                      <Link to="/freelancer">Freelance</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Pages</h3>
                  <ul className="menu">
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Follow Us</h3>
                  <div className="bottom-social-icons social-icon">
                    <a
                      className="twitter"
                      href="https://twitter.com/careersera"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      className="facebook"
                      href="https://web.facebook.com/careersera"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      className="youtube"
                      href="https://instagram.com/careersera"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                    <a
                      className="linkedin"
                      href="https://www.linkedin.com/careersera"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                  <p>
                    Join our mailing list to stay up to date and get notices
                    about our Latest Jobs!
                  </p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-app" type="button">
                        <i className="fa fa-envelope" />
                      </button>
                    </div>
                  </div>
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
