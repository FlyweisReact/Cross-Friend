import Modal from 'react-bootstrap/Modal';

function PlaceOrder(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div className='Place_Order_Modal'>

                <p></p>
            </div>
        </Modal.Body>
      </Modal>
    );
  }

  