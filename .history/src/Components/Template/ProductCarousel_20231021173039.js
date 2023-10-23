/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCarousel = ({ product }) => {
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
      carouselRef.current.next(500);
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(500);
    }
  };

  const RatingComponent = (num) => {
    if (num === 0) {
      return (
        <span className="stars">
          <AiOutlineStar />
        </span>
      );
    } else if (num === 0.5) {
      return (
        <span className="stars">
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 1) {
      return (
        <span className="stars">
          <AiFillStar />
        </span>
      );
    } else if (num === 1.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 2) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num === 2.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 3) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num === 3.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 4) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num === 4.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num === 5.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 6) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num === 6.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 7) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num === 7.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 8) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num === 8.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 9) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num === 9.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num === 10) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    }
  };


  console.log(product)
  return (
    <div className="product-carousel-containter">
      <OwlCarousel
        className="owl-theme product-carousel"
        {...options}
        ref={carouselRef}
      >
        {product?.map((i, index) => (
          <div className="Item" key={index}>
            <Link to={`/product/${i._id}`}>
              <img src={i.images?.[0]} alt="" />
            </Link>
            <Link to={`/product/${i._id}`}>
              <p className="title"> {i.name} </p>
            </Link>
            <span className="price-offer">
              <span className="mrp">₹{i.sizePrice?.[0]} </span>
              <span className="discounted-price">
                {" "}
                {i.discountPrice ? `₹${i.discountPrice}` : ""}{" "}
              </span>
              <span className="offer">Min {i.minDiscount}% off</span>
            </span>

            <span className="rating">
              {RatingComponent(i.ratings)}
              <span className="review">({i.numOfReviews} Reviews)</span>
            </span>
          </div>
        ))}
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

export default ProductCarousel;