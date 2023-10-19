/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar } from "react-icons/ai";

const ProductCarousel = () => {
  const carouselRef = useRef(null);

  const options = {
    items: 4,
    margin: 20,
    loop: false,
    nav: false,
    dots: false,
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next(500); // Use a duration of 500ms for the transition
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(500);
    }
  };

  return (
    <OwlCarousel
      className="owl-theme product-carousel"
      {...options}
      ref={carouselRef}
    >
      <div className="Item">
        <img src="/Image/6.png" alt=" " />
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
      <div className="Item">
        <img src="/Image/6.png" alt=" " />
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
      <div className="Item">
        <img src="/Image/6.png" alt=" " />
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
      <div className="Item">
        <img src="/Image/6.png" alt=" " />
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
  );
};

export default ProductCarousel;
