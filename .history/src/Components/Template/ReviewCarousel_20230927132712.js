/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import { AiFillStar } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

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

  const RatingComponent = (num) => {
    if (num == 0) {
      return (
        <>
          <AiOutlineStar />
        </>
      );
    } else if (num == 0.5) {
      return (
        <>
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 1) {
      return (
        <>
          <AiFillStar />
        </>
      );
    } else if (num == 1.5) {
      return (
        <>
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 2) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 2.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 3) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 3.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 4) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 4.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 5.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 6) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 6.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 7) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 7.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 8) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </>
      );
    } else if (num == 8.5) {
      return (
        <>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <FaStarHalfAlt />
        </>
      );
    } else if (num == 9) {
      return (
        <>
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
        </>
      );
    } else if (num == 9.5) {
      return (
        <>
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
        </>
      );
    } else if (num == 10) {
      return (
        <>
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
        </>
      );
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
           {RatingComponent(i.rating)}
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
