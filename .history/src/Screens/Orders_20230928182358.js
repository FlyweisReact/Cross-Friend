/** @format */

import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { myOrder } from "../Repository/Api";

const Orders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    myOrder(setData);
  }, []);

  return (
    <div className="cart_container">
      <div className="left_container">
        <div className="Heading">
          <p>Order History</p>
        </div>

        {data?.map((i) =>
          i.products?.map((item, index) => (
            <div className="Cart_Items" key={index}>
            {console.log(item)}
              <div className="img-container">
                <img src={item.product?.imageUrls?.[0]} alt="" />
              </div>

              <div className="text-container">
                <div className="title-text">
                  <p> {item?.product?.name} </p>
                </div>

                <div className="price-container">
                  <div className="left">
                    <p className="discounted-price"> {item?.product?.name} </p>
                    <p className="real-price"> {i.price} </p>
                    <p className="off"> {i.off} </p>
                  </div>
                </div>

                <p className="few_left">Only Few Left!</p>
              </div>
            </div>
          ))
        )}
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

          <textarea placeholder="Write your Review" />
        </div>

        <button className="sm-btn">Submit</button>
      </div>
    </div>
  );
};

export default Orders;
