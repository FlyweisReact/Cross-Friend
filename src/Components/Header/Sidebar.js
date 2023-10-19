/** @format */

import React, { useState, useEffect } from "react";
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
import { BiSolidUser, BiLogOutCircle } from "react-icons/bi";
import { MdPrivacyTip } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UpdateProfile } from "../Modal/UpdateProfile";
import { Store } from "react-notifications-component";
import { LOGOUT } from "../../Store/Slices/authSlice";
import { useDispatch } from "react-redux";
import { getProfile } from "../../Repository/Api";
import {FaRegAddressCard } from 'react-icons/fa'

const Sidebar = ({ show, handleClose }) => {
  const [openModal, setOpenModal] = useState(false);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getProfile(setProfile);
  }, []);

  function NavigationHandler(link) {
    handleClose();
    navigate(link);
  }

  function LoggedOut() {
    dispatch(LOGOUT());
    Store.addNotification({
      title: "",
      message: "Logged out Successfully !",
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
    navigate("/login");
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
            <p>
              Hello {profile?.name} {profile?.middle} {profile?.last}
            </p>
            <img
              src={profile?.profilePicture}
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
            <li onClick={() => NavigationHandler("/shipping-address")}>
              <FaRegAddressCard /> Address
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
            <li onClick={() => LoggedOut()}>
              <BiLogOutCircle />
              Log Out
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
