import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CategoryDetail(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Category Heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Category Id</h5>
          <h5>Category Type</h5>
          
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Delete!</Button>
          <Button onClick={props.onHide}>Close</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }

export default CategoryDetail;
