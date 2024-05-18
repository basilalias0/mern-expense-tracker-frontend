import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import { updateUsernameAPI } from '../Services/users/userServices';
import { useDispatch } from 'react-redux';
import { changeName } from '../Redux/slice/userSlice';
import Alert from 'react-bootstrap/Alert';

function UpdateUsername() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const {mutateAsync,isError,error,isPending} = useMutation({
      mutationFn:updateUsernameAPI,
      mutationKey:['changeusername']
    })

    const usernameValidationSchema = Yup.object({
      username:Yup.string()
      .lowercase("All Lowercase")
      .min(3,"Too Short!")
      .max(15,"Maximum 15 characters")
      .required("Username Required"),
    })

    const formik = useFormik({
      initialValues:{
        username:''
      },
      validationSchema:usernameValidationSchema,
      onSubmit:(values)=>{
        mutateAsync(values)
        .then((data)=>{
          dispatch(changeName(data))
          handleClose()
        })
        .catch((e)=>console.log(e))
      }
    })
  
    return (
      <>
        <Button variant="outline-secondary" style={{width:"100%"}} onClick={handleShow}>Update Username</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Want to update your username?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {isPending && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Loading... </Alert>}
          {isError && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"danger"} variant={'danger'}> {error?.response?.data?.message} !!! </Alert>}
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control style={{marginBottom:"1rem"}}
                  type="text"
                  name='username'
                  placeholder="Enter your new username here!!"
                  {...formik.getFieldProps("username")}
                  autoFocus
                />
                {formik.touched.username && formik.errors.username && (<span style={{color:"red"}}>{formik.errors.username}</span>)}
              </Form.Group>
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

export default UpdateUsername;
