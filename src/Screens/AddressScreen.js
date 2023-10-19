import React, { useEffect, useState } from "react";
import { createAddress, deleteAddress, getAddress } from "../Repository/Api";
import { AiFillDelete } from "react-icons/ai";
import { Modal } from "react-bootstrap";

const AddressScreen = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchHandler = () => {
    getAddress(setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteHandler = async (id) => {
    await deleteAddress(id);
    fetchHandler();
  };

  //   Modal
  function MyVerticallyCenteredModal(props) {
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address, seAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [landmark, setLandmark] = useState("");

    const payload = {
      street,
      pinCode,
      state,
      city,
      address,
      landmark,
    };

    const submitHandler = async (e) => {
      e.preventDefault();
      await createAddress(payload);
      props.onHide();
      fetchHandler();
    };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart_container" style={{ maxWidth: "800px" }}>
            <div className="left_container" style={{ width: "100%" }}>
              <form onSubmit={submitHandler}>
                <div className="two_sec">
                  <div>
                    <p className="title">Street</p>
                    <input
                      type="text"
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="title">Landmark</p>
                    <input
                      type="text"
                      onChange={(e) => setLandmark(e.target.value)}
                    />
                  </div>
                </div>
                <div className="two_sec">
                  <div>
                    <p className="title">City</p>
                    <input
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="title">Pincode</p>
                    <input
                      type="text"
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="two_sec">
                  <div>
                    <p className="title">State</p>
                    <input
                      type="text"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="title">Address</p>
                    <input
                      type="text"
                      onChange={(e) => seAddress(e.target.value)}
                    />
                  </div>
                </div>
                <button className="sm-btn" type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="getAddress">
        <div className="Heading">
          <p>Your Personal information</p>
          <button onClick={() => setModalShow(true)}>+ Create New</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Street</th>
              <th>Landmark</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {i.address} </td>
                <td> {i.city} </td>
                <td> {i.state} </td>
                <td> {i.pinCode} </td>
                <td> {i.street} </td>
                <td> {i.landmark} </td>
                <td>
                  <AiFillDelete
                    onClick={() => deleteHandler(i._id)}
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddressScreen;
