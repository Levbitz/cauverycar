import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Gallary.css";
import GOne from "../../lib/images/gallary/1.jpeg";
import GTwo from "../../lib/images/gallary/2.jpeg";
import GThree from "../../lib/images/gallary/3.jpeg";
import GFour from "../../lib/images/gallary/4.jpeg";
import GFive from "../../lib/images/gallary/5.jpeg";
import GSix from "../../lib/images/gallary/6.jpeg";

function GallaryPage() {
  return (
    <>
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
            <h5 className="levbitz_subtitle">Gallary</h5>
          </div>
        </div>

        <div
          style={{
            marginTop: 30,
          }}
          className="levbitz_container"
        >
          <div className="row">
            <SinglePhoto src={GOne} />
            <SinglePhoto src={GTwo} />
            <SinglePhoto src={GThree} />
            <SinglePhoto src={GFour} />
            <SinglePhoto src={GFive} />
            <SinglePhoto src={GSix} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GallaryPage;

const SinglePhoto = ({ src }) => {
  return (
    <div className="col l3">
      <div className="levbitz_single_photo_wrap">
        <img
          style={{
            borderRadius: "5px",
          }}
          className="responsive-img"
          src={src}
          alt=""
        />
      </div>
    </div>
  );
};
