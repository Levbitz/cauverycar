import React, { useState, useEffect } from "react";
import { auth, db } from "../../lib/Firebase/firebase";
//import Certification from "../../assets/profile/certification.png";
import { MdAutoDelete } from "react-icons/md";
//import AdImg from "./MyProfileAdComponents/AdImg/AdImg";

import {
  collection,
  getDocs,
  query,
  where,
  limit,
  startAfter,
  orderBy,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import "../MyAds/MyAds.css";
import { BiTimer } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";

function NumberPlateSearch() {
  const navigate = useNavigate();
  const [courses, setcourses] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [collectionIsEmpty, setCollectionIsEmpty] = useState(false);
  const [isActivatAd, setIsActiveAd] = useState(true);

  const [searchTerm, setSearchTerm] = useState("KA=01=MS=1868");
  console.log(searchTerm);

  const [error, setError] = useState("");

  const checckerRef = collection(db, "ads");

  const q = query(checckerRef);

  useEffect(() => {
    // effect

    //check size of collection

    setLoading(true);

    getDocs(q).then((snapshoot) => {
      //get snapshot size

      if (snapshoot.size === 0) {
        alert("collection is empty");
        setLoading(false);
        setCollectionIsEmpty(true);
      } else {
        // console.log(snapshoot.docs);
        setLoading(true);
        // setTimeout(() => {

        const term = snapshoot.docs.map((doc) =>
          // console.log(doc.data())
          ({
            id: doc.id,
            data: doc.data(),
          })
        );

        setcourses(term);
        setLoading(false);

        setLastDoc(snapshoot.docs[snapshoot.docs.length - 1]);
      }
    });
    setLoading(false);
  }, [isActivatAd]);

  return (
    <div className="container">
      <div className="row">
        <div className="col l12 s12">
          <div>
            <h4
              style={{
                fontSize: 18,
              }}
              className=""
            >
              Your Ads
            </h4>
            <h2>{searchTerm}</h2>
            {courses.length}
            <div className="row">
              <div className="col l5 s12 ">
                <small className="right">*maximum price</small>
                <div className=" input-field input-outlined l6 ">
                  <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="numberPlate"
                    type="text"
                    name="numberPlate"
                  />
                  <label htmlFor="numberPlate">number Plate</label>
                </div>
              </div>
            </div>

            <div>
              <div>
                {/*<img width={80} src={Certification} alt="" />*/}
                {courses
                  .filter((value) => {
                    if (searchTerm === "") {
                      return "";
                    } else {
                      return value.data.numberPlate === searchTerm;
                    }
                  })

                  .map((cour) => {
                    return (
                      <div
                        style={{
                          opacity: cour.data.active === true ? 1 : 0.8,
                        }}
                        key={cour.id}
                        className="col l4 s12   "
                      >
                        <div
                          style={{
                            border: "2px solid #c62828 ",
                            margin: "10px 10px",
                            borderRadius: 10,
                            height: 160,
                          }}
                          className="row "
                        >
                          <div className="col l3 s3 ">
                            <div
                              style={{
                                marginTop: "30%",
                              }}
                            >
                              {/*  <img
                                className="responsive-img circle"
                                src={cour.data.images[0]}
                                alt=""
                            />*/}
                            </div>
                          </div>
                          <div className="col l9 s8 ">
                            <div
                              style={{
                                marginBottom: "1rem",
                              }}
                            >
                              <h6
                                style={{
                                  fontSize: 14,
                                  color: "#004d40 ",
                                }}
                                className="my-ads__title truncate"
                              >
                                {cour.data.title}
                              </h6>

                              <small
                                style={{ display: "flex" }}
                                className="black-text"
                              >
                                <BiTimer size={18} style={{ marginRight: 5 }} />{" "}
                                Posted On
                                {cour.data.createdAt.toDate().toDateString()}
                              </small>
                            </div>

                            <div>
                              {cour.data.active === true ? (
                                <div className="row">
                                  <div className="col l2">
                                    <p>
                                      <MdAutoDelete
                                        color="red"
                                        size={20}
                                        onClick={async () => {
                                          await addDoc(
                                            collection(db, "deletedAds"),
                                            {
                                              deletedAt: serverTimestamp(),
                                              id: cour.id,
                                              deleted: false,
                                            }
                                          );
                                          await deleteDoc(
                                            doc(checckerRef, cour.id)
                                          );
                                          await window.location.reload();
                                        }}
                                      />
                                    </p>
                                  </div>
                                  <div className="col l12">
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <Link
                                        to={`/edit/${cour.id}`}
                                        className="left"
                                      >
                                        Edit content
                                      </Link>
                                      <Link
                                        to={`/edit_img/${cour.id}`}
                                        className="right"
                                      >
                                        Edit Images
                                      </Link>
                                    </div>
                                    <p>Add is active</p>
                                  </div>
                                  <small
                                    onClick={() => {
                                      window.confirm(
                                        "Are you sure you want to Deactivate  this ad?"
                                      ) &&
                                        updateDoc(doc(db, "ads", cour.id), {
                                          active: false,
                                          promotionType: "Free Ad",
                                        }).then(() => {
                                          alert(
                                            "Ad Deactivated successfully As Free Ad"
                                          );
                                          window.location.reload();
                                          navigate("/");
                                        });
                                    }}
                                    style={{
                                      backgroundColor: "red",
                                      color: "#fff",
                                      padding: "0.1rem .5rem",
                                      borderRadius: "0.1rem",
                                      cursor: "pointer",
                                      marginTop: "5rem !important",
                                      fontSize: ".9rem",
                                    }}
                                  >
                                    Deactivate Ad
                                  </small>
                                </div>
                              ) : (
                                <>
                                  <div className="row">
                                    <div className="col l2">
                                      <p>
                                        <p>
                                          <MdAutoDelete
                                            size={14}
                                            onClick={async () => {
                                              await addDoc(
                                                collection(db, "deletedAds"),
                                                {
                                                  deletedAt: serverTimestamp(),
                                                  id: cour.id,
                                                  deleted: false,
                                                }
                                              );
                                              await deleteDoc(
                                                doc(checckerRef, cour.id)
                                              );
                                              await window.location.reload();
                                            }}
                                          />
                                        </p>
                                      </p>
                                    </div>
                                    <div className="col l10">
                                      <small>Add is not active</small>
                                    </div>
                                    <div className="col l12 s12">
                                      <p>
                                        <Link
                                          style={{
                                            backgroundColor: "#004d40",
                                            color: "#fff",
                                            padding: "0.1rem .5rem",
                                            borderRadius: "0.2rem",
                                            cursor: "pointer",
                                          }}
                                          className=""
                                          to={`/promote/${cour.id}`}
                                        >
                                          Activate Now
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberPlateSearch;
