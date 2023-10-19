/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar } from "react-icons/ai";

const ProductCarousel = () => {
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
    <div className="product-carousel-containter">
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
          <img src="/Image/7.png" alt=" " />
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
          <img src="/Image/8.png" alt=" " />
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
          <img src="/Image/9.png" alt=" " />
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

        <img src="/Image/10.png" alt='' />
        <img src="/Image/11.png" alt='' />
      <button onClick={handlePrevClick} className="custom-button prev-button">
        Prev
      </button>
      <button onClick={handleNextClick} className="custom-button next-button">
        Next
      </button>
    </div>
  );
};

export default ProductCarousel;
