/** @format */

import React from "react";

const RoundProduct = ({ data }) => {
  return (
    <div className="round-product-container">
      {data?.map((i, index) => (
        <div className="Main" key={index}>
          <img src={i.img} alt="" />
          <p className="title"> {i.title} </p>
        </div>
      ))}
    </div>
  );
};

export default RoundProduct;
