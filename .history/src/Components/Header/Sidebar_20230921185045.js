/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import { AiFillHome , AiOutlineCalendar } from "react-icons/ai";
import { BsFilterRight , BsWallet } from 'react-icons/bs'

const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={"end"}
      style={{ borderRadius: "34.91px 0px 0px 34.91px" }}
    >
      <Offcanvas.Body className="sidebar_menu" style={{ padding: "20px" }}>
        <div className="Profile_Heading">
          <p>Hello Sam </p>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <button className="update_profile_btn">Update Profile</button>

        <ul className="menu_list">
          <li>
            {" "}
            <a href="/">
              {" "}
              <AiFillHome /> Home
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <BsFilterRight /> Shop by Category
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <BsWallet /> My Orders
            </a>{" "}
          </li>


          <li>
            {" "}
            <a href="/">
              {" "}
              <AiFillHome /> Events
            </a>{" "}
          </li>


          <li>
            {" "}
            <a href="/">
              {" "}
              <AiFillHome /> Wallet
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <AiFillHome /> Wishlist
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <AiFillHome /> Contact us
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <AiFillHome /> Rate the app
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <AiFillHome /> Become a Vendor
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/"> Terms & Condition
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
               Privacy Policy
            </a>{" "}
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
