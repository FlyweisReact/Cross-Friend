/** @format */

import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { myOrder } from "../Repository/Api";
import { Badge, Button } from "react-bootstrap";

const Orders = () => {
  const [data, setData] = useState([]);

  const [review, seReview] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [product, setProduct] = useState({});
  const [ price , setPrice ] = useState("")

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
              <div className="img-container">
                <img src={item.product?.images?.[0]} alt="" />
              </div>

              {console.log(i)}

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
                    onClick={() => {
                      setOrderId(i.orderId);
                      setProduct(item.product);
                      seReview(!review);
                    }}
                  >
                    Give to review to this order
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {review === true && (
        <div className="right_container">
          <div className="Reviews">
            <div className="Two_Sec">
              <img src={product?.images?.[0]} alt="" />
              <div className="content">
                <p className="title"> {product?.name} </p>
                <div className="price-container">
                  <span className="price">₹800</span>
                </div>
                {/* <p className="few">Only Few Left!</p> */}
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
      )}
    </div>
  );
};

export default Orders;
