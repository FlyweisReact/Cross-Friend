/** @format */

import Modal from "react-bootstrap/Modal";

export function UpdateProfile(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
       <div className="update_profile">
       <div className="close_button">
       <i class="fa-solid fa-xmark"></i>

       </div>

       </div>
      </Modal.Body>
    </Modal>
  );
}
