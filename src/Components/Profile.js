import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import UpdateName from './UpdateName';
import UpdatePassword from './UpdatePassword';
import UpdateUsername from './UpdateUsername';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../Redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function Profile() {
  const profile = useSelector((state)=>state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = (e)=>{
      localStorage.removeItem('userData')
      dispatch(logoutAction())
      navigate('/')
  }
  console.log(profile);
  return (
    <div>
        
      <div className='container-category'>
        <div className='profile-outer-div'>
            <div className='profile-card'>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{fontSize:"1.8rem"}}>Hi, {profile?.name}</Card.Title>        
        <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"1.3rem"}}>@{profile?.username}</Card.Subtitle>
        
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
        <ListGroup.Item><Button onClick={handleLogout} variant="outline-secondary" style={{width:"100%"}}>Logout</Button></ListGroup.Item>
        
      </ListGroup>
    </Card>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Profile;
