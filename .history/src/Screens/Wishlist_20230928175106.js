/** @format */

import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";
import { getWishlist } from "../Repository/Api";

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
  ];


  const [ product , setProduct ] = useState([])

  const fetchHandler = () => {
    getWishlist(setProduct)
  }


  useEffect(() => {
    fetchHandler()
  },[])




  return (
    <>
      <div className="Category_Heading mt-5">
        <p className="title">My Wishlist 857 items</p>
      </div>

      <div className="wishlist">
        {product?.map((i, index) => (
          <div className="Main" key={index}>
            <div className="rating">
              <p> {i.ratings} </p>
              <AiFillStar />
            </div>
            <AiFillCloseCircle className="close_button" />
            <img src={i.imageUrls?.[0]} alt="" />
            <div className="content">
              <p className="title"> {i.name} </p>
              <div className="price-div">
                <p className="discounted-price">₹{i.discountPrice} </p>
                <p className="mrp">₹{i.price} </p>
                <p className="off"> {i.minDiscount}% off</p>
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
