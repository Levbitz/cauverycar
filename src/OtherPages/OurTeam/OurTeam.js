import React from "react";
import "./OurTeam.css";
import UsersImg from "../../lib/images/users.png";
import FeaturedImg from "../../lib/images/fetured.png";

function OurTeam() {
  return (
    <div>
      <div className="levbitz_team_showcase"></div>

      <div className="container">
        <div className="row">
          <h2 className="center">
            We have a mission to change the way of car buying
          </h2>
          <h5>Our Story</h5>
        </div>

        <div className="row">
          <p>
            After working for a year, one of us decided to buy himself a stylish
            car.
          </p>

          <p>
            But with a budget of 3-4 lakhs, it was not possible to get a sedan.
            So he started exploring this used car market and realized that these
            deals are actually worth the money.
          </p>
        </div>

        <div className="row">
          <h5>Team Truebil</h5>

          <p>
            Truebil is a team of young, highly motivated professionals who
            strive to help you buy and sell used cars in the simplest way
            possible. We believe that through authentic and curated information,
            we can bring a revolution to this industry.
          </p>

          <p>
            {" "}
            We work with sellers to ensure that you get all the data points
            required to make an informed decision. Added to that our partners
            play a pivotal role in providing end to end auxiliary services and
            hence further simplifying your life.
          </p>
        </div>
      </div>

      <div className="user_wrap">
        <div className="container">
          <div className="row">
            <h4 className="center">
              500,000+ users till day! Look at what they are saying
            </h4>

            <div className="col l8">
              <div>
                {" "}
                <h6>
                  Extremely impressed with the services of truebil.com. Took
                  only one visit to buy a used car for my family. Have been
                  recommending Truebil to my neighbours and relatives.
                </h6>
                <h6>
                  I sold my car in just seven days. The entire process was quick
                  and simple. The inspection report eased communication between
                  myself and buyers. Cheers to truebil team :)
                </h6>
                <h6>
                  I am in awe of the services of truebil.com. Amazing concept
                  with great details for every car. Would recommend every
                  prospective buyer to buy cars through truebil.
                </h6>
              </div>
            </div>
            <div className="col l4">
              <div>
                <img className="responsive-img" src={UsersImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row center">
          <h3>Featured in</h3>

          <div className="col l12 center">
            <img src={FeaturedImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
