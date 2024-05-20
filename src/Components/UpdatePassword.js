import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import { updatePasswordAPI } from '../Services/users/userServices';
import { useFormik } from 'formik';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { userAction } from '../Redux/slice/userSlice';


function UpdatePassword() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
      setShow(false);
      formik.resetForm()
    }
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const {isError,error,isPending,mutateAsync} = useMutation({
      mutationKey:['updatename'],
      mutationFn:updatePasswordAPI
    })

    const passwordValidationSchema = Yup.object({
      oldPassword:Yup.string()
    .min(6,"Minimum 6 Characters")
    .required("Password Required"),
    newPassword:Yup.string()
    .min(6,"Minimum 6 Characters")
    .required("Password Required"),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref("newPassword"),null],"Passwords must match!")
    .required("Need confirm password")
    })

    const formik = useFormik({
      initialValues:{
        oldPassword:'',
        newPassword:'',
        confirmPassword:''
      },
      validationSchema:passwordValidationSchema,
      onSubmit:((values)=>{
        mutateAsync(values)
        .then((data)=>{
          console.log(data)
          dispatch(userAction(data))
          handleClose()
        })
        .catch((e)=>console.log(e))
      })
    })
  
    return (
      <>
        <Button variant="outline-secondary" style={{width:"100%"}} onClick={handleShow}>Update Password</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Want to update your password?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {isPending && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Loading... </Alert>}
          {isError && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"danger"} variant={'danger'}> {error?.response?.data?.message} !!! </Alert>}
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                  type="password"
                  name="oldPassword"
                  {...formik.getFieldProps("oldPassword")}
                  placeholder="Enter your old password here!!"
                  
                />
                {formik.touched.oldPassword && formik.errors.oldPassword && (<span style={{color:"red"}}>{formik.errors.oldPassword}</span>)}
                <Form.Control style={{marginTop:"1rem"}}
                  type="password"
                  name="newPassword"
                  {...formik.getFieldProps("newPassword")}
                  placeholder="Enter your new password here!!"
                 
                />
                {formik.touched.newPassword && formik.errors.newPassword && (<span style={{color:"red"}}>{formik.errors.newPassword}</span>)}
                <Form.Control style={{marginTop:"1rem"}}
                  type="password"
                  name="confirmPassword"
                  {...formik.getFieldProps("confirmPassword")}
                  placeholder="Enter your new password again!"
                  
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword && (<span style={{color:"red"}}>{formik.errors.confirmPassword}</span>)}
              </Form.Group>

              <Modal.Footer>
            <Button type='submit' variant="primary" >
              Save Changes
            </Button>
          </Modal.Footer>
            </Form>
          </Modal.Body>
          
        </Modal>
      </>
    );
  }

export default UpdatePassword;
