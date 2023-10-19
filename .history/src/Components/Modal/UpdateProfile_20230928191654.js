/** @format */
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { updateProfile } from "../../Repository/Api";

export function UpdateProfile(props) {
  const [name, setName] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [ profilePicture , setProfilePicture ] = useState("")

  const fd = new FormData();
  fd.append("name", name);
  fd.append("middle", middle);
  fd.append("last", last);
  fd.append("phone", phone);
  fd.append("email", email);
  fd.append("address1", address1);
  fd.append("address2", address2);
  fd.append("country", country);
  fd.append("state", state);
  fd.append("district", district);
  fd.append("pinCode", pinCode);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(fd);
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div className="update_profile">
          <div className="close_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 384 512"
              onClick={() => props.onHide()}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
          <p className="title">Edit Profile</p>
          <img src="/Image/88.png" alt="" className="profile_image" />

          <form onSubmit={handleSubmit}>
            <div className="three-sec">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Middle "
                onChange={(e) => setMiddle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last"
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="signle_input"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email Id"
              className="signle_input"
              onChange={(e) => setEmail(e.target.value)}
            />
          
            <input
              type="text"
              placeholder="First line address"
              className="signle_input"
              onChange={(e) => setAddress1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Second line address"
              className="signle_input"
              onChange={(e) => setAddress2(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country"
              className="signle_input"
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              className="signle_input"
              onChange={(e) => setState(e.target.value)}
            />

            <div className="two_sec">
              <input
                type="text"
                placeholder="District"
                onChange={(e) => setDistrict(e.target.value)}
              />
              <input
                type="text"
                placeholder="Pin code"
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <button type="submit">Save</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
