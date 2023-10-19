/** @format */

import React from "react";
import FormalProduct from "../Components/static/FormalProduct";
import NormalProducts from "../Components/static/NormalProducts";
import TwoBanner from "../Components/static/TwoBanner";

const Category = () => {
  const trendingProduct = [
    {
      img: "/Image/37.png",
      title: "Chocolate Truffle Cream Cake Half kg",
      price: "7.09",
    },
    {
      img: "/Image/40.png",
      title: "Personalised Refuelling Club Magic Mug",
      price: "4.51",
    },
    {
      img: "/Image/41.png",
      title: "Buddhas Blessing in a Black Pot",
      price: "17.42",
    },
    {
      img: "/Image/42.png",
      title: "Choco Luxe Dark N Milk Premium Chocol",
      price: "23.23",
    },
    {
      img: "/Image/43.png",
      title: "Healthy Nut Gift Packs",
      price: "25.81",
    },
    {
      img: "https://img.freepik.com/free-photo/chocolate-cake-with-whipped-cream-fruits_140725-2715.jpg?w=740&t=st=1695295816~exp=1695296416~hmac=dfc52fa806635f30fb29e18674274628d97cdd17dcfb785eed94df2f6d7e22e8",
      title: "Chocolate Truffle Cream Cake Half kg",
      price: "15",
    },
    {
      img: "https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1695295875~exp=1695296475~hmac=198f63db3f23279ecd3a30343cefe9b0b07c12ad2f049fdc38a8c6a41a54858e",
      title: "Personalised Refuelling Club Magic Mug",
      price: "30",
    },
  ];

  const bestSeller = [
    {
      img: "/Image/33.png",
      title: "Gift them sweet excitement with our Choco Bestsellers",
    },
    {
      img: "/Image/34.png",
      title: "Evoke their sweet smile with a fab Flower & Cake surprise",
    },
    {
      img: "/Image/35.png",
      title: "Plan remarkable celebrations with thoughtful Gift Hampers",
    },
    {
      img: "/Image/36.png",
      title: "Leave a mark of love in their nest with Home Décor Gifts",
    },
    {
      img: "https://img.freepik.com/free-photo/wicker-basket-with-flowers-placed-desk_23-2148103293.jpg?w=740&t=st=1695293020~exp=1695293620~hmac=e01e3fcb9f8ce1825e9c181d5fdf6b8f26065132e42bd6ce4e6358f593b671cc",
      title: "Let them unbox the joys of like with unique & meaningful gifts",
    },
    {
      img: "https://img.freepik.com/free-photo/modern-decor-with-gerbera-flowers-gifts_23-2148268328.jpg?w=740&t=st=1695293052~exp=1695293652~hmac=b59433ab7f5ffa044132c38e0acabeb050f60371a9ff8ea209266fe2816c506d",
      title: "Plan remarkable celebrations with thoughtful Gift Hampers",
    },
  ];

  const birthdaty_collection = [
    {
      img: "/Image/45.png",
      title: "Cakes",
    },
    {
      img: "/Image/46.png",
      title: "Combos",
    },
    {
      img: "/Image/47.png",
      title: "Flowers",
    },
    {
      img: "/Image/48.png",
      title: "Plants",
    },
    {
      img: "/Image/49.png",
      title: "Personalised Gifts",
    },
    {
      img: "https://img.freepik.com/free-photo/basket-with-different-flowers-placed-desk_23-2148103285.jpg?w=740&t=st=1695296468~exp=1695297068~hmac=c2009c6e0e0ec269b97728a11f9bc63c86d2a95eb518efa6eabcb12e0ab71f68",
      title: "Flowers",
    },
  ];

  const best = [
    {
      img: "/Image/50.png",
      title: "kgChocolate Truffle Cream Cake Half ",
      price: "12.25",
    },
    {
      img: "/Image/45.png",
      title: "Chocolate Truffle Cream Cake Half kg Eg",
      price: "7.09",
    },
    {
      img: "/Image/51.png",
      title: "Basking In Glory",
      price: "19.35",
    },
    {
      img: "/Image/52.png",
      title: "Sprinkle Of Premium Chocolates",
      price: "14.19", 
    },
    {
      img: "/Image/53.png",
      title: "Jade Plant In Gold Tone Metal Pot",
      price: "3.21",
    },
    {
      img: "https://img.freepik.com/free-photo/chocolate-cake-with-whipped-cream-fruits_140725-2715.jpg?w=740&t=st=1695295816~exp=1695296416~hmac=dfc52fa806635f30fb29e18674274628d97cdd17dcfb785eed94df2f6d7e22e8",
      title: "Chocolate Truffle Cream Cake Half kg",
      price: "15",
    },
    {
      img: "https://img.freepik.com/free-photo/christmas-sweets-platter_114579-20426.jpg?w=1380&t=st=1695295875~exp=1695296475~hmac=198f63db3f23279ecd3a30343cefe9b0b07c12ad2f049fdc38a8c6a41a54858e",
      title: "Personalised Refuelling Club Magic Mug",
      price: "30",
    },
  ];

  return (
    <>
      <div className="Category_Heading mt-5">
        <p className="title">Thoughtfully Curated Gifts</p>
        <button>view all</button>
      </div>
      <TwoBanner />

      <NormalProducts data={bestSeller} />

      <div className="border-line"></div>
      <div className="Category_Heading">
        <p className="title">Trending Now</p>
      </div>
      <FormalProduct data={trendingProduct} />
      <div className="border-line"></div>
      <div className="Category_Heading mt-5">
        <p className="title">Birthday Collection</p>
        <button>view all</button>
      </div>
      <NormalProducts data={birthdaty_collection} />
      <div className="border-line"></div>

      <div className="Category_Heading">
        <p className="title">Best Sellers</p>
      </div>
      <FormalProduct data={best} />
      <div className="border-line"></div>
      <div className="Category_Heading">
        <p className="title">Elegant Flowers</p>
        <button>view all</button>
      </div>
      <Route

    </>
  );
};

export default Category;
