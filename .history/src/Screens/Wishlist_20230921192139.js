/** @format */

import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Wishlist = () => {
  return (
    <>
      <div className="Category_Heading mt-5">
        <p className="title">My Wishlist 857 items</p>
      </div>

      <div className="wishlist">
        <div className="Main">
            <div className="rating">
            <p>4.1</p>

            </div>
           <AiFillCloseCircle className="close_button" />
          <img src="/Image/66.png" alt="" />
          <div className="content">
            <p className="title">Chocolate Truffle Cake</p>
            <div className="price-div">
              <p className="discounted-price">₹1,500</p>
              <p className="mrp">₹800</p>
              <p className="off">36% off</p>
            </div>
            <p className="props">Only Few Left!</p>
          </div>
          <button>Move to bag</button>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
