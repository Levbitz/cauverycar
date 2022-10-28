import React from "react";
import MyTabs from "../MyTabs/MyTabs";
import SearchForm from "../SearchForm/SearchForm";
import "./HomeShowcase.css";

function HomeShowcase() {
  return (
    <div className="levbitz_slider_container">
      <div className="container ">
        <div className="row">
          <div className="col l9 s12 center">
            <div
              style={{
                zIndex: 999,
              }}
              className="hide-on-med-and-up left"
            >
              <SearchForm />
            </div>
            <br />
            <h2
              style={{
                color: "#c62828 ",
              }}
            >
              Buy your Dream car at the best affordable price
            </h2>
            <p className="white-text  darken-4-text">
              Cauvery cars is an online portal which sells certified used car.
            </p>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeShowcase;
