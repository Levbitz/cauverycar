import React from "react";
//import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import One from "../../lib/images/4.avif";
import Two from "../../lib/images/7.jpeg";
import Three from "../../lib/images/4.avif";
import Four from "../../lib/images/4.avif";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  const Sdata = [
    {
      id: 1,
      title: "up to 10% Off on new customers",
      desc: "Make your time perfect with the perfect watch ,your wrist deserves the best thing to wear. Add one more to your expectation.",
      side: One,
      bg: "#094c59",
      btnBg: "#ffe799",
    },
    {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Classic! That’s how one would describe you when you are dressed in a sports T-shirt and a pair of striped chinos. To complete this look, you can opt for a pair of white sports shoes or a pair of brown boat shoes.",
      side: Two,
      bg: "#080713",
      btnBg: "#ffe799",
    },
    {
      id: 3,
      title: "The World’s Most Comfortable Cars",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      side: Three,
      bg: "#011e32",
      btnBg: "#ffe799",
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      side: Four,
      bg: "#080713",
      btnBg: "#ffe799",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div
                style={{
                  backgroundImage: `url(${value.side})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="levbitz_slider_container "
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <div className="col l7">
                      <div className="left">
                        <h2 className="white-text">{value.title}</h2>
                        <p className="white-text">{value.desc}</p>
                        <button
                          style={{
                            backgroundColor: value.btnBg,
                            borderRadius: 3,

                            fontSize: 13,
                            fontWeight: 800,
                          }}
                          className="btn black-text"
                        >
                          Visit Collections
                        </button>
                      </div>
                    </div>
                    <div className="col l5 hide-on-med-and-down">
                      <div className="right">
                        {/*   < img
                          className="responsive-img"
                          src={value.side}
                          alt=""
                        />*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default HomeCarousel;
