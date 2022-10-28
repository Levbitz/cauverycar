import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./AdThumbNail.css";
//import Fig from "../../lib/images/logo.png";
//import DefaultImg from "../../lib/images/d4.gif";

const AdThumbNail = ({ item }) => {
  const { images, title, price } = item.data;

  //console.log(item.data.category);

  // const [placeholderImg, setPlaceholderImg] = useState(DefaultImg);
  // useEffect(() => {
  //   setPlaceholderImg(images[0]);
  // }, [images]);

  const navigate = useNavigate();
  //console.log(images);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    arrows: false,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <div key={item.id} className="col l3 m4 s6 levbitz_thumbNail">
      <div
        onClick={() => {
          navigate(`/single_car/${item.id}`);
        }}
        className="card z-depth-0 levbitz_card"
        style={{
          borderRadius: "15px",
        }}
      >
        <div className="card-image">
          {images ? (
            <>
              <Slider {...settings}>
                {item.data.images
                  .reverse()
                  .slice(0, 2)

                  .map((imgUrl, index) => {
                    return (
                      <>
                        <div key={index}>
                          <img
                            src={imgUrl}
                            className="responsive-img"
                            style={{
                              borderRadius: 10,
                              height: 160,
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </>
                    );
                  })}
              </Slider>
            </>
          ) : null}

          <span
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              margin: "0",
              padding: "0 4px",
              borderTopRightRadius: "5px",
              background: "#031b34",
            }}
            className="card-title"
          >
            {item.data.fuelType}
          </span>
        </div>
        <div
          style={{
            padding: "5px 10px",
          }}
        >
          <p
            style={{
              margin: "0",
              padding: "0",
            }}
            className="truncate thumbNail_title"
          >
            {title}
          </p>

          <p
            className="hide-on-med-and-down"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: -15,
              padding: 0,
            }}
          >
            <span>{item.kms ? item.kms + "" + "Kms" : null} </span>
            <span className="hide-on-med-and-down">
              {item.owner ? (
                item.owner
              ) : (
                <>
                  <span className="white-text">.</span>
                </>
              )}
            </span>
          </p>

          <p
            className="truncate"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 0,
              padding: 0,
            }}
          >
            <span className="truncate tumbnail_price truncate">₹:{price}</span>
            <span className="prico_type hide-on-med-and-down ">
              {item.data.priceType}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdThumbNail;
