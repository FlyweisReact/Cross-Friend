/** @format */

import React , { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../Repository/Api";

const Cart = () => {
  const navigate = useNavigate();
  const [ cart , setCart ] = useState({})

  const fetchHandler = () => {
    getCart(setCart)
  }

  useEffect(() => {
    fetchHandler()
  },[])

  console.log(cart)

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
            <p> {cart?.items?.length} Items in the cart</p>
          </div>

          {cart?.items?.map((i, index) => (
            <div className="Cart_Items" key={index}>
              <div className="img-container">
                <img src={i.product?.imageUrls?.[0]} alt="" />
              </div>

              <div className="text-container">
                <div className="title-text">
                  <p> {i.product?.name} </p>
                  <img src="/Image/71.png" alt="" />
                </div>

                <div className="price-container">
                  <div className="left">
                    {/* <p className="discounted-price"> {i.product?.price} </p> */}
                    <p className="real-price"> ₹{i.product?.price} </p>
                    <p className="off"> {i.product?.minDiscount} </p>
                  </div>

                  <p className="gram"> {i.gram} </p>
                </div>

                <p className="few_left">Only Few Left!</p>
              </div>
            </div>
          ))}

          <div className="images">
            <img src="/Image/73.png" alt="" />
            <img src="/Image/74.png" alt="" />
            <img src="/Image/75.png" alt="" />
            <img src="/Image/76.png" alt="" />
            <img src="/Image/77.png" alt="" />
            <img src="/Image/78.png" alt="" />
            <img src="/Image/79.png" alt="" />
            <img src="/Image/80.png" alt="" />
            <img src="/Image/81.png" alt="" />
            <img src="/Image/82.png" alt="" />
          </div>
        </div>

        <div className="right_container">
          {/* <div className="Items">
            <p className="title">Shipping Address</p>
            <p className="desc">
              12, Bay brook, Sharps Rd, Keilor East, Melbourne, Australia
            </p>
            <p className="Change">Change</p>
          </div>
          <div className="Items">
            <p className="title">Payment</p>
            <p className="desc">
              Master Card <br />
              **** **** **** 543
            </p>
            <p className="Change">Change</p>
          </div> */}
          <div className="Items">
            <p className="title">Total Amount</p>
            <p className="desc">
              
            </p>
            <p className="Change">Change</p>
          </div>

          <button className="place_order" onClick={() => navigate("/address")}>
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
