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
       
      </div>

      <div className="Item">
        <p className="title">About Us</p>
        <ul>
          <li>
          +91 9898989898
          </li>
          <li>
          o  {" "}
            <BsFacebook /> Facebok
          </li>
        </ul>
      </div>
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
    </div>
  );
};

export default Footer;
