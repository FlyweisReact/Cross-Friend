/** @format */

import React, { useEffect, useState } from "react";
import { createOrder, getAddress } from "../Repository/Api";

const Address = () => {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState("");

  const payload = {
    address,
  };

  const handleSubmit = () => {
    createOrder(payload);
  };

  const fetchHandler = () => {
    getAddress(setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div className="breadCamp">
        <div className="naver">
          <span className="circle active" />
          <span className="line active_Line" />
          <span className="circle active" />
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
            <img src="/Image/83.png" alt="" />
            <p>Billing address is the same as delivery address</p>
          </div>

          <form>
            <div>
              <p className="title">Address</p>
              <select onChange={(e) => setAddress(e.target.value)}>
                <option>Select Your Prefrence</option>
                {data?.map((i, index) => (
                  <option value={i._id} key={index}>
                    {" "}
                    {i.address}{" "}
                  </option>
                ))}
              </select>
            </div>
          
          </form>

          <div className="Heading mt-3">
            <img src="/Image/83.png" alt="" />
            <p>Delivery at your doorsteps.</p>
          </div>

          <div className="Heading">
            <img src="/Image/84.png" alt="" />
            <p>Tack away from store.</p>
          </div>

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
         
{/* 
          <div className="Items">
            <p className="title">Payment</p>
            <p className="desc">
              Master Card <br />
              **** **** **** 543
            </p>
            <p className="Change">Change</p>
          </div> */}

          <button className="place_order" onClick={() => handleSubmit()}>
            Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Address;
