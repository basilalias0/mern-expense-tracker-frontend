import React from 'react';
import Card from 'react-bootstrap/Card';
import'../public/css/category.css'

function Categories() {
  return (
    <div>
         <div className='container-category'>
         <div className='full-category-list'>
            <div className='imaginary-div'>
         <Card style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
      <Card.Body>
        <Card.Title style={{paddingBottom:"1.1rem"}}>Category.name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem"}}>Category.type</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
      <Card.Body>
        <Card.Title style={{paddingBottom:"1.1rem"}}>Category.name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem"}}>Category.type</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
      <Card.Body>
        <Card.Title style={{paddingBottom:"1.1rem"}}>Category.name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem"}}>Category.type</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
      <Card.Body>
        <Card.Title style={{paddingBottom:"1.1rem"}}>Category.name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem"}}>Category.type</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
      <Card.Body>
        <Card.Title style={{paddingBottom:"1.1rem"}}>Category.name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem"}}>Category.type</Card.Subtitle>
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
      <Card.Body>
        <Card.Title style={{paddingBottom:"1.1rem"}}>Category.name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem"}}>Category.type</Card.Subtitle>
      </Card.Body>
    </Card>

         </div>
         </div>
         </div>
      
    </div>
  );
}

export default Categories;
