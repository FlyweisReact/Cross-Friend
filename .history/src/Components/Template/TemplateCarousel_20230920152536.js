/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

const TemplateCarousel = () => {
  return (
    <OwlCarousel
      className="owl-theme Template_Carousel "
      margin={10}
      items={1}
      dots={false}
      center
      style={{ height: "300px" }}
    >
      <div className="Item">
        <img src="/Image/1.png" alt="" />
      </div>
      <div className="Item">
        <img src="/Image/2.png" alt="" />
      </div>
    </OwlCarousel>
  );
};

export default TemplateCarousel;
