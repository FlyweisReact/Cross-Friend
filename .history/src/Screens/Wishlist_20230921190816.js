/** @format */

import React from "react";

const Wishlist = () => {
  return (
    <>
      <div className="Category_Heading mt-5">
        <p className="title">My Wishlist 857 items</p>
      </div>

      <div className="wishlist">

        <div className="Main">
          <img src="/Image/66.png" alt="" />
          <p className="title">Chocolate Truffle Cake</p>
          <div className="price-div">
            <p>₹1,500</p>
            <p>₹800</p>
            <p>36% off</p>
          </div>
          <p className="props" >Only Few Left!</p>
          <button>Move to bag</button>
        </div>
        
      </div>
    </>
  );
};

export default Wishlist;
