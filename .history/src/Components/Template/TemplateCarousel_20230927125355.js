/** @format */

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { getBanner } from "../../Repository/Api";

const TemplateCarousel = () => {
  const [banner, setBanner] = useState([]);
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

  const fetchHandler = () => {
    getBanner(setBanner);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div className="Template_Carousel">
      <OwlCarousel className="owl-theme" {...options}>
        {banner?.map((i, index) => (
          <div className="Item" key={index}>
            <img src={i.image} alt="" />
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default TemplateCarousel;
