import React from "react";
import "./SocialMedia.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

//linkdin
import { BsLinkedin } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="levbitz_social_wrap">
      <div className="container ">
        <div className="row">
          <div className="col l5 s12 ">
            <h5>Connect With Us</h5>
          </div>
          <div className="col l7  s12  center">
            <div
              style={{
                display: "flex",
                alignItems: "center",

                margin: "1rem  auto",
              }}
            >
              <span className="levbitz_social_icon">
                <BsFacebook color="blue" size={30} />
              </span>
              <span className="levbitz_social_icon">
                <AiFillTwitterCircle color="blue" size={35} />
              </span>
              <span className="levbitz_social_icon">
                <a
                  href="https://www.youtube.com/channel/UCy1uWwKhW_cl4G3xxvpenGg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube color="red" size={40} />
                </a>
              </span>
              <span className="levbitz_social_icon">
                <BsLinkedin color="blue" size={30} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
