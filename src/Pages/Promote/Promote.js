import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//import { useGlobalContext } from "../../lib/context/GlobalContext/GlobalContext";
import Navbar from "../../components/Navbar/Navbar";
import { RiVipCrown2Fill } from "react-icons/ri";
import "./Promote.css";
import { db } from "../../lib/Firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import AdminNav from "../../components/AdminNavbar/AdminNav";
import Footer from "../../components/Footer/Footer";
////import NavbarWrap from "../../components/Navbar/NavbarWrap";

function Promote() {
  const [item, setItem] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    const docRef = doc(db, "ads", id);
    getDoc(docRef).then((doc) => {
      //console.log(doc.data().title);
      setItem(doc.data());
      setItem({
        id: doc.id,
        title: doc.data().title,
        author: doc.data().author,
      });
    });
  }, []);

  console.log(item);

  const FreeAdHandler = () => {
    const docRef = doc(db, "ads", id);
    updateDoc(docRef, {
      active: true,
      promotionType: "Free Ad",
    }).then(() => {
      alert("Ad promoted successfully As Free Ad");
      navigate("/profile");
    });
  };

  return (
    <>
      <AdminNav />
      <div>
        <div className="activation_wrapper">
          <div className="container">
            <div className="row">
              <div className="col l5 s12">
                <div className="hide-on-med-and-down">
                  <img
                    className="responsive-img"
                    src="https://uganto.com/static/media/payment.dd316bdc5c2cddee118ac518e21a4fda.svg"
                    alt=""
                  />
                </div>
              </div>

              <div className="col l6 offset-l1 s12">
                <div>
                  <div
                    onClick={() => navigate("/profile")}
                    className="price_selection_wrap"
                  >
                    <div
                      style={{
                        padding: "10px 0px",
                        borderRadius: "5px",
                      }}
                    >
                      <h5 className="center white-text">Activate Later</h5>
                    </div>
                  </div>

                  <div
                    onClick={FreeAdHandler}
                    className="red price_selection_wrap "
                  >
                    <div
                      style={{
                        padding: "10px 0px",
                        borderRadius: "5px",
                      }}
                    >
                      <h5 className="center">Activate Now</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col l12">
                <h5>Notice</h5>
                <p>
                  Activated ads will be displayed on the website. and will be
                  visible to all users who visit the website.
                </p>

                <p>
                  Inactive ads will not be displayed on the website. and will
                  not be visible to all users who visit the website. but the be
                  visible to admins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Promote;
