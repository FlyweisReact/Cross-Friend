/** @format */

import React from "react";

const NormalProducts = ({ data }) => {
  return (
    <div className="fiveProducts_Container">
      {data?.map((i, index) => (
        <div className="Main" key={index}>
          <img src={i.img} alt="" />
          <p> {i.title} </p>
        </div>
      ))}
    </div>
  );
};

export default NormalProducts;
