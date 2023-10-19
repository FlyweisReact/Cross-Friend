/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Address = () => {

    const navigate = useNavigate();

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
      {
        img: "/Image/72.png",
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
          <span className="line active_Line" />
          <span className="circle active" />
          <span className="line" />
          <span className="circle" />
        </div>
        <div className="text-div">
          <p>Cart</p>
          <p>Address</p>
          <p>Payment</p>
        </div>
      </div>
    </>
  );
};

export default Address;
