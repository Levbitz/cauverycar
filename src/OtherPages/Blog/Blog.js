import React from "react";
import SingleBlog from "../../components/SingleBlog/SingleBlog";

import SideBlog from "../../components/SideBlog/Sideblog";
import "./Blog.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Blog() {
  return (
    <>
      <div
        style={{
          background: "#094c59",
          height: 60,
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          paddingTop: "100px",
        }}
      >
        <div className="container">
          <div class="row">
            <div className="col l9">
              <SingleBlog />
              <SingleBlog />
              <SingleBlog />
            </div>

            <div className="col l3">
              <div>
                <SideBlog />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
