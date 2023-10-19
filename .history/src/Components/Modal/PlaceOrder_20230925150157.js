/** @format */

import Modal from "react-bootstrap/Modal";

export function PlaceOrder(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="Place_Order_Modal">
          <img src="/Image/animation_lmyos851_small.gif" alt="" />
          <p>Your order is <br /> placed</p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
