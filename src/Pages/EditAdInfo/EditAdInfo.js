import React, { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import "./PostAd.css";
import { db, auth } from "../../lib/Firebase/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
//import Loading from "../Loading/Loading";
import AdminNav from "../../components/AdminNavbar/AdminNav";

import { India } from "../../lib/Locations/Locations";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SidebarData } from "../../lib/SidebarData/SidebarData";

import Loading from "../../OtherPages/Loading/Loading";

const HeroCaroselsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: false,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

function EditAdInfo() {
  const [loading, setLoading] = useState(true);

  console.log(useParams());

  const [user, setUser] = useState();

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <AdminNav />
        <div
          className=" grey lighten-4 "
          style={{
            overflowX: "hidden !important",
            width: "100% !important",
            paddingBottom: 30,
          }}
        >
          <div
            style={{
              padding: "20px 0px",
              marginBottom: "20px",
            }}
            className="post_showcase_banner black "
          >
            <div className="container">
              <h3 className="white-text">Update Car</h3>
            </div>
          </div>

          <div
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
            }}
            className="container white"
          >
            <div>
              <AdInfo user={user} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditAdInfo;

const AdInfo = ({ user }) => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams();
  const { subNav } = SidebarData[value];
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [results, setResults] = useState([]);

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmissionType, setTransmissionType] = useState("");
  const [kmDriven, setKmDriven] = useState("");
  const [ownerType, setOwnerType] = useState("");
  const [priceType, setPriceType] = useState("");
  const [numberPlate, setNumberPlate] = useState("");
  const [district, setDistrict] = useState("");

  //effect

  useEffect(() => {
    const docRef = doc(db, "ads", id);
    getDoc(docRef).then((doc) => {
      console.log(doc.data());
      setCategory(doc.data().category);
      setSubcategory(doc.data().subcategory);
      setState(doc.data().state);
      setDistrict(doc.data().district);
      // setDivision(doc.data().division);
      setAddress(doc.data().address);
      setPhoneNumber(doc.data().phoneNumber);
      setPrice(doc.data().price);
      setTitle(doc.data().title);
      setNumberPlate(doc.data.numberPlate);
      setDescription(doc.data().description);
      // setEmail(doc.data().email);
      // setImages(doc.data().images);
      setTransmissionType(doc.data().transmissionType);
      setBodyType(doc.data().bodyType);
      setKmDriven(doc.data().kmDriven);
      setOwnerType(doc.data().ownerType);
    });
    // setLoading(false);
  }, [id]);
  //effect

  const UpdateHandler = () => {
    updateDoc(doc(db, "ads", id), {
      category: category,
      subcategory: subcategory,
      state: state,
      city: city,
      address: address,
      bodyType: bodyType,
      fuelType: fuelType,
      transmissionType: transmissionType,
      priceType: priceType,
      kmDriven: kmDriven,
      // numberPlate: numberPlate,
      ownerType: ownerType,

      phoneNumber: phoneNumber,
      price: price,
      title: title,
      description: description,
    }).then(() => {
      alert("Document has been update ");
      navigate("/profile");
    });
  };

  return (
    <div>
      <div
        style={{
          padding: "0px 15px",
        }}
        className="container_levbitz "
      >
        <h5 className="">{title}</h5>
        {/*<h1 className="green">{subcategory}</h1>
      <h1 className="green">{ownerType}</h1>*/}
        <div className="row hide">
          <Slider {...HeroCaroselsettings}>
            {SidebarData.map((item, index) => {
              const { page, img, categoryUrl, title } = item;
              return (
                <div>
                  <div
                    style={{
                      background: value === index ? "red" : "rgb(244, 51, 151)",
                    }}
                    className="chip white-text"
                    onClick={() => {
                      setValue(index);
                      setIsSubmenuOpen(true);
                      setCategory(categoryUrl);
                    }}
                  >
                    {title}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="post_wrap">
        <div className="row">
          <div className="col l4 s12">
            <div
              style={{
                padding: "5px 15px",
                borderRadius: "10px",
                background: "#c62828 ",
              }}
              className="hide"
            >
              {SidebarData.map((item, index) => {
                const { page, img, categoryUrl, title } = item;
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      border: value === index ? "1px solid #fff" : "none",
                      padding: "0px 10px",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setValue(index);
                      setIsSubmenuOpen(true);
                      setCategory(categoryUrl || category);
                    }}
                    key={index}
                  >
                    <h6
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      className="white-text"
                    >
                      {title}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col l8 s12">
            <div className="row">
              <div className="col l12 s12 hide">
                <select
                  defaultValue={"DEFAULT"}
                  onChange={(e) =>
                    setSubcategory(
                      e.target.value.replace(/ /g, "_").toLowerCase()
                    )
                  }
                  // disabled={isSubmenuOpen === ////false}
                  className="browser-default  fabian_multiple_select"
                >
                  <option value="DEFAULT" disabled>
                    Select Subcategory
                  </option>
                  {subNav.map((link, index) => {
                    const { url, icon, label, img, title } = link;
                    return <option key={index}>{title}</option>;
                  })}
                </select>
              </div>

              <div
                style={{
                  marginTop: "2rem",
                }}
                className="col l12 s12"
              >
                <small className="right">* State</small>
                <select
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  className="browser-default  fabian_multiple_select"
                >
                  <option disabled selected>
                    State
                  </option>
                  {India.map((state) => {
                    return (
                      <option key={state.state} value={state.state}>
                        {state.state}
                      </option>
                    );
                  })}
                </select>
              </div>

              {state ? (
                <>
                  <div
                    style={{
                      marginTop: "2rem",
                    }}
                    className="col l12 s12"
                  >
                    <small className="right">* City</small>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="browser-default  fabian_multiple_select"
                    >
                      <option disabled selected>
                        City
                      </option>

                      {India.filter((item) => {
                        if (item.state === state) {
                          return item;
                        } else {
                          return null;
                        }
                      }).map((item) => {
                        if (item.cities.length > 0) {
                          return item.cities.map((city, index) => {
                            return (
                              <option key={index} value={city}>
                                {city}
                              </option>
                            );
                          });
                        } else {
                          return null;
                        }
                      })}
                    </select>
                  </div>
                </>
              ) : null}

              <div className="col l12 s12">
                <small className="right">* required</small>
              </div>
              {/* address start */}
              <div className="col l12 s12">
                <small className="right">current Address</small>
                <div className=" input-field input-outlined l6 ">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    id="your_address"
                    type="text"
                  />
                  <label htmlFor="your_address">Address</label>
                </div>
              </div>

              {/* address end */}
              {/* body type start */}
              <div
                style={{
                  marginTop: "2rem",
                }}
                className="col l12 s12"
              >
                <small className="right">* BodyType</small>
                <select
                  onChange={(e) => setBodyType(e.target.value)}
                  value={bodyType}
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

              {/* body type end */}
              {/* fuel type start */}
              <div
                style={{
                  marginTop: "2rem",
                }}
                className="col l12 s12"
              >
                <small className="right">* Fuel Type</small>
                <select
                  onChange={(e) => setFuelType(e.target.value)}
                  value={fuelType}
                  className="browser-default  fabian_multiple_select"
                >
                  <option disabled selected>
                    Fuel Type
                  </option>

                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="LPG">LPG</option>
                  <option value="CNG">CNG</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>

              {/*  fuel type end */}
              {/* transmission type start */}
              <div
                style={{
                  marginTop: "2rem",
                }}
                className="col l12 s12"
              >
                <small className="right">* Transmission Type</small>
                <select
                  onChange={(e) => setTransmissionType(e.target.value)}
                  value={transmissionType}
                  className="browser-default  fabian_multiple_select"
                >
                  <option disabled selected>
                    Transmission Type
                  </option>

                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>

              {/*  transmission type end */}
              {/* price type start */}
              <div
                style={{
                  marginTop: "2rem",
                }}
                className="col l12 s12"
              >
                <select
                  onChange={(e) => setPriceType(e.target.value)}
                  value={priceType}
                  className="browser-default  fabian_multiple_select"
                >
                  <option disabled selected>
                    Price Type
                  </option>

                  <option value="Fixed">Fixed</option>
                  <option value="Negotiable">Negotiable</option>
                </select>
              </div>

              {/*  price  type end */}
              {/* km driven  start */}
              <div
                style={{
                  marginTop: "2rem",
                }}
                className="col l12 s12"
              >
                <small className="right">* Km Driven</small>
                <select
                  onChange={(e) => setKmDriven(e.target.value)}
                  value={kmDriven}
                  className="browser-default  fabian_multiple_select"
                >
                  <option disabled selected>
                    KM Driven
                  </option>

                  <option value="0 - 1000km">0 - 1000km</option>
                  <option value="1001- 2000km">1001- 2000km</option>
                  <option value="2001 - 3000km">2001 - 3000km</option>
                  <option value="3001 - 4000k">3001 - 4000km</option>
                  <option value="4001 - 5000km">4001 - 5000km</option>
                  <option value="5001 - 6000km">5001 - 6000km</option>
                  <option value="6001 - 7000km">6001 - 7000km</option>
                  <option value="7001 - 8000km">7001 - 8000km</option>
                  <option value="8001 - 9000km">8001 - 9000km</option>
                  <option value="9001 - 10000km">9001 - 10000km</option>
                  <option value=" 100001-20000 km">10001 - 20000 km</option>
                  <option value=" 200001-30000 km">20001 - 30000 km</option>
                  <option value=" 300001-40000 km">30001 - 40000 km</option>
                  <option value=" 400001-50000 km">40001 - 50000 km</option>
                  <option value=" 500001-60000 km">50001 - 60000 km</option>
                  <option value=" 600001-70000 km">60001 - 70000 km</option>
                  <option value=" 700001-80000 km">70001 - 80000 km</option>
                  <option value=" 800001-90000 km">80001 - 90000 km</option>
                  <option value=" 900001-100000 km">90001 - 100000 km</option>
                  <option value=" 100000 + km">1000000 km</option>
                </select>
              </div>

              {/* km driven  end */}
              {/* owner type */}
              <div
                style={{
                  marginTop: "2rem",
                }}
                className="col l12 s12"
              >
                <select
                  onChange={(e) => setOwnerType(e.target.value)}
                  value={ownerType}
                  className="browser-default  fabian_multiple_select"
                >
                  <option disabled selected>
                    owner type
                  </option>

                  <option value="First owner">First owner</option>
                  <option value="Second Owner">Second Owner</option>
                  <option value="2+ owners">2+ owners</option>
                </select>
              </div>

              {/*owner type end */}

              <div className="col l12 s12">
                <div className="row">
                  <div className="col l6 s12">
                    <small
                      style={{
                        //if phorne is not available then display this message
                        color: phoneNumber.length !== 10 ? "red" : "green",
                      }}
                      className="right"
                    >
                      {" "}
                      *phone number
                    </small>
                    <div className=" input-field input-outlined l6 ">
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        id="phone"
                        type="number"
                        required
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                  <div className="col l6 s12">
                    <small className="right">*maximum price</small>
                    <div className=" input-field input-outlined l6 ">
                      <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        id="price"
                        type="text"
                      />
                      <label htmlFor="price">Price</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col l12 s12 hide">
                <div className="row">
                  <div className="col l6 s6">
                    <div className=" input-field input-outlined l6 ">
                      <input
                        disabled={true}
                        value={user.email}
                        id="your_address"
                        type="text"
                      />
                      {/*<label for="your_address">Address</label>*/}
                    </div>
                  </div>
                  <div className="col l12 s6">
                    <div className=" input-field input-outlined l6 ">
                      <input
                        disabled={true}
                        value={user.name}
                        id="your_address"
                        type="text"
                      />
                      {/*<label for="your_address">Address</label>*/}
                    </div>
                  </div>
                </div>
              </div>
              <h5>Product Information</h5>

              <div className="col l12 s12 hide">
                <small className="right">*number plate</small>
                <div className=" input-field input-outlined l6 ">
                  <input
                    onChange={(e) => setNumberPlate(e.target.value)}
                    value={numberPlate}
                    id="price"
                    type="text"
                  />
                  <label htmlFor="numberPlate">number Plate</label>
                </div>
              </div>
              <div className="col l12 s12">
                <small className="right"> * atleast 5 characters minimum</small>
                <div className=" input-field input-outlined l6 ">
                  <textarea
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                      height: "80px",
                      background: "#fff",
                      padding: 10,
                    }}
                    value={title}
                    id="title"
                    type="text"
                    className="col  s12"
                  ></textarea>
                  <label htmlFor="title">Car name</label>
                </div>
              </div>

              <div className="col l12 s12">
                <small className="right"> *25 characters minimum</small>
                <div className=" input-field input-outlined l6 ">
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    style={{
                      height: "200px",
                      background: "#fff",
                      padding: "10px 10px",
                      resize: "vertical",
                    }}
                    // minLength
                    id="description"
                    type="text"
                  ></textarea>
                  <label htmlFor="description">Product Description</label>
                </div>
              </div>

              <div className="col l12 s12">
                <div className="row">
                  <div className="col l12">
                    <button onClick={UpdateHandler} className="btn">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
