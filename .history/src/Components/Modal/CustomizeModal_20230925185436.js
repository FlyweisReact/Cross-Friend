/** @format */

import Modal from "react-bootstrap/Modal";

export function CustomizeModal(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="Customize_Modal">
        <p>Add other things</p>

        </div>
      </Modal.Body>
    </Modal>
  );
}
