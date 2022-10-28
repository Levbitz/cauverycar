import React from "react";
import "./SingleBlog.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function SingleBlog() {
  return (
    <div className="">
      <div
        style={{
          background: "#f8fbff",
        }}
        className="levbitz_single_blog_wrap"
      >
        <h5>The 2020 Mercedes-AMG GLE 63 Coupe</h5>
        <small>Mar 3 • Auto Mode</small>
        <div className="row">
          <div className="col l4">
            <div>
              <img
                className="responsive-img"
                src="https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2020/03/03140242/3.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="col l8">
            <div>
              <p>
                Mercedes Benz launched the GLE 63 last year in November at the
                LA Auto Show. The SUV, along with its bigger brother,
              </p>
              <Link
                style={{
                  borderRadius: "5px",
                }}
                to="/single_blog"
                className="btn red btn-small"
              >
                read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
