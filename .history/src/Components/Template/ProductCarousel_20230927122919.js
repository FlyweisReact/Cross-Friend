/** @format */

import React, { useRef, useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { getProductbyQuery } from "../../Repository/Api";

const ProductCarousel = ({ query }) => {
  const carouselRef = useRef(null);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

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

  const fetchHandler = () => {
    getProductbyQuery(query, setProducts);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

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
              <span className="discounted-price">₹950</span>
              <span className="offer">Min  % off</span>
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
