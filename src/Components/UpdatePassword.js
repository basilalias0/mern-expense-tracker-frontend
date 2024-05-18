import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function UpdatePassword() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-secondary" style={{width:"100%"}} onClick={handleShow}>Update Password</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Want to update your password?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control style={{marginBottom:"1rem"}}
                  type="password"
                  placeholder="Enter your old password here!!"
                  autoFocus
                />
                <Form.Control style={{marginBottom:"1rem"}}
                  type="password"
                  placeholder="Enter your new password here!!"
                  autoFocus
                />
                <Form.Control style={{marginBottom:"1rem"}}
                  type="password"
                  placeholder="Enter your new password again!"
                  autoFocus
                />
              </Form.Group>
            </Form>
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

export default UpdatePassword;
