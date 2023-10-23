/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  decreaseQuan,
  getCart,
  increaseQuan,
  RemoveItemCart,
} from "../Repository/Api";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({});

  const fetchHandler = () => {
    getCart(setCart);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const removeItem = async (productId, sizeId) => {
    await RemoveItemCart(productId, sizeId);
    fetchHandler();
  };

  const increaseInCart = async (id, sizeId) => {
    const payload = { product: id, sizeId };
    await increaseQuan(payload);
    fetchHandler();
  };

  const decreaseInCart = async (id, sizeId) => {
    const payload = { product: id, sizeId };
    await decreaseQuan(payload);
    fetchHandler();
  };

  return (
    <>
      {cart?.items?.length === 0 ? (
        <div
          className="Category_Heading mt-5"
          style={{ justifyContent: "center", minHeight: "70vh" }}
        >
          <p className="title">Your Cart is Empty !</p>
        </div>
      ) : (
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
                    <img src={i.product?.images?.[0]} alt="" />
                  </div>

                  <div className="text-container">
                    <div className="title-text">
                      <p> {i.product?.name} </p>
                      <img
                        src="/Image/71.png"
                        alt=""
                        onClick={() => removeItem(i.product?._id, i.size?._id)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>

                    <div className="price-container">
                      <div className="left">
                        <p className="real-price"> ₹{i.size?.price} </p>
                      </div>
                    </div>

                    <p
                      className="few_left"
                      style={{
                        color: "#000",
                        fontSize: "16px",
                        paddingTop: "10px",
                      }}
                    >
                      Quantity : {i.quantity}
                    </p>

                    <div className="quantity_button mt-2">
                      <span className="minus" onClick={() => decreaseInCart(i.product?._id , i.size?._id)}>
                        {" "}
                        <AiOutlineMinus />{" "}
                      </span>
                      <span> {i.quantity} </span>
                      <span className="plus" onClick={() => increaseInCart(i.product?._id , i.size?._id)}>
                        {" "}
                        <AiOutlinePlus />{" "}
                      </span>
                    </div>

                    {/* <p className="few_left">Only Few Left!</p> */}
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
                <p className="desc">₹{cart?.total}</p>
                {/* <p className="Change">Change</p> */}
              </div>

              <button
                className="place_order"
                onClick={() => navigate("/address")}
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
