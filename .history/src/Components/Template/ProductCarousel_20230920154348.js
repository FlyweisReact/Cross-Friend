/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

const ProductCarousel = () => {
  const options = {
    items: 4,
    margin: 20,
    loop: true,
    nav: false,
    dots: false,
  };
  return <OwlCarousel className="owl-theme" {...options}>
    <div className="Item">
        <img src="/Image/6.png"
    </div>
  </OwlCarousel>;
};

export default ProductCarousel;
