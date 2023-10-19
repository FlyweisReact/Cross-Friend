/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose} placement={"end"}>
      <Offcanvas.Body className="sideMenu" >
     
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
