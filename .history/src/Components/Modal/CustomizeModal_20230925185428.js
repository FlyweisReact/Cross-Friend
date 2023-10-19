/** @format */

import Modal from "react-bootstrap/Modal";

export function CustomizeModal(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="Customize_">

        </div>
      </Modal.Body>
    </Modal>
  );
}
