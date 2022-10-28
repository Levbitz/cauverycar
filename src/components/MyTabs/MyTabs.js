import React, { useState } from "react";

//import subsubNav from "../../lib/Data/Data";
import { SidebarData } from "../../lib/SidebarData/SidebarData";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCaroselsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: false,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

function MyTabs() {
  const [value, setValue] = useState(0);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  //console.log(value);

  const { subNav, title, categoryUrl } = SidebarData[value];
  return (
    <div>
      <section className="levbitz_container ">
        <div>
          <div
            style={{
              padding: "0px",
              marginTop: "10px",
            }}
            className="container "
          >
            <div className="row heroslider_row">
              <Slider {...HeroCaroselsettings}>
                {SidebarData.map((item, index) => {
                  const { title, img } = item;
                  return (
                    <div key={index}>
                      <div
                        style={{
                          background: "#283593",
                        }}
                        className="chip white-text"
                        onClick={() => {
                          setValue(index);
                          setIsSubmenuOpen(true);
                        }}
                      >
                        <span
                          style={{
                            fontSize: "1.5rem",
                          }}
                        >
                          {title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          {/*mobo mene*/}
          <div className="">
            <div className="row">
              <div className="hide-on-large-only">
                <div className="col l12 s12 ">
                  {isSubmenuOpen ? (
                    <article
                      onMouseLeave={() => {
                        setIsSubmenuOpen(false);
                      }}
                      style={{
                        height: "250px",
                        borderRadius: "10px",
                        padding: "1rem",
                      }}
                      className=" center"
                    >
                      <div
                        style={{
                          zIndex: "999",
                        }}
                        className="sidebar-subsubNav  "
                      >
                        {subNav.map((link, index) => {
                          const { icon, label, subCategoryUrl, title } = link;
                          return (
                            <div
                              style={{
                                marginBottom: "1rem",
                              }}
                              key={index}
                            >
                              <Link to={`/`}>{title}</Link>
                            </div>
                          );
                        })}
                      </div>
                    </article>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/*mobo mene*/}

          <div className="container showcase  hide-on-med-and-down">
            <div className="row">
              <div
                style={{
                  zIndex: "1",
                }}
                className="col l12"
              >
                {isSubmenuOpen ? (
                  <article
                    onMouseLeave={() => {
                      setIsSubmenuOpen(false);
                    }}
                    style={{
                      height: "100px",
                      borderRadius: "10px",
                      padding: "1rem",
                      zIndex: "999",
                    }}
                    className="white"
                  >
                    <div className="sidebar-subsubNav">
                      {subNav.map((link, index) => {
                        const { icon, label, subCategoryUrl, title, path } =
                          link;
                        return (
                          <div
                            className="col l3 s12"
                            key={index}
                            style={{
                              marginBottom: "1rem",
                            }}
                          >
                            <Link to={path}>
                              {icon}
                              {title}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <div></div>
                    </div>
                  </article>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyTabs;

// <TabPanel>
//           <h2>Any content 1</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 2</h2>
//         </TabPanel>
