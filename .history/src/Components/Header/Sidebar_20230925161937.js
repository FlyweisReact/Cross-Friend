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
import { BiSolidUser } from "react-icons/bi";
import { MdPrivacyTip } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { UpdateProfile } from "../Modal/UpdateProfile";

const Sidebar = ({ show, handleClose }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  function NavigationHandler(link) {
    handleClose();
    navigate(link);
  }

  return (
   
  );
};

export default Sidebar;
