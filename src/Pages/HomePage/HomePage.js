import React, { useState, useEffect } from "react";
import AdThumbNail from "../../components/AdThumbNail/AdThumbNail";

import HomeShowcase from "../../components/HomeShowcase/HomeShowcase";

import { cars } from "../../lib/data";

import SingleBlog from "../../components/SingleBlog/SingleBlog";
import OurTeam from "../../components/OurTeam/OurTeam";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";

import { db } from "../../lib/Firebase/firebase";

import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import AllBrands from "../../components/AllBrands/AllBrands";

import AutoScroll from "../../components/AutoScroll/AutoScroll";
import CarByLifeStyle from "../../components/CarByLifeStyle/CarByLifeStyle";
import HowWork from "../../components/HowWeWork/HowWork";

function HomePage() {
  const [ads, setAds] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setAds(cars);
    setLoading(false);
  }, [cars]);

  const checckerRef = collection(db, "ads");

  useEffect(() => {
    const q = query(
      checckerRef,
      where("active", "==", true),
      orderBy("createdAt", "desc"),
      limit(8)
    );
    onSnapshot(q, (snapshoot) => {
      setResult(
        snapshoot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [""]);

  return (
    <>
      <Navbar />
      <div className="">
        <HomeShowcase />
        <div
          style={{
            marginTop: 20,
          }}
        >
          <div className="container">
            <h3 className="levbitz_subtitle">Our top brands</h3>
          </div>
          <AutoScroll />
        </div>

        <div
          style={{
            paddingBottom: 20,
            paddingTop: 20,
            background: " #f8fbff",
          }}
        >
          <div className="container ">
            <div className="row">
              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <h5
                  style={{
                    color: "#1a237e",
                    fontWeight: "bold",
                  }}
                >
                  Featured Cars
                </h5>
                <div className="bottom_design"></div>
              </div>
              {result && result.length > 0 ? (
                result.map((item) => {
                  return <AdThumbNail item={item} key={item.id} />;
                })
              ) : (
                <h3>Loading</h3>
              )}
            </div>
          </div>
        </div>

        <AllBrands />
        <HowWork />
        <div className="hww_bg"></div>
        <div
          style={{
            padding: "2rem 0px",
          }}
          className="grey lighten-3 "
        >
          <CarByLifeStyle />
        </div>
        <div
          style={{
            padding: "2rem 0px",
            background: "#031b34",
          }}
        >
          <div className="levbitz_container ">
            <div className="row">
              <h5 className="levbitz_subtitle">Our Blog</h5>
              <div className="col l5 offset-l1">
                <SingleBlog />
              </div>
              <div className="col l5">
                <SingleBlog />
              </div>
              <div className="col l5 offset-l1">
                <SingleBlog />
              </div>
              <div className="col l5">
                <SingleBlog />
              </div>
            </div>
          </div>
        </div>

        <OurTeam />
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
