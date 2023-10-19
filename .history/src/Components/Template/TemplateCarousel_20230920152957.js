/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

const TemplateCarousel = () => {


    const options = {
        items: 1,
        loop: true,
        nav: true,
        animateOut: 'fadeOut', // Use fadeOut animation when item is removed
        animateIn: 'fadeIn',   // Use fadeIn animation when item is added
      };
    



  return (
    <div className="Template_Carousel">
      <OwlCarousel className="owl-theme" {...options}>
      <div className="Item">
        <img src="/Image/1.png" alt="" />
      </div>
      <div className="Item">
        <img src="/Image/2.png" alt="" />
      </div>
    </OwlCarousel>
    </div>
  );
};

export default TemplateCarousel;
