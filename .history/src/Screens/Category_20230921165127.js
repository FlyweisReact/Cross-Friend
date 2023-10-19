/** @format */

import React from "react";
import FormalProduct from "../Components/static/FormalProduct";
import NormalProducts from "../Components/static/NormalProducts";
import TwoBanner from "../Components/static/TwoBanner";

const Category = () => {

  const trendingProduct = [ 
    {
      img : "/Image/37.png", 
      title : "Chocolate Truffle Cream Cake Half kg"
    }
  ]

  return (
    <>
      <div className="Category_Heading mt-5">
        <p className="title">Thoughtfully Curated Gifts</p>
        <button>view all</button>
      </div>
      <TwoBanner />
      <NormalProducts />
      <div className="border-line"></div>
      <div className="Category_Heading">
        <p className="title">Trending Now</p>
      </div>
      <FormalProduct />
    </>
  );
};

export default Category;
