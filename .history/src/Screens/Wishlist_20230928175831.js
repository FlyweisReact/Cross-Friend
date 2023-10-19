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

  const MoveToCart = (product, sizeId) => {
    const payload = { product, sizeId, quantity: 1 };


    const cartHandler = async () => {
      await addToCart(payload);
      fetchProduct();
    };
  };

  return (
    <>
      {product?.length === 0 ? (
        <div
          className="Category_Heading mt-5"
          style={{ justifyContent: "center", minHeight: "60vh" }}
        >
          <p className="title">Your Wishlist is Empty !</p>
        </div>
      ) : (
        <>
          {" "}
          <div className="Category_Heading mt-5">
            <p className="title">My Wishlist {product?.length} items</p>
          </div>
          <div className="wishlist">
            {product?.map((i, index) => (
              <div className="Main" key={index}>
                <div className="rating">
                  <p> {i.ratings} </p>
                  <AiFillStar />
                </div>
                <AiFillCloseCircle
                  className="close_button"
                  onClick={() => RemoveItem(i._id)}
                />
                <img src={i.imageUrls?.[0]} alt="" />
                <div className="content">
                  <p className="title"> {i.name} </p>
                  <div className="price-div">
                    <p className="discounted-price">₹{i.discountPrice} </p>
                    <p className="mrp">₹{i.price} </p>
                    <p className="off"> {i.minDiscount}% off</p>
                  </div>
                  <p className="props">Only Few Left!</p>
                </div>
                <button>Move to bag</button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Wishlist;
