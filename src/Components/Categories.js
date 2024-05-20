import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CategoryDetail from './CategoryDetail';
import Button from 'react-bootstrap/Button';
import'../public/css/category.css'
import { useQuery } from '@tanstack/react-query';
import { listCategoryAPI } from '../Services/transactions/transactionServices';
import Alert from 'react-bootstrap/Alert';

function Categories() {
  const [modalShow, setModalShow] = React.useState(false);

  const {data:categoryList,refetch,isFetching} = useQuery({
    queryKey:['transaction-list'],
    queryFn:listCategoryAPI,
  })

  useEffect(()=>{
    refetch({ force: true });
  },[])


  return (
    <div>
         <div className='container-category'>
         

      <CategoryDetail
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
         
         {isFetching ? <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Fetching category Details... </Alert>:
         <div className='full-category-list'  >
            <div className='imaginary-div'>
            
         
      
        {categoryList?.map((element)=>{
         return(
          <Button key={element.id} variant={element?.type==="income"? "outline-success":"outline-danger"} style={{border:"0",padding:"0",margin:"0"}} onClick={() => setModalShow(true)}>
            <Card  style={{ width: '13rem',margin:"1rem", height:"7rem" }}>
            <Card.Body>
          <Card.Title style={{paddingBottom:"1.1rem"}}>{element.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"  style={{fontSize:"1.2rem"}}>{element.type}</Card.Subtitle>
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


