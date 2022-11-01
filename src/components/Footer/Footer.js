import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../lib/images/logo.png";
import { BsWhatsapp } from "react-icons/bs";
import { GiPhone } from "react-icons/gi";

function Footer() {
  return (
    <div>
      <SocialMedia />
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l5 s12">
              <h5 class="white-text">Cauvery Cars</h5>
              <div className="bottom_design"></div>

              <p class="grey-text text-lighten-4">
                Cauvery cars is the most trusted way of buying used cars. Choose
                from over 4000 fully inspected second-hand car models. Select
                online and book a test drive at your home or at a Cauvery Car
                Hub. Get a guarantee and a free one-year comprehensive service
                warranty with Assured Resale Value on every Cauvery car
                Assured car
              </p>
            </div>
            <div class="col l3 offset-l1  s12">
              <h5 class="white-text"> company</h5>
              <div className="bottom_design"></div>
              <ul>
                <li>
                  <Link
                    class="grey-text text-lighten-3 my_footer_link"
                    to="/blog"
                  >
                    blog
                  </Link>
                </li>
                <li>
                  <Link
                    class="grey-text text-lighten-3 my_footer_link"
                    to="/about"
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    class="grey-text text-lighten-3 my_footer_link"
                    to="/gallary"
                  >
                    gallary
                  </Link>
                </li>
                <li>
                  <Link class="grey-text text-lighten-3" to="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col l3  s12">
              <h5 class="white-text">support</h5>
              <div className="bottom_design"></div>
              <ul>
                <li>
                  <Link class="grey-text text-lighten-3" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link class="grey-text text-lighten-3" to="/privacy_policy">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #fff",
                      width: 160,
                      padding: "0.1rem",
                      borderRadius: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                    class="grey-text text-lighten-3"
                    href="https://wa.me/+919945564651"
                  >
                    <BsWhatsapp color={"green"} />{" "}
                    <span
                      style={{
                        marginLeft: "0.5rem",
                      }}
                      color={"#fff"}
                    >
                      Whats app
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #fff",
                      width: 160,
                      padding: "0.1rem",
                      borderRadius: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                    class="grey-text text-lighten-3 center"
                    href="tel:+919945564651"
                  >
                    {/* <GiPhone color={"#fff"} />{" "}*/}
                    +91 99455 64651
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container ">
            <a
              style={{
                paddingLeft: "12px",
              }}
              class="white-text left"
              href="https://serpenstech.com/"
            >
              © {new Date().getFullYear()} Cauvery cars
            </a>
            <a class="red-text right" href="https://serpenstech.com/">
              powered by serpens technology
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
