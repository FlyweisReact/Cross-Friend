/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";

const TemplateCarousel = () => {
  return (
    <div className="Template_Carousel">
      <OwlCarousel
        className="owl-theme  "
        margin={10}
        items={1}
        dots={false}
        center
      >
        <div className="Item">
          <img
            src="/Image/1.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="Item">
          <img src="/Image/2.png" alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default TemplateCarousel;
