import React from "react";
import { cars } from "../../lib/data";
import AdThumbNailTwo from "../../components/AdThumbNailTwo/AdThumbNailTwo";

function SimilarCars() {
  return (
    <div className="white">
      <div className="levbitz_container">
        <h5> SimilarCars</h5>
        <div className="row">
          {cars && cars.length > 0 ? (
            cars.slice(0, 6).map((item) => {
              return <AdThumbNailTwo key={item.id} item={item} />;
            })
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SimilarCars;
