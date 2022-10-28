import React from "react";
import AboutImg from "../../lib/images/ceo.jpeg";

function Why() {
  return (
    <div
      style={{
        paddingTop: 20,
      }}
      className="white"
    >
      <div className="container">
        <h5
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {" "}
          About Us
        </h5>
        <div className="bottom_design"></div>

        <div className="row">
          <div className="col l7 ">
            <div
              style={{
                paddingTop: 5,
                marginTop: 30,
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                }}
              >
                Cauvery is an online portal which sells certified used car
                establishied in 2000. Additionally, it provides a solution to
                all used car related needs with services like affordable car
                loans, paper transfer, warranty servicing, emergency roadside
                assistance and insurance renewal for pre-owned cars.
                Specialised, in-house car experts assist customers in every
                possible way to get them a car most suited to their needs and
                budget.
              </p>
            </div>
          </div>

          <div className="col l4 offset-l1">
            <div>
              <img
                style={{
                  borderRadius: "10px",
                }}
                className="responsive-img"
                src={AboutImg}
                alt=""
              />

              <h5 className="center"> Founder Harish Bopanna</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
