/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ReviewCarousel = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const options = {
    items: 4,
    margin: 20,
    loop: false,
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
    <div className="review-carousel-containter">
      <OwlCarousel
        className="owl-theme review-carousel"
        {...options}
        ref={carouselRef}
      >
        <div className="Item">
          <img
            src="/Image/6.png"
            alt=""
            onClick={() => navigate(`/product/Chocolate Truffle Cake`)}
          />
          <p className="title">Chocolate Truffle Cake </p>
          <span className="price-offer">
            <span className="mrp">₹800</span>
            <span className="discounted-price">₹950</span>
            <span className="offer">Min 50 % off</span>
          </span>

          <span className="rating">
            <span className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <span className="review">(1660 Reviews)</span>
          </span>
        </div>
     


      </OwlCarousel>
      <div className="Prev_Next_Buttons">
        <img
          src="/Image/11.png"
          alt=""
          className="prev"
          onClick={handlePrevClick}
        />
        <img
          src="/Image/10.png"
          alt=""
          className="next"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default ReviewCarousel;
