/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCart, RemoveItemCart } from "../Repository/Api";

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

          {cart?.items?.length > 0 ?
          <></>
           :""}

        
      </div>
    </>
  );
};

export default Cart;
