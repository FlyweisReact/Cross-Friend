/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";
import {
  AiFillHome,
  AiOutlineCalendar,
  AiFillHeart,
  AiFillStar,
} from "react-icons/ai";
import {
  BsFilterRight,
  BsWallet,
  BsFillTelephoneFill,
  BsFillGearFill,
} from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import { MdPrivacyTip } from "react-icons/md";
import {  useNavigate } from "react-router-dom";

const Sidebar = ({ show, handleClose }) => {
  const navigate = useNavigate();

  function NavigationHandler(link) {
    handleClose();
    navigate(link);
  }

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
              <AiOutlineCalendar /> Events
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <GiWallet /> Wallet
            </a>{" "}
          </li>

          <li onClick={() => NavigationHandler("/wishlist")}>
            <AiFillHeart /> Wishlist
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <BsFillTelephoneFill /> Contact us
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <AiFillStar /> Rate the app
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              {" "}
              <BiSolidUser /> Become a Vendor
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              <BsFillGearFill />
              Terms & Condition
            </a>{" "}
          </li>

          <li>
            {" "}
            <a href="/">
              <MdPrivacyTip />
              Privacy Policy
            </a>{" "}
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
