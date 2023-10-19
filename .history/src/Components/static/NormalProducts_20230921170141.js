/** @format */

import React from "react";

const NormalProducts = ({data}) => {
  return (
    <div className="fiveProducts_Container">
    {data?.map((i , index) => (
      <div className="Main">
        <img src="/Image/33.png" alt="" />
        <p>Gift them sweet excitement with our Choco Bestsellers</p>
      </div>
    ))}
     
      
    </div>
  );
};

export default NormalProducts;
