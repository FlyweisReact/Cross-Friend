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

    {cart?.Items?.length === 0 ? <p></p> : <></>}


     
    </>
  );
};

export default Cart;
