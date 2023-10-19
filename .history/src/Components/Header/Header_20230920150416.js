/** @format */

import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidWallet } from "react-icons/bi";
import { BsFillBasketFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <img src="/Image/logo.png" alt="" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Categories</a>
          </li>
          <li>
            <a href="/">Events</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <input type="search" placeholder="Search here" />
       <div className="navigation-links">
       <FiBell />
        <AiFillHeart />
        <BiSolidWallet />
        <BsFillBasketFill />
        <FaRegUserCircle />

       </div>
      </div>
    </div>
  );
};

export default Header;
