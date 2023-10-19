/** @format */

import Modal from "react-bootstrap/Modal";

export function CustomizeModal(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body style={{backgroundColor : "#F4F4F4"}} >
        <div className="Customize_Modal">

        <div className="Heading">

        </div>
    
        </div>
      </Modal.Body>
    </Modal>
  );
}
