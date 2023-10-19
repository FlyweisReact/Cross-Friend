/** @format */

import Modal from "react-bootstrap/Modal";

export function CustomizeModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ backgroundColor: "#F4F4F4" }}>
        <div className="Customize_Modal">
          <div className="Heading">
            <p>Add other things</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>

        <form>
            <div>
                <p>What do you want to write on cake</p>
                <input type='text' placeholder="Write here" />
            </div>

            <div>
                <p>Any other instructions</p>
                <input type='text' placeholder="Write here" />
            </div>


        </form>

        </div>
      </Modal.Body>
    </Modal>
  );
}
