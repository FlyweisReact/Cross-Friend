/** @format */

import React from "react";
import FormalProduct from "../Components/static/FormalProduct";
import NormalProducts from "../Components/static/NormalProducts";
import TwoBanner from "../Components/static/TwoBanner";

const Category = () => {

  const trendingProduct = [ 
    {
      img : "/Image/37.png", 
      title : "Chocolate Truffle Cream Cake Half kg",
      price : "7.09"
    },
    {
      img : "/Image/40.png", 
      title : "Personalised Refuelling Club Magic Mug",
      price : "4.51"
    },
    {
      img : "/Image/41.png", 
      title : "Buddhas Blessing in a Black Pot",
      price : "17.42"
    },
    {
      img : "/Image/42.png", 
      title : "Choco Luxe Dark N Milk Premium Chocol",
      price : "23.23"
    },
    {
      img : "/Image/43.png", 
      title : "Healthy Nut Gift Packs",
      price : "25.81"
    }, {
      img : "https://img.freepik.com/free-photo/chocolate-cake-with-whipped-cream-fruits_140725-2715.jpg?w=740&t=st=1695295816~exp=1695296416~hmac=dfc52fa806635f30fb29e18674274628d97cdd17dcfb785eed94df2f6d7e22e8", 
      title : "Chocolate Truffle Cream Cake Half kg",
      price : "7.09"
    },
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
      <FormalProduct data={trendingProduct} />
    </>
  );
};

export default Category;
