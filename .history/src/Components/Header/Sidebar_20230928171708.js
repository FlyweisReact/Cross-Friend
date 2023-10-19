/** @format */

import React, { useState } from "react";
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
import { BiSolidUser , BiLogOutCircle } from "react-icons/bi";
import { MdPrivacyTip } from "react-icons/md";
import {  useNavigate } from "react-router-dom";
import { UpdateProfile } from "../Modal/UpdateProfile";
import { Store } from "react-notifications-component";

const Sidebar = ({ show, handleClose }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  function NavigationHandler(link) {
    handleClose();
    navigate(link);
  }


  function LoggedOut()  {
    Store.addNotification({
      title: "",
      message: 'Logged out S',
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });

  }


  return (
    <>
      <UpdateProfile show={openModal} onHide={() => setOpenModal(false)} />
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
          <button
            className="update_profile_btn"
            onClick={() => {
              handleClose();
              setOpenModal(true);
            }}
          >
            Update Profile
          </button>

          <ul className="menu_list">
            <li onClick={() => NavigationHandler("/")}>
              <AiFillHome /> Home
            </li>

            <li onClick={() => NavigationHandler("/category")}>
              <BsFilterRight /> Shop by Category
            </li>

            <li onClick={() => NavigationHandler("/my-order")}>
              <BsWallet /> My Orders
            </li>

            <li>
              <AiOutlineCalendar /> Events
            </li>

            <li onClick={() => NavigationHandler("/transaction")}>
              <GiWallet /> Wallet
            </li>

            <li onClick={() => NavigationHandler("/wishlist")}>
              <AiFillHeart /> Wishlist
            </li>

            <li>
              <BsFillTelephoneFill /> Contact us
            </li>

            <li>
              <AiFillStar /> Rate the app
            </li>

            <li>
              <BiSolidUser /> Become a Vendor
            </li>

            <li>
              <BsFillGearFill />
              Terms & Condition
            </li>

            <li>
              <MdPrivacyTip />
              Privacy Policy
            </li>
            <li>
              <BiLogOutCircle />
              LOG OUT
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
