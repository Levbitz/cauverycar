import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ContactPage.css";
import ContactSvg from "../../lib/images/contact.png";
import { TiTickOutline } from "react-icons/ti";
import HowWork from "../../components/HowWeWork/HowWork";
import { BsWhatsapp } from "react-icons/bs";

function ContactPage() {
  return (
    <>
      <Navbar />
      <div>
        <div
          style={{
            background: "#094c59",
            height: 60,
          }}
        >
          <Navbar />
        </div>
        <div className="levbitz_contact_showcase_wrap">
          <div className="container">
            <h5 className="levbitz_subtitle">contact us</h5>
          </div>
        </div>
        <div className="container contact_content">
          <div className="row">
            <h4>
              {" "}
              <h5>We love to hear from you</h5>
            </h4>

            <div className="col l4  hide-on-med-and-down">
              <div>
                <img src={ContactSvg} alt="" />
              </div>
            </div>
            <div className="col l8 s12">
              <div className="contact_page_content">
                <h5>Address</h5>
                {/*<p>
                  <TiTickOutline /> Cauvery cars is the most trusted way of
                  buying used cars. Choose from over 4000 fully inspected
                  second-hand car models. Select online and book a test drive at
                  your home or at a Cauvery Car Hub. Get a guarantee and a free
                  one-year comprehensive service warranty with Assured Resale
                  Value on every Cauvery car Assured car
        </p>*/}
                <p>
                  <TiTickOutline /> Address: No 9, Outer Ring Road, Near Big
                  Bazar Badrappa Layout, Maruti Nagar, R.M.V. 2nd Stage,
                  Bengaluru, Karnataka 560094
                </p>
                <p>
                  {" "}
                  <TiTickOutline />
                  Contact NO: 9945564651{" "}
                </p>
                <p>
                  <a className="black-text" href="mailto:support@cauvery.com">
                    <TiTickOutline />
                    Email: support@cauvery.com
                  </a>
                </p>
                <p>
                  {" "}
                  <TiTickOutline />
                  Get instant Quote{" "}
                </p>

                <p>
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    class="grey-text text-lighten-3"
                    href="https://wa.me/+919945564651"
                  >
                    <BsWhatsapp color={"green"} />{" "}
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        color: "#000",
                      }}
                    >
                      Whats app
                    </span>
                  </a>
                </p>
                <p>
                  <a
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    class="black-text "
                    href="tel:+919945564651"
                  >
                    {/* <GiPhone color={"#fff"} />{" "}*/}
                    +91 99455 64651
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hww_bg"></div>
        <HowWork />
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;

// <div>
//   <div class="input-field col l12 s12">
//     <input id="first_name" type="text" class="validate" />
//     <label for="first_name">First Name</label>
//   </div>
//   <div class="input-field col l12 s12">
//     <input id="first_name" type="text" class="validate" />
//     <label for="first_name">First Name</label>
//   </div>
//   <div class="input-field col l12 s12">
//     <input id="first_name" type="text" class="validate" />
//     <label for="first_name">First Name</label>
//   </div>
//   <div class="input-field col l12 s12">
//     <input id="first_name" type="text" class="validate" />
//     <label for="first_name">First Name</label>
//   </div>
// </div>;
