/** @format */

import React from "react";

const Transaction = () => {
  return (
    <div className="Transaction">
      <div className="left_container">
        <p className="title">Withdrawal History</p>
        <div className="Items">
          <div className="Main">
            <div className="left">
              <p className="head">Withdrawal</p>
              <p className="date">6 Days ago</p>
            </div>
            <p className="amount">-150</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
