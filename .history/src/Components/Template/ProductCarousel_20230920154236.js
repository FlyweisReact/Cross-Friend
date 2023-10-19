/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

const ProductCarousel = () => {
  const options = {
    items: 1,
    loop: true,
    nav: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 5000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
  };
  return (
    <OwlCarousel className="owl-theme" {...options}>
        
    </OwlCarousel>
  );
};

export default ProductCarousel;
