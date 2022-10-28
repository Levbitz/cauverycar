import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
//import Fig from "../../lib/images/logo.png";
//import DefaultImg from "../../lib/images/d4.gif";

const AdThumbNailTwo = ({ item }) => {
  const { images, title, price } = item;

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
    arrows: false,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <div key={item.id} className="col l2 m4 s6">
      <div
        onClick={() => {
          //navigate(`/pad/${item.id}`);
          navigate("single");
        }}
        className="card z-depth-0 levbitz_card"
        style={{
          borderRadius: "15px",
        }}
      >
        {/*<div className="card-image">
          <img
            alt="img"
            src={images ? images[0] : DefaultImg}
            className="responsive-img"
            style={{
              borderRadius: 10,
              height: 160,
              objectFit: "cover",
            }}
          />
          </div>*/}
        <div className="card-image">
          {images ? (
            <>
              <Slider {...settings}>
                {images.map((imgUrl) => {
                  return (
                    <>
                      {console.log(imgUrl)}
                      <div key={imgUrl}>
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
              fontSize: ".7rem",
              margin: "0",
              padding: "0 4px",
              borderTopRightRadius: "5px",
              background: "#094c59",
            }}
            className="card-title"
          >
            {/*item.data.promotionType*/}
          </span>
        </div>
        <div
          style={{
            padding: "18px 10px",
          }}
          className="card-content"
        >
          <p className="truncate">{item.make}</p>

          <p>
            <span>{item.kms ? item.kms : <>.</>}</span>
            <span>{item.owner ? item.owner : <>.</>}</span>
          </p>
          <small
            className="truncate"
            style={{
              margin: 0,
              padding: 0,
              fontWeight: "600",
            }}
          >
            ₹: {item.price}
          </small>
        </div>
      </div>
    </div>
  );
};

export default AdThumbNailTwo;
