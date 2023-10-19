/** @format */

import React from "react";
import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";

const Wishlist = () => {
  const data = [
    {
      img: "/Image/68.png",
      title: "Chocolate Truffle Cake",
      discountedPrice: "1,500",
      mrp: "800",
      off: "35%",
    },
    {
      img: "/Image/67.png",
      title: "Chocolate Truffle Cake",
      discountedPrice: "1,500",
      mrp: "800",
      off: "35%",
    },
    {
      img: "/Image/66.png",
      title: "Chocolate Truffle Cake",
      discountedPrice: "1,500",
      mrp: "800",
      off: "35%",
    },
    {
      img: "/Image/69.png",
      title: "Chocolate Truffle Cake",
      discountedPrice: "1,500",
      mrp: "800",
      off: "35%",
    },
    {
      img: "/Image/68.png",
      title: "Chocolate Truffle Cake",
      discountedPrice: "1,500",
      mrp: "800",
      off: "35%",
    },
    {
      img: "/Image/67.png",
      title: "Chocolate Truffle Cake",
      discountedPrice: "1,500",
      mrp: "800",
      off: "35%",
    },
    {
      img: "/Image/66.png",
      title: "Chocolate Truffle Cake",
      discountedPrice: "1,500",
      mrp: "800",
      off: "35%",
    },
    {
      img: "/Image/69.png",
      title: "Chocolate Truffle Cake",
      discountedPrice: "1,500",
      mrp: "800",
      off: "35%",
    },
  ];

  return (
    <>
      <div className="Category_Heading mt-5">
        <p className="title">My Wishlist 857 items</p>
      </div>

      <div className="wishlist">
        {data?.map((i, index) => (
          <div className="Main" key={index}>
            <div className="rating">
              <p>4.1</p>
              <AiFillStar />
            </div>
            <AiFillCloseCircle className="close_button" />
            <img src={i.img} alt="" />
            <div className="content">
              <p className="title"> {i.title} </p>
              <div className="price-div">
                <p className="discounted-price">₹{i.discountedPrice} </p>
                <p className="mrp">₹{i.mrp} </p>
                <p className="off"> {i.off}% off</p>
              </div>
              <p className="props">Only Few Left!</p>
            </div>
            <button>Move to bag</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
