/** @format */

import Modal from "react-bootstrap/Modal";
import { HiMiniXMark } from 'react-icons/hi2'

export function CustomizeModal(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="Customize_Modal">
        <p>Add other things</p>
            <HiMiniXMark />
        </div>
      </Modal.Body>
    </Modal>
  );
}
