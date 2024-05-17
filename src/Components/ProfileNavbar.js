import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../public/css/navbar.css'
import wallet from '../public/images/wallet.png'
import { useSelector } from 'react-redux';

function ProfileNavbar() {

  const profile = useSelector((state)=>state.user)
  return (
    <div className='navDiv'>
    <Navbar bg="light" data-bs-theme="light">
        <Container><img style={{marginRight: "5px"}}
              src={wallet}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
        
          <Navbar.Brand>IE Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/category">Category</Nav.Link>
            <Nav.Link href="/transaction">Transaction</Nav.Link>
            
          </Nav>
          <Nav className="justify-content-end">
          <Nav.Link style={{color:"rgb(125, 127, 129"}} eventKey="disabled" disabled>
         {profile? <div>Hi,{profile.name}</div>:""}
          </Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

export default ProfileNavbar;
