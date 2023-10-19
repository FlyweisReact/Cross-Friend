/** @format */

import React, { useEffect, useState } from "react";
import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";
import { getWishlist, removeWishlist } from "../Repository/Api";

const Wishlist = () => {
  const [product, setProduct] = useState([]);

  const fetchHandler = () => {
    getWishlist(setProduct);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const RemoveItem = async (id) => {
    await removeWishlist(id);
    fetchHandler();
  };

  return (
    <>

    {product?.length === 0 ? <> </> :  <> </> }

    </>
  );
};

export default Wishlist;
