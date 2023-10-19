/** @format */

import React from "react";

const Cart = () => {
  const data = [
    {
      img: "/Image/68.png",
      title: "Chocolate Truffle Cake",
      discount: "₹1,500",
      price: "₹800",
      off: "36% off",
      gram: "₹160/g",
    },
    {
      img: "/Image/67.png",
      title: "Chocolate Truffle Cake",
      discount: "₹1,500",
      price: "₹800",
      off: "36% off",
      gram: "₹160/g",
    },
  ];

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
            <img src="/Image/70.png" alt="" />
            <p>1/5 Items in the cart</p>
          </div>

          {data?.map((i, index) => (
            <div className="Cart_Items" key={index}>
              <div className="img-container">
                <img src="/Image/68.png" alt="" />
              </div>

              <div className="text-container">
                <div className="title-text">
                  <p>Chocolate Truffle Cake</p>
                  <img src="/Image/71.png" alt="" />
                </div>

                <div className="price-container">
                  <div className="left">
                    <p className="discounted-price"> </p>
                    <p className="real-price"> </p>
                    <p className="off"></p>
                  </div>

                  <p className="gram"></p>
                </div>

                <p className="few_left">Only Few Left!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
