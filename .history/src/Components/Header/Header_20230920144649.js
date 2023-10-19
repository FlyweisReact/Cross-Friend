/** @format */

import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <img src="/Image/logo.png" alt="" />
        <ul>
          <li>
            <a href='/' >Home</a>
          </li>
          <li>
            <a href='/' >Categories</a>
          </li>
          <li>
            <a href='/' >Home</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <input type="search" />
        <i className="fa-regular fa-bell"></i>
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-wallet"></i>
        <i className="fa-solid fa-basket-shopping"></i>
        <BiSolidUserCircle />
      </div>
    </div>
  );
};

export default Header;
