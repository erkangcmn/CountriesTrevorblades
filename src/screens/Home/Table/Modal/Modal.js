import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function ModalComponent(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}> Details </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.countriesDetails.name}</Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <h5>Languages:
            {props.countriesDetails.languages.map((detailsC, idx) => {
              return (
                <span key={idx}> {detailsC.name}, </span>
              )
            })}
          </h5>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent
