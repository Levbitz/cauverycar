import React, { useState, useEffect } from "react";
import { cars } from "../../lib/data";
import AdThumbNail from "../../components/AdThumbNail/AdThumbNail";
import Accordioning from "../../components/Accordioning/Accordioning";
import { Link, useParams } from "react-router-dom";
import { db } from "../../lib/Firebase/firebase";
import { BsArrowRightShort } from "react-icons/bs";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  deleteDoc,
  doc,
  limit,
} from "firebase/firestore";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

// const Pricing = [
//   {
//     name: "below 2L",
//     price: "2L",
//   },
//   {
//     name: "2L to 4L",
//     price: "4L",
//   },
//   {
//     name: "4L to 6L",
//     price: "6L",
//   },
//   {
//     name: "6L to 8L",
//     price: "8L",
//   },
// ];

function CarCategory() {
  const [
    selectedPrice,
    //setSelectedPrice
  ] = useState("");

  const { categoryUrl, subCategoryUrl } = useParams();
  const [fueType, setFueType] = useState("");
  const [bodyType, setBodyType] = useState("");
  console.log(useParams());

  const [result, setResult] = useState([]);

  const checckerRef = collection(db, "ads");

  useEffect(() => {
    const q = query(
      checckerRef,
      where("active", "==", true),
      where("category", "==", categoryUrl),
      where("subcategory", "==", subCategoryUrl),
      // // where("district", "==", district),
      orderBy("createdAt", "desc"),
      limit(20)
    );
    onSnapshot(q, (snapshoot) => {
      setResult(
        snapshoot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [categoryUrl]);

  return (
    <>
      <Navbar />

      <div
        style={{
          paddingTop: "80px",
          paddingBottom: "100px",
        }}
        className="grey lighten-4"
      >
        <div className="levbitz_container">
          <div
            style={{
              margin: "10px  30px",
              padding: "10px 30px",
            }}
            className=" white"
          >
            <span>
              <Link to="/">Home</Link>
            </span>
            <span
              style={{
                margin: "0px 10px",
              }}
            >
              - {categoryUrl}
            </span>
            <span
              style={{
                margin: "0px 10px",
              }}
            >
              - {subCategoryUrl.replaceAll("_", " ")}
            </span>
          </div>
          <div className="row">
            <div className="col l9 s12">
              <div>
                <div className="row">
                  {result && result.length > 0 ? (
                    result
                      .filter((item) => {
                        if (fueType === "") {
                          return item;
                        } else {
                          return item.data.fuelType === fueType;
                        }
                      })

                      .map((item) => {
                        return <AdThumbNail key={item.id} item={item} />;
                      })
                  ) : (
                    <div>no data</div>
                  )}
                </div>
              </div>
            </div>

            <div className="col l3">
              <div
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                }}
                className="white"
              >
                <div className="row">
                  <div className="col l4">
                    <h6>Filters</h6>
                  </div>
                  <div className="col l8">
                    <div>
                      <button
                        style={{
                          background: "red !important",
                        }}
                        onClick={() => {
                          setFueType("");
                        }}
                        className="btn btn-small red"
                      >
                        clear filter
                      </button>
                    </div>
                  </div>
                </div>

                <Accordioning title={"Fuel Type"}>
                  <div>
                    <div
                      style={{
                        marginTop: "2rem",
                      }}
                      className="col l12 s12"
                    >
                      <select
                        onChange={(e) => selectedPrice(e.target.value)}
                        // disabled={isSubmenuOpen === false}
                        className="browser-default  fabian_multiple_select"
                      >
                        <option disabled selected>
                          Choose Price
                        </option>
                        {/*Pricing.map((price) => {
                    return (
                      <option key={price.price} value={price.price}>
                        {price.name}
                      </option>
                    );
                  })*/}
                      </select>
                    </div>

                    <div
                      style={{
                        marginTop: "2rem",
                      }}
                      className="col l12 s12"
                    >
                      <select
                        onChange={(e) => setFueType(e.target.value)}
                        // disabled={isSubmenuOpen === false}
                        className="browser-default  fabian_multiple_select"
                      >
                        <option disabled selected>
                          Choose Fuel Type
                        </option>

                        <option value="Petrol">petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="CNG">CNG</option>
                        <option value="CNG">CNG</option>
                        <option value="Electric">Electric</option>
                      </select>
                    </div>

                    <div
                      style={{
                        marginTop: "2rem",
                      }}
                      className="col l12 s12"
                    >
                      <select
                        onChange={(e) => setBodyType(e.target.value)}
                        className="browser-default  fabian_multiple_select"
                      >
                        <option disabled selected>
                          body type
                        </option>

                        <option value="Hatchback">Hatchback</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                      </select>
                    </div>
                  </div>
                </Accordioning>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CarCategory;
