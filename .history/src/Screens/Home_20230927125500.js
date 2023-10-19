/** @format */

import React from "react";
import TemplateCarousel from "../Components/Template/TemplateCarousel";
import ProductCarousel from "../Components/Template/ProductCarousel";
import RelatedCarousel from "../Components/Template/RelatedCarousel";

const Home = () => {
  const [ bakeryProducts , setBaner]

  // const bakeryProducts = [
  //   {
  //     img: "/Image/19.png",
  //     title: "Bread",
  //     mrp: "800",
  //     discount: "950",
  //     offer: "Min 50% off",
  //   },
  //   {
  //     img: "/Image/20.png",
  //     title: "Pastries",
  //     mrp: "800",
  //     discount: "950",
  //     offer: "Min 50% off",
  //   },
  //   {
  //     img: "/Image/21.png",
  //     title: "Cookies",
  //     mrp: "800",
  //     discount: "950",
  //     offer: "Min 50% off",
  //   },
  // ];

  const partyProduct = [
    {
      img: "/Image/22.png",
      title: "Bread",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/23.png",
      title: "Pastries",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/24.png",
      title: "Cookies",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
  ];

  return (
    <>
      <TemplateCarousel />

      <div className="multi-background-heading">
        <p className="heading">Cakes</p>
        <ProductCarousel query='cake' />
        <button className="last-button">View More</button>
      </div>

      <div className="Near_You">
        <img src="/Image/16.png" alt="" className="backImg" />
        <p className="title">Check out near by you</p>

        <div className="three_div">
          <div className="Main">
            <img src="/Image/13.png" alt="" />
            <p>Decorator’s</p>
          </div>
          <div className="Main">
            <img src="/Image/14.png" alt="" />
            <p>Gift’s</p>
          </div>
          <div className="Main">
            <img src="/Image/15.png" alt="" />
            <p>Return Gift’s</p>
          </div>
        </div>
      </div>

      <div className="shop_product">
        <div className="Heading">
          <p>Bakery Product’s</p>
          <select>
            <option>Select Bakery Option's</option>
            <option></option>
          </select>
        </div>

        <RelatedCarousel data={bakeryProducts} />
      </div>

      <div className="shop_product">
        <div className="Heading">
          <p>Party Product’s</p>
        </div>

        <RelatedCarousel data={partyProduct} />
      </div>

      <div className="Interested_section">
        <div className="left">
          <p className="title">Find us on platform like</p>

          <div className="two-sec">
            <img src="/Image/26.png" alt=" " />
            <img src="/Image/27.png" alt=" " />
          </div>
        </div>

        <div className="Mid">
          <img src="/Image/28.png" alt="" />
          <p>Please enter you email to join us</p>
          <input type="text" placeholder="Please enter you email to join us" />
        </div>

        <div className="right">
          <p className="title">Interested with us </p>
          <p className="desc">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>

        <img src="/Image/25.png" alt="" className="backImg" />
      </div>
    </>
  );
};

export default Home;
