/** @format */

import React from "react";
import { Offcanvas } from "react-bootstrap";

const Sidebar = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement={"end"}
      style={{ borderRadius: "34.91px 0px 0px 34.91px" }}
    >
      <Offcanvas.Body className="sidebar_menu">
        <div>
            
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
