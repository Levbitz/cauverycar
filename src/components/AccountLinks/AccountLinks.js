import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContactSvg from "../../lib/images/contact.png";

import "./AccountLink.css";

function AccountLinks() {
  // const { user } = useContext(AuthContext);

  return (
    <>
      <div className="row">
        <div className="col l4">
          <Link
            style={{ height: 30, marginTop: -10 }}
            to="/about"
            className=" levbitz_account_link_bg center-align"
          >
            about
          </Link>
        </div>
        <div className="col l4">
          <Link
            style={{ height: 30, marginTop: -10 }}
            to="/gallary"
            className=" levbitz_account_link_bg center-align"
          >
            Gallery
          </Link>
        </div>
        <div className="col l4">
          <Link
            style={{ height: 30, marginTop: -10 }}
            to="/contact"
            className=" levbitz_account_link_bg center-align"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default AccountLinks;
