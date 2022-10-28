import React from "react";
import Footer from "../../components/Footer/Footer";
import HowWork from "../../components/HowWeWork/HowWork";
import Navbar from "../../components/Navbar/Navbar";
import Why from "../../components/Why/Why";
import "./AboutPage.css";
import MdCeo from "../../lib/images/md.jpeg";

function AboutPage() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          background: "#094c59",
          height: 60,
        }}
      >
        <Navbar />
      </div>

      <div className="about_wrap_showcase"></div>
      <div>
        <Why />

        <div className="container">
          <div className="row">
            <div className="col l4 ">
              <div>
                <img
                  style={{
                    borderRadius: "10px",
                  }}
                  className="responsive-img"
                  src={MdCeo}
                  alt=""
                />

                <h5 className="center"> Md sanaullaa</h5>
              </div>
            </div>
            <div className="col l7 offset-l1 ">
              <div
                style={{
                  paddingTop: 5,
                  marginTop: 30,
                }}
              >
                {/*<p
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  Couvery is an online portal which sells certified used car
                  establishied in 2000. Additionally, it provides a solution to
                  all used car related needs with services like affordable car
                  loans, paper transfer, warranty servicing, emergency roadside
                  assistance and insurance renewal for pre-owned cars.
                  Specialised, in-house car experts assist customers in every
                  possible way to get them a car most suited to their needs and
                  budget.
                </p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hww_bg"></div>
      <HowWork />

      <Footer />
    </div>
  );
}

export default AboutPage;
