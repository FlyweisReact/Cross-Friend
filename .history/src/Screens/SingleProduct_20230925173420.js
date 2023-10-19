/** @format */

import React from "react";
import ProductCarousel from "../Components/Template/ProductCarousel";
import RelatedCarousel from "../Components/Template/RelatedCarousel";

const SingleProduct = () => {
  const bakeryProducts = [
    {
      img: "/Image/19.png",
      title: "Bread",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/20.png",
      title: "Pastries",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/21.png",
      title: "Cookies",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
  ];

  const partyProduct = [
    {
      img: "/Image/22.png",
      title: "Bread",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/23.png",
      title: "Pastries",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
    {
      img: "/Image/24.png",
      title: "Cookies",
      mrp: "800",
      discount: "950",
      offer: "Min 50% off",
    },
  ];
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
