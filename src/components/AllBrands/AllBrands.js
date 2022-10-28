import React from "react";
import { Link } from "react-router-dom";
import "./AllBrands.css";

function AllBrands() {
  return (
    <div className="all_brand_wrap">
      <div className="container ">
        <h4 className="levbitz_subtitle white-text">All Brands</h4>
        <div className="row">
          <SingleBrand
            brandUrl="maruti_suzuki"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=75"
            }
            brandName="Maruti Suzuki"
          />
          <SingleBrand
            brandUrl="hyundai"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=75"
            }
            brandName="Hyundai"
          />
          <SingleBrand
            brandUrl="tata"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=75"
            }
            brandName="Tata"
          />
          <SingleBrand
            brandUrl="mahindra"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=75"
            }
            brandName="Mahindra"
          />
          <SingleBrand
            brandUrl="toyota"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=75"
            }
            brandName="Toyota"
          />
          <SingleBrand
            brandUrl="kia"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=75"
            }
            brandName="Kia"
          />
          <SingleBrand
            brandUrl="honda"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=75"
            }
            brandName="Honda"
          />
          <SingleBrand
            brandUrl="mercedes-benz"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=75"
            }
            brandName="Mercedes Benz"
          />
          <SingleBrand
            brandUrl="citroen"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/74/brands/logos/citroen1649763818937.jpg?v=1649763819072&q=75"
            }
            brandName="Citroen"
          />
          <SingleBrand
            brandUrl="volkswagen"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=75"
            }
            brandName="Volkswagen"
          />
          <SingleBrand
            brandUrl="bmw"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=75"
            }
            brandName="BMW"
          />
          <SingleBrand
            brandUrl="skoda"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda.jpg?v=1630055414864&q=75"
            }
            brandName="Skoda"
          />
          <SingleBrand
            brandUrl="mg"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=75"
            }
            brandName="MG"
          />
          <SingleBrand
            brandUrl="land-rover"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=75"
            }
            brandName="Land Rover"
          />
          <SingleBrand
            brandUrl="audi"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=75"
            }
            brandName="Audi"
          />
          <SingleBrand
            brandUrl="volvo"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=75"
            }
            brandName="Volvo"
          />
          <SingleBrand
            brandUrl="renault"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/45/brands/logos/renault.jpg?v=1630057266767&q=75"
            }
            brandName="Renault"
          />
          <SingleBrand
            brandUrl="jeep"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/43/brands/logos/jeep.jpg?v=1631163646486&q=75"
            }
            brandName="Jeep"
          />
          <SingleBrand
            brandUrl="jaguar"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/44/brands/logos/jaguar.jpg?v=1631163525508&q=75"
            }
            brandName="Jaguar"
          />
          <SingleBrand
            brandUrl="nissan"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/nissan.jpg?v=1631163973143&q=75"
            }
            brandName="Nissan"
          />
          <SingleBrand
            brandUrl="rolls-royce"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/25/brands/logos/rolls-royce.jpg?v=1631164135042&q=75"
            }
            brandName="Rolls Royce"
          />
          <SingleBrand
            brandUrl="lexus"
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/lexus.png?v=10&q=75"
            }
            brandName="Lexus"
          />
          <SingleBrand
            brandUrl="lamborghini"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/30/brands/logos/lamborghini.jpg?v=1631163814246&q=75"
            }
            brandName="Lamborghini"
          />
          <SingleBrand
            brandUrl="porsche"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/19/brands/logos/porsche.jpg?v=1631164048727&q=75"
            }
            brandName="Porsche"
          />
          <SingleBrand
            brandUrl="tesla"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/73/brands/logos/tesla.jpg?v=1631163609705&q=75"
            }
            brandName="Tesla"
          />
          <SingleBrand
            brandUrl="mini"
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/mini.png?v=10&q=75"
            }
            brandName="Mini"
          />
          <SingleBrand
            brandUrl="maserati"
            src={"https://imgd.aeplcdn.com/0X0/n/gph63sa_1483779.jpg?q=75"}
            brandName="Maserati"
          />
          <SingleBrand
            brandUrl="ola"
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/119/brands/logos/ola1656591185411.jpg?v=1656591185786&q=75"
            }
            brandName="Ola"
          />
          <SingleBrand
            brandUrl="ferrari"
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/ferrari.png?v=10&q=75"
            }
            brandName="Ferrari"
          />
          <SingleBrand
            brandUrl="bugatti"
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/bugatti.png?v=10&q=75"
            }
            brandName="Bugatti"
          />
          <SingleBrand
            brandUrl="isuzu"
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/isuzu.png?v=10&q=75"
            }
            brandName="Isuzu"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/bentley.png?v=10&q=75"
            }
            brandName="Bentley"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/77/brands/logos/mclaren1649762557086.jpg?v=1649762557267&q=75"
            }
            brandName="McLaren"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/force-motors.png?v=10&q=75"
            }
            brandName="Force Motors"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/mitsubishi.png?v=10&q=75"
            }
            brandName="Mitsubishi"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/datsun.png?v=10&q=75"
            }
            brandName="Datsun"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/cw/brands/logos/aston-martin.png?v=10&q=75"
            }
            brandName="Aston Martin"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/113/brands/logos/fisker1650348917218.jpg?v=1650348917359&q=75"
            }
            brandName="Fisker"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/111/brands/logos/byd1650348943682.jpg?v=1650348943775&q=75"
            }
            brandName="BYD"
          />
          <SingleBrand
            src={
              "https://imgd.aeplcdn.com/0X0/n/cw/ec/105/brands/logos/mean-metal-motors1647236193395.jpg?v=1647236193731&q=75"
            }
            brandName="Mean Metal Motors"
          />
          <SingleBrand
            src={"https://imgd.aeplcdn.com/0X0/n/v16i3sa_1483519.jpg?q=75"}
            brandName="Havel"
          />
        </div>
      </div>
    </div>
  );
}

export default AllBrands;

const SingleBrand = ({ src, brandName, brandUrl }) => {
  return (
    <>
      <Link to={`/brand/${brandUrl}`}>
        <div className="col l2 s6">
          <div
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              marginBottom: "1rem",
              background: "#f8fbff",
            }}
            className=" center"
          >
            <img
              style={{
                borderRadius: "20px",
                width: 50,
                objectFit: "contain",
                height: 50,
              }}
              className="responsive-img"
              src={src}
              alt=""
            />
            <p className="center">{brandName}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
