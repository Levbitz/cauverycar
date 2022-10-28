import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SeachQueries } from "../../lib/SearchQueries/SearchQueries";
//import { DataContext } from "../../context/ProductContext/ProductContext";
import "./SearchForm.css";
import { BiSearchAlt } from "react-icons/bi";

function SearchForm() {
  //const { query } = useParams();
  const navigate = useNavigate();

  // const { products } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [round, setRound] = useState("No data available");
  const [sam, setSam] = useState("");

  useEffect(() => {
    const me = SeachQueries.filter((value) => {
      if (searchTerm === "") {
        return "";
      } else {
        if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          // console.log(value);
          return value;
        } else {
          setSam("Noda");
        }
      }
    });

    setSam(me);
    // .slice(0, 10)
    // .map((item, index) => {
    //   setSam(item);
    // });
  }, [searchTerm, SeachQueries]);

  console.log(sam.length);

  return (
    <>
      <div className="lb_form_wrap ">
        <input
          style={{
            height: "30px",
            margin: "0px",
            padding: "0px",
            border: "none",
            zIndex: "8000 !important",
          }}
          type="text"
          placeholder="search"
          name=""
          id=""
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <BiSearchAlt
          onClick={() => {
            navigate(round).then(() => {
              setSearchTerm("");
            });
          }}
          size={40}
          color={"#fff"}
          className="lb_search_icon"
        />
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
            zIndex: "99 !important",
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
                {sam.length > 0 ? (
                  sam.slice(0, 10).map((item, index) => {
                    return (
                      <div
                        onClick={() => {
                          navigate(item.url).then(() => {
                            setSearchTerm("");
                          });
                        }}
                        style={{
                          height: 45,
                          display: "flex",
                          margin: 0,
                          padding: 0,
                          alignItems: "center",
                          justifyContent: "center",
                          // borderBottom: ".2px solid #fff",
                        }}
                        className="row  search_result_title "
                      >
                        <div
                          key={index}
                          className="col l2 s2 valign-wrapper"
                        ></div>
                        <div
                          style={{
                            height: "50px",
                          }}
                          className="col l10 s10 valign-wrapper"
                        >
                          <p
                            className="valign-wrapper truncate center  "
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
                  })
                ) : (
                  <p
                    className="valign-wrapper truncate center  "
                    style={{
                      padding: 0,
                      fontSize: "15px",
                      fontWeight: "bold",
                      width: "100%",
                      textTransform: "capitalize",
                    }}
                  >
                    No Data
                  </p>
                )}
                {/*SeachQueries.filter((value) => {
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
                    //  console.log(item.title);

                    return (
                      <div
                        onClick={() => {
                          navigate(item.url).then(() => {
                            setSearchTerm("");
                          });
                        }}
                        style={{
                          height: 45,
                          display: "flex",
                          margin: 0,
                          padding: 0,
                          alignItems: "center",
                          justifyContent: "center",
                          // borderBottom: ".2px solid #fff",
                        }}
                        className="row  search_result_title "
                      >
                        <div
                          key={index}
                          className="col l2 s2 valign-wrapper"
                        ></div>
                        <div
                          style={{
                            height: "50px",
                          }}
                          className="col l10 s10 valign-wrapper"
                        >
                          <p
                            className="valign-wrapper truncate center  "
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
                  })*/}
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
