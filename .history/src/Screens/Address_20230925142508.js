/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const Address = () => {
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
    </>
  );
};

export default Address;
