import React from "react";
import CEOImg from "../../lib/images/ceo.jpeg";
import MdImg from "../../lib/images/md.jpeg";
import "./OurTeam.css";

function OurTeam() {
  return (
    <div
      className="our_team_wrap"
      style={{
        marginTop: "50px",
      }}
    >
      <div className="container ">
        <h5 className="center">Meet Our team</h5>
        <div className="row">
          <div className="col l3"></div>
          <SingleTeamMeamber
            title={"Founder"}
            name={"Harish Bopanna"}
            src={CEOImg}
          />

          <SingleTeamMeamber title={"MD"} src={MdImg} name={" Sanaulla"} />
          <div className="col l3"></div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;

const SingleTeamMeamber = ({ title, name, src }) => {
  return (
    <div class="col l3 s12 m6">
      <div class="card z-depth-0">
        <div class="card-image">
          <img
            style={{
              borderRadius: "15%",
              height: "200px",
            }}
            src={src}
          />
          <span
            style={{
              fontWeight: "bold",
              color: "#031b34",
            }}
            class="card-title "
          >
            {title}
          </span>
          {/*<a
            style={{
              background: "#031b34",
            }}
            class="btn-floating halfway-fab waves-effect waves-light "
          >
            <i class="material-icons tiny">phone_in_talk</i>
          </a>*/}
        </div>
        <div class="card-content">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
