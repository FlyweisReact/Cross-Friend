/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement={"end"}>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
