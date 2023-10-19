/** @format */

import React from "react";
import FormalProduct from "../Components/static/formalProduct";
import NormalProducts from "../Components/static/NormalProducts";
import TwoBanner from "../Components/static/TwoBanner";

const Category = () => {
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
