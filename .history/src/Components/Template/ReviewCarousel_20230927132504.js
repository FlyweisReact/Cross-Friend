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
        <div className="Item">
          <div className="upper_container">
            <img src="/Image/91.png" alt="" />
            <div className="content">
              <p className="title">Loren Epsom</p>
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
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>

        <div className="Item">
          <div className="upper_container">
            <img src="/Image/92.png" alt="" />
            <div className="content">
              <p className="title">Loren Epsom</p>
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
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
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
