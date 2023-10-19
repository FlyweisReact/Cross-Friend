/** @format */

import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/ai";

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
    </div>
  );
};

export default Footer;
