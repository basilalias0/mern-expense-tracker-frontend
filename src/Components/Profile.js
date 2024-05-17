import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import UpdateName from './UpdateName';
import UpdatePassword from './UpdatePassword';
import UpdateUsername from './UpdateUsername';


function Profile() {
  return (
    <div>
        
      <div className='container-category'>
        <div className='profile-outer-div'>
            <div className='profile-card'>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{fontSize:"1.8rem"}}>Hi, Basil</Card.Title>        
        <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"1.3rem"}}>@username</Card.Subtitle>
        
      </Card.Body>
    </Card>
            </div>
            <div className='update-card'>
            <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
      <ListGroup.Item>
        <UpdateName/>
        </ListGroup.Item>
        <ListGroup.Item><UpdatePassword/></ListGroup.Item>
        <ListGroup.Item><UpdateUsername/></ListGroup.Item>
        <ListGroup.Item><Button variant="outline-secondary" style={{width:"100%"}}>Logout</Button></ListGroup.Item>
        
      </ListGroup>
    </Card>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
