/** @format */

import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { myOrder } from "../Repository/Api";
import { Badge, Button } from "react-bootstrap";

const Orders = () => {
  const [data, setData] = useState([]);
  const [review, seReview] = useState(false);

  useEffect(() => {
    myOrder(setData);
  }, []);

  console.log(data);

  return (
    <div className="cart_container">
      <div className="left_container">
        <div className="Heading">
          <p>Order History</p>
        </div>

        {data?.map((i) =>
          i.products?.map((item, index) => (
            <div className="Cart_Items" key={index}>
              <div className="img-container">
                <img src={item.product?.images?.[0]} alt="" />
              </div>

              <div className="text-container">
                <div className="title-text">
                  <p> {item?.product?.name} </p>
                </div>

                <div className="price-container">
                  <div className="left">
                    <p className="real-price"> ₹{item?.sizeDetails?.price} </p>
                    <p className="real-price">
                      {" "}
                      Weight : {item?.sizeDetails?.weight}{" "}
                    </p>
                    <p className="off"> Quantity : {item.quantity} </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <Badge
                    style={{
                      textTransform: "uppercase",
                      marginTop: "10px",
                      padding: "10px",
                      width: "200px",
                    }}
                  >
                    Order Status : {i?.orderStatus}
                  </Badge>

                  <Badge
                    style={{
                      textTransform: "uppercase",
                      marginTop: "10px",
                      padding: "10px",
                      width: "200px",
                    }}
                  >
                    Payment Status : {i?.paymentStatus}
                  </Badge>

                  <Button
                    style={{
                      textTransform: "uppercase",
                    }}
                    onClick={() => seReview(!review)}
                  >
                    Give to review to this order
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

     
  );
};

export default Orders;
