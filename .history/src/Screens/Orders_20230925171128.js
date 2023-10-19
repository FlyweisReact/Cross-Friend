/** @format */

import React from "react";

const Orders = () => {
  const data = [
    {
      img: "/Image/68.png",
      title: "Chocolate Truffle Cake",
      discount: "₹1,500",
      price: "₹800",
      off: "36% off",
    },
    {
      img: "/Image/67.png",
      title: "Chocolate Truffle Cake",
      discount: "₹1,500",
      price: "₹800",
      off: "36% off",
    },
    {
      img: "/Image/72.png",
      title: "Chocolate Truffle Cake",
      discount: "₹1,500",
      price: "₹800",
      off: "36% off",
    },
  ];

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
                <p className="title" >Chocolate Truffle Cake</p>
                <div className="price-container">
                <span className=""></span>

                </div>

                </div>

                </div>
            </div>
      </div>
    </div>
  );
};

export default Orders;
