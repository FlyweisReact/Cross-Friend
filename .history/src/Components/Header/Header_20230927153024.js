/** @format */

import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidWallet } from "react-icons/bi";
import { BsFillBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../Store/Slices/authSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isLoggedIn = useSelector(isAuthenticated)

  console.log(isLoggedIn)
  const token = 'ds'

  return (
    <>
      <Sidebar show={show} handleClose={() => handleClose()} />
      <div className="Header">
        <div className="left">
          <img src="/Image/logo.png" alt="" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Categories</Link>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
          </ul>
        </div>

        <div className="right">
          <input type="search" placeholder="Search here" />
          {token ? (
            <div className="navigation-links">
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/login">
              <button> Register</button>
              </Link>
            
            </div>
          ) : (
            <div className="navigation-links">
              <FiBell />
              <Link to="/wishlist">
                <AiFillHeart />
              </Link>
              <BiSolidWallet />

              <Link to="/cart">
                <BsFillBasketFill />
              </Link>
              <FaRegUserCircle onClick={() => handleShow()} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
