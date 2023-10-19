/** @format */

import React from "react";
import ProductCarousel from "../Components/Template/ProductCarousel";

const SingleProduct = () => {
  return (
    <>
      <div className="multi-background-heading">
        <p className="heading">Other Cake’s</p>
        <ProductCarousel />
        <button className="last-button">View More</button>
      </div>
    </>
  );
};

export default SingleProduct;
