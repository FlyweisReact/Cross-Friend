import React from 'react'
import OwlCarousel from "react-owl-carousel";

const ReviewCarousel = () => {
    const options = {
        items: 1,
        loop: true,
        nav: false,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
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
      <div className="Item">
        <img src="/Image/3.png" alt="" />
      </div>
      <div className="Item">
        <img src="/Image/4.png" alt="" />
      </div>
    </OwlCarousel>
  </div>
  )
}

export default ReviewCarousel