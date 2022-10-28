import React, { useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import Sidebar from "../SidebarWrapping/SideBar/Sidebar";
//import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
//import { ThemeContext } from "../../../context/ThemeContext/theme";
import { Link } from "react-router-dom";
import Logo from "../../lib/images/logo.png";
import { IoCarSportOutline } from "react-icons/io5";

import "./Navbar.css";
import AccountLinks from "../AccountLinks/AccountLinks";
//import AccountLink from "../../AccountLink/AccountLink";

function Navbar() {
  // const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  //toggle
  // const [click, setClick] = useState(false);
  // const history = useHistory();
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const [navbg, setNavbg] = useState(false);

  const changeBg = () => {
    // alert(window.scrollY);
    if (window.scrollY >= 90) {
      setNavbg(true);
    } else {
      setNavbg(false);
    }
  };

  window.addEventListener("scroll", changeBg);
  return (
    <>
      <nav
        className={navbg ? " z-depth-0  lb_active " : " z-depth-0 lb_nav_wrap"}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col l2 s3">
              {" "}
              <Link to="/" className="brand-logo left">
                <img className="mylogo responsive-img" src={Logo} alt="" />
              </Link>
            </div>
            <div className="col l5 s7   ">
              <div className="hide-on-med-and-down ">
                <SearchForm />
              </div>
            </div>

            <div className="col l4  s1  offset-l1 ">
              <div className="row ">
                <div className="col l8 hide-on-med-and-down">
                  <AccountLinks />
                </div>
                <div className="col l2 s1">
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <Sidebar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div></div>
    </>
  );
}

export default Navbar;
