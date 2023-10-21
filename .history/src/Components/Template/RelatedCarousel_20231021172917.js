/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from 'react-router-dom'

const RelatedCarousel = ({data}) => {
  const carouselRef = useRef(null);

  const options = {
    items: 3,
    margin: 10,
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
    <div className="product-carousel-containter Related_Product_Carousel">
      <OwlCarousel
        className="owl-theme product-carousel"
        {...options}
        ref={carouselRef}
      >
      {data?.map((i , index) => (
        <div className="Item" key={index} >
        <Link to={`/product/${i._id}`}>
          <img src={i.images?.[0]} alt=" " />
          </Link>
          <Link to={`/product/${i._id}`}>
          <p className="title"> {i.name} </p>
          </Link> 
          <span className="price-offer">
            <span className="mrp">₹{i.price} </span>
            <span className="discounted-price">  {i.discountPrice ? `₹${i.discount}` : "" } </span>
            <span className="offer"> Min {i.minDiscount ? `${i.minDiscount}%` :'' } off </span>
          </span>
        </div>

      ))}
     
     
        
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
