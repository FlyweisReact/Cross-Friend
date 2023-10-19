/** @format */

import React from "react";
import TemplateCarousel from "../Components/Template/TemplateCarousel";
import ProductCarousel from "../Components/Template/ProductCarousel";
import RelatedCarousel from "../Components/Template/RelatedCarousel";

const Home = () => {
  return (
    <>
      <TemplateCarousel />

      <div className="multi-background-heading">
        <p className="heading">Cakes</p>
        <ProductCarousel />
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

        <RelatedCarousel />
      </div>

      
      <div className="shop_product">
        <div className="Heading">
          <p>Bakery Product’s</p>
          <select>
            <option>Select Bakery Option's</option>
            <option></option>
          </select>
        </div>

        <RelatedCarousel />
      </div>
    </>
  );
};

export default Home;
