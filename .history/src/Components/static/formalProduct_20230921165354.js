/** @format */

import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";

const FormalProduct = ({ data }) => {
  const carouselRef = useRef(null);

  const options = {
    items: 5,
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

  const handleCarouselChange = (e) => {
    const currentItem = e.item.index;
    const prevButton = document.querySelector(".prev");

    if (prevButton) {
      if (currentItem === 0) {
        prevButton.style.display = "none";
      } else {
        prevButton.style.display = "block";
      }
    }
  };

  return (
    <div className="formal_product-carousel-containter">
      <OwlCarousel
        className="owl-theme"
        {...options}
        ref={carouselRef}
        onChanged={handleCarouselChange}
      >
        {data?.map((i, index) => (
          <div className="Item" key={index}>
            <img src={i.img} alt=" " />
            <p className="title">{i.title}</p>
            <p className="price">
              USD <strong> {i.price} </strong>{" "}
            </p>
          </div>
        ))}
      </OwlCarousel>

      <div className="Prev_Next_Buttons">
        <img
          src="/Image/39.png"
          alt=""
          className="prev"
          onClick={handlePrevClick}
        />
        <img
          src="/Image/38.png"
          alt=""
          className="next"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default FormalProduct;
