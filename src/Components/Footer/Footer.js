/** @format */

import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Item">
        <p className="title">Follow</p>
        <ul>
          <li>
            {" "}
            <AiFillInstagram /> Instagram
          </li>
          <li>
            {" "}
            <BsFacebook /> Facebook
          </li>
        </ul>
      </div>

      <div className="Item">
        <p className="title">Contact</p>
        <ul>
          <li>+91 9898989898</li>
          <li>abc@gmail.com</li>
        </ul>
      </div>

      <div className="Item">
        <img src='/Image/30.png' alt='' />
      </div>

      <div className="Item">
        <p className="title">About Us</p>
        <ul>
          <li>+91 9898989898</li>
          <li>abc@gmail.com</li>
        </ul>
      </div>
      <div className="Item">
        <p className="title">Our store </p>
        <p className="desc">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
    </div>
  );
};

export default Footer;
