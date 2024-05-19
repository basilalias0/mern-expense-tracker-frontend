import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import '../public/css/transactions.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import Alert from 'react-bootstrap/Alert';
import { createTransactionAPI } from '../Services/users/userServices';

function Transactions() {

  const {mutateAsync,error,isError,isPending} = useMutation({
    mutationKey:['add-transaction'],
    mutationFn:createTransactionAPI
  })

  const createTransactionSchema = Yup.object({
    category: Yup.string()
    .min(3,"Name of category must be more than 2 character")
    .max(20,"Too Long")
    .required("Category must be mentioned"),
    transactionType: Yup.string()
    .required("Choose Income or Expense"),
    amount:Yup.number()
    .positive("Must be a Positive amount")
    .required("Need transaction amount"),
    date:Yup.string()
    .required("Date must be required")
  })

  const formik = useFormik({
    initialValues:{
      category:"",
      transactionType:"",
      amount:"",
      date:""
    },
    validationSchema:createTransactionSchema,
    onSubmit:((values)=>{
      mutateAsync(values)
      .then((data)=>{
        console.log(data);
      })
      .catch((e)=>console.log(e))
    })
  })


  return (
    <div>
        <div className='containerTransaction'>
        
        <div className='add-transaction'>

        
          
          
          <form className='form' onSubmit={formik.handleSubmit}>
          {isPending && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Loading... </Alert>}
          {isError && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"danger"} variant={'danger'}> {error?.response?.data?.message} !!! </Alert>}
          <div style={{marginBottom:"1rem"}}>
      <input style={{marginBottom:"0",width:"100%"}}
      className="form-elements"
      type='text' 
      placeholder='Category' 
      id='category' 
      name='category'
      {...formik.getFieldProps("category")}/>
      <div>
      {formik.touched.category && formik.errors.category && 
      (<span style={{color:"red"}}>{formik.errors.category}</span>)}
      </div>
      </div>
      <div style={{marginBottom:"1rem"}}>
      <fieldset style={{marginBottom:"0",width:"100%"}}
            id="transactionType"
            label="One of these please"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.transactionType}
            error={formik.errors.transactionType}
          >
            <div>
            {/* of course, add the id in fieldset as name in the input tags  */}
            <input
              type="radio"
              name="transactionType"
              id="income"
              label="Choose this option"
              value="income"
            />
            Income
            </div><div>
            <input
              type="radio"
              name="transactionType"
              id="expense"
              label="Or choose this one"
              value="expense"
            />
            Expense
            </div>
          </fieldset>
          <div>
          {formik.touched.transactionType && formik.errors.transactionType && (
              <div style={{color:"red"}}>{formik.errors.transactionType}</div>
            )}
            </div>
            </div>
          
          <div style={{marginBottom:"1rem"}}>
      <input style={{marginBottom:"0",width:"100%"}}
      className="form-elements"
      type='number' 
      placeholder='Amount' 
      id='amount' 
      name='amount'
      {...formik.getFieldProps("amount")}/>
      <div>
      {formik.touched.amount && formik.errors.amount && 
      (<span style={{color:"red"}}>{formik.errors.amount}</span>)}
      </div>
      </div>


      <div style={{marginBottom:"1rem"}}>
      <input style={{marginBottom:"0",width:"100%"}}
      className="form-elements"
      type='text' 
      placeholder='Date' 
      id='date' 
      name='date'
      {...formik.getFieldProps("date")}/>
      <div>
      {formik.touched.date && formik.errors.date && 
      (<span style={{color:"red"}}>{formik.errors.date}</span>)}
      </div>
      </div>

      
      <input className="form-elements" id="submit" type="submit" value="Add Transaction" />
    </form>

  </div>
        <div className='full-transaction-table'>
        <div className='full-transaction'>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>00/00</td>
              <td>category</td>
              <td>IC/Ex</td>
              <td>2000</td>
              <td><CloseButton/></td>
              </tr>
              </tbody>
          </table>
          </div>

        </div>
        
      </div>

      </div>
    

  );
}

export default Transactions;
