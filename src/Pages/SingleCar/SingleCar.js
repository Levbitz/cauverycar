import React, { useState, useEffect } from "react";
import "./SingleCar.css";
import SideDetailBanner from "../../lib/images/sideDetailsBanner.png";
import SimilarCars from "../../components/SimilarCars/SimilarCars";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { db } from "../../lib/Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../components/Footer/Footer";

function SingleCar() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [district, setDistrict] = useState("");
  const [division, setDivision] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [transmissionType, setTransmissionType] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [kmDriven, setKmDriven] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [ownerType, setOwnerType] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    const docRef = doc(db, "ads", id);
    getDoc(docRef).then((doc) => {
      console.log(doc.data());
      setCategory(doc.data().category);
      setSubcategory(doc.data().subcategory);
      setDistrict(doc.data().district);
      setDivision(doc.data().division);
      setAddress(doc.data().address);
      setPhoneNumber(doc.data().phoneNumber);
      setPrice(doc.data().price);
      setTitle(doc.data().title);
      setDescription(doc.data().description);
      setEmail(doc.data().email);
      setImages(doc.data().images);
      setTransmissionType(doc.data().transmissionType);
      setBodyType(doc.data().bodyType);
      setKmDriven(doc.data().kmDriven);
      setOwnerType(doc.data().ownerType);
    });
    setLoading(false);
  }, [id]);

  const [showNum, setShowNum] = useState(false);
  const [showAdd, setShowAdd] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [queryMail, setQueryMail] = useState("");

  const invalid = name === "" || number === "" || queryMail === "";

  if (loading) {
    return <div>Loading...</div>;
  } else
    return (
      <div
        className="levbitz_single_car_wrap"
        style={{
          color: "#6A6F7B",
          background: "#f2f3f5",
        }}
      >
        <Navbar />
        <div
          style={{
            background: "#094c59",
            height: "60px",
          }}
        ></div>

        {showPopup ? (
          <ImagePoping setShowPopup={setShowPopup} images={images} />
        ) : null}
        <div className="container">
          <h5>{title}</h5>

          <div className="row">
            <div className="col l9">
              <div>
                <div className="row">
                  {images ? (
                    <>
                      {images.slice(0, 1).map((imgUrl) => {
                        return (
                          <div key={imgUrl} className="col l6 s12 ">
                            <img
                              onClick={() => setShowPopup(true)}
                              src={imgUrl}
                              alt="img"
                              className="responsive-img"
                              style={{
                                borderRadius: 10,
                              }}
                            />
                          </div>
                        );
                      })}
                    </>
                  ) : null}

                  {images ? (
                    <>
                      {images.slice(1, 2).map((imgUrl) => {
                        return (
                          <div key={imgUrl} className="col l6 s12 ">
                            <img
                              onClick={() => setShowPopup(true)}
                              src={imgUrl}
                              alt="img"
                              className="responsive-img"
                              style={{
                                borderRadius: 10,
                                opacity: 0.2,
                              }}
                            />

                            <div
                              style={{
                                marginTop: -150,
                                marginLeft: "30%",
                              }}
                            >
                              <h3
                                style={{
                                  fontSize: "2.5rem",
                                  color: "red",
                                  fontWeight: "bold",
                                }}
                              >
                                {images.length - 5}+
                              </h3>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : null}
                </div>

                <div className="row">
                  {/*images ? (
                    <>
                      {images.slice(3, 5).map((imgUrl) => {
                        return (
                          <div key={imgUrl} className="col l4 s12 ">
                            <img
                              onClick={() => setShowPopup(true)}
                              src={imgUrl}
                              alt="img"
                              className="responsive-img"
                              style={{
                                borderRadius: 10,
                              }}
                            />
                          </div>
                        );
                      })}
                    </>
                    ) : null*/}

                  {/*images ? (
                    <>
                      {images.slice(1, 2).map((imgUrl) => {
                        return (
                          <div key={imgUrl} className="col l4 s12 ">
                            <img
                              onClick={() => setShowPopup(true)}
                              src={imgUrl}
                              alt="img"
                              className="responsive-img"
                              style={{
                                borderRadius: 10,
                                opacity: 0.2,
                              }}
                            />

                            <div
                              style={{
                                marginTop: -150,
                                marginLeft: "30%",
                              }}
                            >
                              <h3
                                style={{
                                  fontSize: "2.5rem",
                                  color: "red",
                                  fontWeight: "bold",
                                }}
                              >
                                {images.length - 5}+
                              </h3>
                            </div>
                          </div>
                        );
                      })}
                    </>
                    ) : null*/}
                </div>
              </div>

              <div className="white levbitz_single_car_overview">
                <h3
                  style={{
                    marginTop: 40,
                  }}
                >
                  Overview
                </h3>

                <hr />

                <h5>About Car</h5>

                <div className="row">
                  <div className="col l6">
                    <div>
                      <p>
                        {" "}
                        <span className="key">Fuel:</span> Petrol
                      </p>
                      <p>
                        {" "}
                        <span className="key">Owner:</span>
                        {ownerType}
                      </p>
                      <p>
                        {" "}
                        <span className="key">kms:</span>
                        {kmDriven ? kmDriven : "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="col l6">
                    <div>
                      <p>
                        {" "}
                        <span className="key">Transmission:</span>{" "}
                        {transmissionType ? transmissionType : "N/A"}
                      </p>
                      <p>
                        {" "}
                        <span className="key">RTO:</span> Rajajinagar (KA-02)
                      </p>
                      <p>
                        {" "}
                        <span className="key">body_type:</span>{" "}
                        {bodyType ? bodyType : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div>
                    <h5>About Previous Seller (Cauvery CarsOwned Now)</h5>
                    <div className="col l6"></div>
                    <div className="col l6">
                      <p>
                        <span className="key">Employment: </span> Non IT
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div>
                    <h5>Description</h5>

                    {!description
                      ? "details will be available soon"
                      : description
                          .toString()
                          .split(".")
                          .map((item, index) => {
                            return (
                              <p key={index} className="summaryTwo">
                                {item}
                              </p>
                            );
                          })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col l3">
              <div className="white levbitz_single_car_name_and_price">
                <h6>{title}</h6>

                <p>
                  Cauvery Cars : No 9, Outer Ring Road, Near Big Bazar Badrappa
                  Layout, Maruti Nagar, R.M.V. 2nd Stage, Bengaluru, Karnataka
                  560094
                </p>
                <div>
                  <span>{price} </span>
                  <span>Fixed Price</span>
                </div>
              </div>

              {/*<div
                style={{
                  background: "#fff",
                  padding: "2px",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
              >
                <img className="responsive-img" src={SideDetailBanner} alt="" />
              </div>*/}
              <div className="levbitz_buy_direct white">
                <p>Buy this car at best price directly from Cauvery Cars</p>

                <div>
                  <div class="row">
                    <div class="input-field col l12 s12">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        id="first_name"
                        type="text"
                        class="validate"
                      />
                      <label for="first_name"> Name</label>
                    </div>
                    <div class="input-field col l12 s12">
                      <input
                        id="contact"
                        type="text"
                        onChange={(e) => setNumber(e.target.value)}
                        class="validate"
                      />
                      <label for="contact">Contact</label>
                    </div>
                    <div class="input-field col l12 s12">
                      <input
                        id="email"
                        onChange={(e) => setQueryMail(e.target.value)}
                        type="text"
                        class="validate"
                      />
                      <label for="email">Email</label>
                    </div>
                    <div>
                      <small>
                        Be assured! We never share your personal info without
                        asking you
                      </small>
                    </div>

                    <div>
                      <a
                        href={`https://wa.me/919945564651?text=name is ${name}  , email is ${queryMail} and phone is ${number}  `}
                      >
                        <button
                          disabled={invalid}
                          className=" indigo darken-4 waves-effect waves-light white-text"
                          style={{
                            width: "100%",
                            border: "none",

                            padding: "10px",
                            borderRadius: "3px",
                          }}
                        >
                          Test Drive
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<SimilarCars />*/}

        <Footer />
      </div>
    );
}

export default SingleCar;

const ImagePoping = ({ images, setShowPopup }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,

    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <div className="img_popping_wrap">
        <div className="container">
          <div>
            <div className="col l12">
              <p
                onClick={() => setShowPopup(false)}
                style={{
                  margin: "0px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  zIndex: "999",
                }}
                className="white-text right"
              >
                Close
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              margin: "0 auto !important",
              padding: "0px !important",
            }}
          >
            <div className="col l1"></div>
            <div className="col l10 s12 ">
              {images ? (
                <Slider {...settings}>
                  {images.map((imgUrl, index) => {
                    return (
                      <div key={index}>
                        <img
                          alt={imgUrl}
                          src={imgUrl}
                          className="responsive-img"
                          style={{
                            borderRadius: 10,
                            width: "100%",
                            objectFit: "contain",
                            height: 400,
                          }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              ) : null}
            </div>

            <div className="col l1"></div>
          </div>
        </div>
      </div>
    </>
  );
};
