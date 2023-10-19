import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";

const FormalProduct = () => {
    const carouselRef = useRef(null);

    const options = {
      items: 4,
      margin: 20,
      loop: true,
      nav: false,
      dots: false,
    };
  
    const handleNextClick = () => {
      if (carouselRef.current) {
        carouselRef.current.next(500);
      }
    };
  
    const handlePrevClick = () => {
      if (carouselRef.current) {
        carouselRef.current.prev(500);
      }
    };
    
  return (
    <div>formalProduct</div>
  )
}

export default FormalProduct