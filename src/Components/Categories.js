import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CategoryDetail from './CategoryDetail';
import Button from 'react-bootstrap/Button';
import'../public/css/category.css'
import { useQuery } from '@tanstack/react-query';
import { listCategoryAPI } from '../Services/transactions/transactionServices';
import Alert from 'react-bootstrap/Alert';

function Categories() {
  const [modalShow, setModalShow] = React.useState(false);
  const [element,setElement]= useState("")

  const {data:categoryList,isFetching,refetch} = useQuery({
    queryKey:['transaction-list'],
    queryFn:listCategoryAPI,
  })

 

  return (
    <div>
         <div className='container-category'>
         

      <CategoryDetail
        show={modalShow}
        onHide={() => setModalShow(false)}
        element ={element}
        refetch = {refetch}
        
      />
         
         {isFetching ? <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Fetching category Details... </Alert>:
         <div className='full-category-list'  >
            <div className='imaginary-div'>
            
         
      
        {categoryList?.map((element)=>{
         return(
          <Button key={element.id}variant={element?.type==="income"? "outline-success":"outline-danger"} style={{border:"0",padding:"0",margin:"0"}} onClick={() => {
            setModalShow(true)
            setElement(element)
            }}>
            <Card  style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
            <Card.Body>
          <Card.Title style={{paddingBottom:"1.1rem",textTransform:"capitalize"}}>{element.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem",textTransform:"capitalize"}}>{element.type}</Card.Subtitle>
        </Card.Body>
        </Card>
        </Button>
         )}
        
        
      )}
      
         </div>
         </div>}
         </div>
      
    </div>
  );
}

export default Categories;


