/** @format */

import Modal from "react-bootstrap/Modal";

export function UpdateProfile(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
    >
      <Modal.Body>
        <div className="update_profile">
          <div className="close_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
          <p className="title">Edit Profile</p>
          <img src="/Image/88.png" alt="" className="profile_image" />

          <form>
            <div className="three-sec">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Middle " />
              <input type="text" placeholder="Last" />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="signle_input"
            />
            <input
              type="text"
              placeholder="Email Id"
              className="signle_input"
            />
            <input
              type="text"
              placeholder="Password"
              className="signle_input"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="signle_input"
            />
            <input
              type="text"
              placeholder="First line address"
              className="signle_input"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="signle_input"
            />
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
