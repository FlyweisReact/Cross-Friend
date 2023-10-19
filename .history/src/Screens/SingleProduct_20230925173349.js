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


      <div className="shop_product">
        <div className="Heading">
          <p>Bakery Product’s</p>
          <select>
            <option>Select Bakery Option's</option>
            <option></option>
          </select>
        </div>

        <RelatedCarousel data={bakeryProducts} />
      </div>

    </>
  );
};

export default SingleProduct;
