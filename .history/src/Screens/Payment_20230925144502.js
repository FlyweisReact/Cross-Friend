/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="breadCamp">
        <div className="naver">
          <span className="circle active" />
          <span className="line active_Line" />
          <span className="circle active" />
          <span className="line active_Line" />
          <span className="circle active" />
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
            <img src="/Image/85.png" style={{width : '80px'}} alt="" />
            <img src="/Image/86.png" style={{width : '80px'}} alt="" />
            <img src="/Image/87.png" style={{width : '80px'}} alt="" />
            <p>Manage Payment Method</p>
          </div>

          <form>
            <div>
              <p className="title">Name on Card</p>
              <input type="text" placeholder="Lipsum" />
            </div>
            <div className="mt-3">
              <p className="title">Card Number</p>
              <input type="text" placeholder="4560 5644 3224 543" />
            </div>

            <div className="two_sec">
              <div>
                <p className="title">Expiry Date</p>
                <input type="text" placeholder="09 / 20" />
              </div>
              <div>
                <p className="title">Pincode</p>
                <input type="text" placeholder="201009" />
              </div>
            </div>
            <div className="two_sec">
              <div>
                <p className="title">State</p>
                <input type="text" placeholder=" Delhi" />
              </div>
              <div>
                <p className="title">Country</p>
                <input type="text" placeholder="India" />
              </div>
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
          <div className="Items">
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
          </div>

          <button className="place_order" onClick={() => navigate("/address")}>
          Pay Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
