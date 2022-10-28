import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { DataContext } from "../../context/ProductContext/ProductContext";
import "./SearchForm.css";
import { BiSearchAlt } from "react-icons/bi";
import { db } from "../../lib/Firebase/firebase";
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

function SearchForm() {
  //const { query } = useParams();
  const navigate = useNavigate();

  // const { products } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const checckerRef = collection(db, "ads");

  useEffect(() => {
    const q = query(
      checckerRef,
      where("active", "==", true),
      // where("category", "==", "maruti_suzuki"),
      // where("subcategory", "==", subCategoryUrl),
      // // where("district", "==", district),
      orderBy("createdAt", "desc")
      // limit(20)
    );
    onSnapshot(q, (snapshoot) => {
      const term = snapshoot.docs.map((doc) => doc.data());

      // console.log(term);
      const ubsa = [
        ...term
          .reduce((map, obj) => map.set(obj.title, obj), new Map())
          .values(),
      ];

      setResult(ubsa);
    });
  }, []);

  console.log(result);
  return (
    <>
      <div className="lb_form_wrap ">
        <input
          style={{
            height: "30px",
            margin: "0px",
            padding: "0px",
            border: "none",
          }}
          type="text"
          placeholder="search"
          name=""
          id=""
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <BiSearchAlt size={40} color={"#fff"} className="lb_search_icon" />
      </div>
      <div
        style={{
          position: "",
          height: "100%",
        }}
      >
        <div
          className="  levbitz_search_result"
          style={{
            display: searchTerm.length > 0 ? "block" : "none",
            zIndex: "99",
            position: "absolute",

            height: "50px !important",

            top: "150px",
            bottom: 100,
            left: 0,
            right: 0,
            margin: "auto",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div className=" inner container-fluid">
            <div className="row">
              <div className="col l1 offset-l1"></div>
              <div className="col l5 s10  nyoi_nyoi ">
                {result

                  .filter((value) => {
                    if (searchTerm === "") {
                      return "";
                    } else {
                      return value.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                    }
                  })
                  .slice(0, 10)
                  .map((item, index) => {
                    console.log(typeof item);
                    return (
                      <div
                        onClick={() => {
                          navigate(`/q/${item.title}`);
                          setSearchTerm("");
                        }}
                        style={{
                          height: 45,
                          display: "flex",
                          margin: 0,
                          padding: 0,
                          // borderBottom: ".2px solid #fff",
                        }}
                        className="row  search_result_title "
                      >
                        <div key={index} className="col l2 s2 valign-wrapper">
                          <img
                            style={{
                              width: 80,
                              height: 35,
                              objectFit: "contain",
                              borderRadius: "100px !important",
                              paddingTop: 10,
                            }}
                            className="responsive-img floating"
                            src={item.images[0]}
                            alt=""
                          />
                        </div>
                        <div
                          style={{
                            height: "50px",
                          }}
                          className="col l10 s10 valign-wrapper"
                        >
                          <p
                            className="valign-wrapper truncate  "
                            style={{
                              padding: 0,
                              fontSize: "15px",
                              fontWeight: "bold",
                              width: "100%",
                              textTransform: "capitalize",
                            }}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="col l4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchForm;
