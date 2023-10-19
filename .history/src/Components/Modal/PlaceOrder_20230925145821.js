/** @format */

import Modal from "react-bootstrap/Modal";

export function PlaceOrder(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="Place_Order_Modal">
          <video width="320" height="240">
            <source src="/Image/1.mp4" type="video/ogg" />
          </video>
          <p>Your order is placed</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
