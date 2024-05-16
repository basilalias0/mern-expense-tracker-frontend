import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../public/css/navbar.css'
import wallet from '../public/images/wallet.png'

function ProfileNavbar() {
  return (
    <div className='navDiv'>
    <Navbar bg="light" data-bs-theme="light">
        <Container><img style={{"margin-right": "5px"}}
              src={wallet}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
        
          <Navbar.Brand>IE Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Category</Nav.Link>
            <Nav.Link href="#">Transaction</Nav.Link>
            <Nav.Link href="#">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

export default ProfileNavbar;
