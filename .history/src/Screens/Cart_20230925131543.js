/** @format */

import React from "react";

const Cart = () => {
  return (
    <>
      <div className="breadCamp">
        <div className="naver">
          <span className="circle active" />
          <span className="line" />
          <span className="circle" />
          <span className="line" />
          <span className="circle" />
        </div>
        <div className="text-div">
            <p>Cart</p>
            <p>Address</p>
            <p>Payment</p>
        </div>

      </div>

    
    <div className="cart_container">

    <div className="left_container">
        <div className="Heading">
        <img src='/Image/70.png' alt='' />
        <p>1/5 Items in the cart</p>

        </div>

        <div className="Cart_Items">
            <div className="img-container">
                <img src='/Image/68.png' alt='' />
            </div>
            <div ></div>

        </div>

    </div>

    </div>


    </>
  );
};

export default Cart;
