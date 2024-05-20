import {  useMutation } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import { updateNameAPI } from '../Services/users/userServices';
import {  useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userAction } from '../Redux/slice/userSlice';
import Alert from 'react-bootstrap/Alert';


function UpdateName() {

  const nameValidationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name Required'),
  })

  const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      formik.resetForm()
    }
    const handleShow = () => setShow(true);

    const {isError,error,isPending,mutateAsync} = useMutation({
      mutationKey:['updatename'],
      mutationFn:updateNameAPI
    })

    const formik = useFormik({
      initialValues:{
        name:''
      },
      validationSchema:nameValidationSchema,
      onSubmit:(values)=>{
        mutateAsync(values).then((data)=>{
          dispatch(userAction(data))
          handleClose()
        })
        .catch((e)=>console.log(e))
      }
    })
    return (
      <>
        <Button variant="outline-secondary" style={{width:"100%"}} onClick={handleShow}>Update Name</Button>
  
        <Modal show={show} onHide={handleClose} onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Want to update your name?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {isPending && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Loading... </Alert>}
          {isError && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"danger"} variant={'danger'}> {error?.response?.data?.message} !!! </Alert>}
            <Form >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your new name here!!"
                  {...formik.getFieldProps("name")}
                />
                
                
              </Form.Group>
              {formik.touched.name && formik.errors.name && (<span style={{color:"red"}}>{formik.errors.name}</span>)}
              
              
              
            
          
          <Modal.Footer style={{margin:'0',padding:"0",border:'0'}}>
          <Button type='submit' variant="primary">
              Save Changes
            </Button>
            
          </Modal.Footer>
          </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

export default UpdateName;
