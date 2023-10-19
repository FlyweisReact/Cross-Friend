/** @format */

import React, { useRef, useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getProductbyQuery } from "../../Repository/Api";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductCarousel = ({ query }) => {
  const carouselRef = useRef(null);
  const [products, setProducts] = useState([]);

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

  const fetchHandler = () => {
    getProductbyQuery(query, setProducts);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const RatingComponent = (num) => {
    if (num == 0) {
      return (
        <span className="stars">
          <AiOutlineStar />
        </span>
      );
    } else if (num == 0.5) {
      return (
        <span className="stars">
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 1) {
      return (
        <span className="stars">
          <AiFillStar />
        </span>
      );
    } else if (num == 1.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 2) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 2.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 3) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 3.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 4) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 4.5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </span>
      );
    } else if (num == 5) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 5.5) {
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
    } else if (num == 6) {
      return (
        <span className="stars">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </span>
      );
    } else if (num == 6.5) {
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
    } else if (num == 7) {
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
    } else if (num == 7.5) {
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
    } else if (num == 8) {
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
    } else if (num == 8.5) {
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
    } else if (num == 9) {
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
    } else if (num == 9.5) {
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
    }
  };

  return (
    <div className="product-carousel-containter">
      <OwlCarousel
        className="owl-theme product-carousel"
        {...options}
        ref={carouselRef}
      >
        {products?.map((i, index) => (
          <div className="Item" key={index}>
            <img
              src={i.imageUrls?.[0]}
              alt=""
              onClick={() => navigate(`/product/Chocolate Truffle Cake`)}
            />
            <p className="title"> {i.name} </p>
            <span className="price-offer">
              <span className="mrp">₹{i.price} </span>
              <span className="discounted-price">
                {" "}
                {i.discountPrice ? `₹${i.discountPrice}` : ""}{" "}
              </span>
              <span className="offer">Min {i.minDiscount}% off</span>
            </span>

            <span className="rating">
              <span className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
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
