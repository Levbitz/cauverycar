import React from "react";
import "./CarByLifeStyle.css";
import FamilyImg from "../../lib/images/styleImg/family.jpeg";
import ValueImg from "../../lib/images/styleImg/value.jpeg";
import AdventureImg from "../../lib/images/styleImg/adventure.jpeg";
import CommuterImg from "../../lib/images/styleImg/commuter.jpeg";
import LuxuryImg from "../../lib/images/styleImg/laxuary.avif";
import FeatureImg from "../../lib/images/styleImg/feature.jpeg";

function CarByLifeStyle() {
  return (
    <div>
      <div className="levbitz_container">
        <div className="row">
          <h5 className="levbitz_subtitle">Car by lifestyle</h5>

          <SingleLifeStyle src={FamilyImg} title="Family" />
          <SingleLifeStyle src={AdventureImg} title="Adventure" />
          <SingleLifeStyle src={ValueImg} title={"Value"} />
          <SingleLifeStyle src={CommuterImg} title={"Commuter"} />
          <SingleLifeStyle src={LuxuryImg} title={"Luxury"} />
          <SingleLifeStyle src={FeatureImg} title={"Feature Parked"} />
        </div>
      </div>
    </div>
  );
}

export default CarByLifeStyle;

const SingleLifeStyle = ({ src, title }) => {
  return (
    <div className="col l4 s6">
      <div
        style={{
          backgroundImage: `url(${src})`,
        }}
        className="center single_life_style"
      >
        <div className="single_life_style_content">
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
};
