import React from 'react'
import OwlCarousel from "react-owl-carousel";

const ReviewCarousel = () => {
    const options = {
        items: 1,
        loop: true,
        nav: false,
        autoplayTimeout: 5000,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
      };
  return (
    <div>ReviewCarousel</div>
  )
}

export default ReviewCarousel