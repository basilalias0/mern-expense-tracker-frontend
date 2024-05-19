import React from 'react';
import Card from 'react-bootstrap/Card';
import CategoryDetail from './CategoryDetail';
import Button from 'react-bootstrap/Button';
import'../public/css/category.css'

function Categories() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
         <div className='container-category'>
         

      <CategoryDetail
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
         <div className='full-category-list'>
            <div className='imaginary-div'>
            <Button variant="outline-secondary" style={{border:"0",padding:"0",margin:"0"}} onClick={() => setModalShow(true)}>
         <Card style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
      <Card.Body>
        <Card.Title style={{paddingBottom:"1.1rem"}}>Category.name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem"}}>Category.type</Card.Subtitle>
      </Card.Body>
    </Card>
      </Button>
         </div>
         </div>
         </div>
      
    </div>
  );
}

export default Categories;


