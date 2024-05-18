import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../public/css/navbar.css'
import wallet from '../public/images/wallet.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function ProfileNavbar() {

  const profile = useSelector((state)=>state.auth.user)
  
  
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
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/category" className="nav-link">Category</Link>
            <Link to="/transaction" className="nav-link">Transaction</Link>
            
          </Nav>
          <Nav className="justify-content-end">
          <Nav.Link style={{color:"rgb(125, 127, 129"}} eventKey="disabled" disabled>
         {profile? <div>Hi, {profile?.name}</div>:""}
          </Nav.Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

export default ProfileNavbar;
