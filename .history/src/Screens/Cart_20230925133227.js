/** @format */

import React from "react";

const Cart = () => {

    const data = [ 
        {
            img : "/Image/68.png"
        }
    ]

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

            <div className="text-container">

                <div className="title-text">
                    <p>Chocolate Truffle Cake</p>
                    <img src='/Image/71.png' alt='' />
                </div>

                <div className="price-container" >

                    <div className="left">
                    <p className="discounted-price"> ₹1,500 </p>
                    <p className="real-price"> ₹800 </p>
                    <p className="off">36% off</p>
                    </div>

                    <p className="gram">₹160/g</p>
                </div>

                <p className="few_left" >Only Few Left!</p>

            </div>

        </div>


        <div className="Cart_Items">
            <div className="img-container">
                <img src='/Image/67.png' alt='' />
            </div>

            <div className="text-container">

                <div className="title-text">
                    <p>Chocolate Truffle Cake</p>
                    <img src='/Image/71.png' alt='' />
                </div>

                <div className="price-container" >

                    <div className="left">
                    <p className="discounted-price"> ₹1,500 </p>
                    <p className="real-price"> ₹800 </p>
                    <p className="off">36% off</p>
                    </div>

                    <p className="gram">₹160/g</p>
                </div>

                <p className="few_left" >Only Few Left!</p>

            </div>

        </div>

    </div>

    </div>


    </>
  );
};

export default Cart;
