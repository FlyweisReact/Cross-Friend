/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

const TemplateCarousel = () => {
  return (
    <div className="Template_Carousel">
      <OwlCarousel className="owl-theme Template_Carousel " margin={10} items={1} dots={false}>
        <div className="Item">
          <img src="/Image/1.png" alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default TemplateCarousel;
