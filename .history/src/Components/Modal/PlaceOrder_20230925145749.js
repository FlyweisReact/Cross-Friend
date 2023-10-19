import Modal from 'react-bootstrap/Modal';

export function PlaceOrder(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
            <div className='Place_Order_Modal'>
            <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
                <p>Your order is placed</p>
            </div>
        </Modal.Body>
      </Modal>
    );
  }

  