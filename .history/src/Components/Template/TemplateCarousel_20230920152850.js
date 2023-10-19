/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

const TemplateCarousel = () => {
  return (
    <div className="Template_Carousel">
      <OwlCarousel className="owl-theme  " items={1} dots={false} center>
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
