/** @format */

import React from "react";
import {BiSolidUserCircle} from 'react-icons/bi'

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <img src="/Image/logo.png" alt="" />
        <ul>
          <li>
            <a>Home</a>
            <a>Categories</a>
            <a>Events</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <input type='search' />
        <i class="fa-regular fa-bell"></i>
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-wallet"></i>
        <i class="fa-solid fa-basket-shopping"></i>
       </div>

    </div>
  );
};

export default Header;
