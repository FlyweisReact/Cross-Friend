/** @format */

import React from "react";
import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";

const Wishlist = () => {
  const data = [
    {
        img : "/Image/66.png" ,
        title : "Chocolate Truffle Cake" , 
        discountedPrice : "1,500" , 
        mrp : "800" ,
        off : '35%'
    }
];

  return (
    <>
      <div className="Category_Heading mt-5">
        <p className="title">My Wishlist 857 items</p>
      </div>

      <div className="wishlist">

        {data?.map((i , index) => (
          <div className="Main" key={index}>
          <div className="rating">
            <p>4.1</p>
            <AiFillStar />
          </div>
          <AiFillCloseCircle className="close_button" />
          <img src="/Image/66.png" alt="" />
          <div className="content">
            <p className="title">Chocolate Truffle Cake</p>
            <div className="price-div">
              <p className="discounted-price">₹</p>
              <p className="mrp">₹800</p>
              <p className="off">36% off</p>
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
