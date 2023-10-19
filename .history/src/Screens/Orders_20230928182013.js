/** @format */

import React from "react";
import { AiFillStar } from "react-icons/ai";

const Orders = () => {
const [ data , setData ] = useSta

  return (
    <div className="cart_container">
      <div className="left_container">
        <div className="Heading">
          <p>Order History</p>
        </div>

        {data?.map((i, index) => (
          <div className="Cart_Items" key={index}>
            <div className="img-container">
              <img src={i.img} alt="" />
            </div>

            <div className="text-container">
              <div className="title-text">
                <p> {i.title} </p>
              </div>

              <div className="price-container">
                <div className="left">
                  <p className="discounted-price"> {i.discount} </p>
                  <p className="real-price"> {i.price} </p>
                  <p className="off"> {i.off} </p>
                </div>
              </div>

              <p className="few_left">Only Few Left!</p>
            </div>
          </div>
        ))}
      </div>

      <div className="right_container">
        <div className="Reviews">
          <div className="Two_Sec">
            <img src="/Image/68.png" alt="" />
            <div className="content">
              <p className="title">Chocolate Truffle Cake</p>
              <div className="price-container">
                <span className="discounted">₹1,500</span>
                <span className="price">₹800</span>
                <span className="off">36% off</span>
              </div>
              <p className="few">Only Few Left!</p>
            </div>
          </div>

          <div className="star-container">
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
         <AiFillStar />
          </div>

          <textarea placeholder="Write your Review"  />
        </div>

        <button className="sm-btn" >Submit</button>
      </div>
    </div>
  );
};

export default Orders;
