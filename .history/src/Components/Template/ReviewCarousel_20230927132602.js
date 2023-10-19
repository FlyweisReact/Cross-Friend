/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar } from "react-icons/ai";

const ReviewCarousel = ({data}) => {
  const carouselRef = useRef(null);

  const options = {
    items: 2,
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
    <div className="review-carousel-containter">
      <OwlCarousel
        className="owl-theme review-carousel"
        {...options}
        ref={carouselRef}
      >
        {data?.map((i , index) => (
          <div className="Item">
          <div className="upper_container">
            <img src={i.photoUrl} alt="" />
            <div className="content">
              <p className="title">{i.name}</p>
              <p className="desc">Delhi, India</p>
            </div>
          </div>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>

          <div className="bordered-line" />
          <p className="desc">
          {i.comment}
          </p>
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

export default ReviewCarousel;
