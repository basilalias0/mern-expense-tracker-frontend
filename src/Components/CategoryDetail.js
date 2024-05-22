
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteCategoryAPI } from '../Services/transactions/transactionServices';


function CategoryDetail(props) {

  const {mutateAsync} = useMutation({
    mutationKey:["delete-category"],
    mutationFn:deleteCategoryAPI,
  })

  const handleDelete = ({element,onHide,refetch})=>{
   mutateAsync(element.id).then((data)=>{
    refetch()
    onHide()
   })
   .catch((e)=>console.log(e))
   
  }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Want to delete this category?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{fontWeight:"bold",textTransform:"uppercase"}}>{props.element.name}</h5>
          <h5 style={{fontWeight:"bold",textTransform:"uppercase"}}>{props.element.type}</h5>

          <h5 style={{fontWeight:"bold",color:"green"}}>{props.element.type==="income"? ("Total money Received: "+ props.element.amount): ""}</h5>
          <h5 style={{fontWeight:"bold",color:"red"}}>{props.element.type==="expense"? ("Total money Spent: "+props.element.amount): ""}</h5>
          
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={()=>handleDelete(props)}>Delete!</Button>
          <Button onClick={props.onHide}>Close</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }

export default CategoryDetail;
