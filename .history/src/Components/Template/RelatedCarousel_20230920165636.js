/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar } from "react-icons/ai";

const RelatedCarousel = () => {
  const carouselRef = useRef(null);

  const options = {
    items: 3,
    margin: 10,
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
    <div className="product-carousel-containter Related_Product_Carousel">
      <OwlCarousel
        className="owl-theme product-carousel"
        {...options}
        ref={carouselRef}
      >
        <div className="Item">
          <img src="/Image/19.png" alt=" " />
          <p className="title">Chocolate Truffle Cake </p>

          <span className="price-offer">
            <span className="mrp">₹800</span>
            <span className="discounted-price">₹950</span>
            <span className="offer">Min 50 % off</span>
          </span>
        </div>

        <div className="Item">
          <img src="/Image/20.png" alt=" " />
          <p className="title">Chocolate Truffle Cake </p>
          <span className="price-offer">
            <span className="mrp">₹800</span>
            <span className="discounted-price">₹950</span>
            <span className="offer">Min 50 % off</span>
          </span>
        </div>
        <div className="Item">
          <img src="/Image/21.png" alt=" " />
          <p className="title">Chocolate Truffle Cake </p>
          <span className="price-offer">
            <span className="mrp">₹800</span>
            <span className="discounted-price">₹950</span>
            <span className="offer">Min 50 % off</span>
          </span>
        </div>
        
      </OwlCarousel>
      <div className="Prev_Next_Buttons">
        <img
          src="/Image/17.png"
          alt=""
          className="prev"
          onClick={handlePrevClick}
        />
        <img
          src="/Image/18.png"
          alt=""
          className="next"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default RelatedCarousel;
