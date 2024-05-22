import React from 'react';
import '../public/css/transactions.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {useMutation} from '@tanstack/react-query';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import { createTransactionAPI, deleteTransactionAPI } from '../Services/transactions/transactionServices';
import CloseButton from 'react-bootstrap/CloseButton';
import { useQuery } from '@tanstack/react-query';
import { listTransactionAPI } from '../Services/transactions/transactionServices';



function Transactions() {

  const {mutateAsync,error,isError,isPending} = useMutation({
    mutationKey:['add-transaction'],
    mutationFn:createTransactionAPI,
    
  })

  const {data:transactionList,isFetching,refetch,} = useQuery({
    queryKey:['transaction-list'],
    queryFn:listTransactionAPI,
  })

  const {mutateAsync:deleteAsync} = useMutation({
    mutationKey:['delete-transaction'],
    mutationFn:deleteTransactionAPI
  })


 const navigate = useNavigate()


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
    date:Yup.date().required("Date must be required").max(new Date(), 'Start date cannot be in the future'),
    description:Yup.string()
  })

  const formik = useFormik({
    initialValues:{
      category:"",
      transactionType:"",
      amount:"",
      date:"",
      description:""
    },
    validationSchema:createTransactionSchema,
    onSubmit:((values)=>{
      mutateAsync(values)
      .then((data)=>{
        navigate('/home')
      })
      .catch((e)=>console.log(e))
    })
  })

  const handleDelete = (id)=>{
      deleteAsync(id).then((data)=>{
        formik.resetForm()
        refetch()
      })
      .catch((e)=>console.log(e))
  }

  return (
    <div>
        <div className='containerTransaction'>
        
        <div className='add-transaction'>

        
          
          
          <form className='form' onSubmit={formik.handleSubmit}>
          {isPending && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Loading... </Alert>}
          {isError && <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"danger"} variant={'danger'}> {error?.response?.data?.message} !!! </Alert>}
          <div style={{marginBottom:"2rem"}}>
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
      <div style={{marginBottom:"2rem"}}>
      <fieldset style={{marginBottom:"0",width:"100%"}}
            id="transactionType"
            label="One of these please"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.transactionType}
            error={formik.errors.transactionType}
          >
            <div>
          
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
          
          <div style={{marginBottom:"2rem"}}>
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


      <div style={{marginBottom:"2rem"}}>
      <input style={{marginBottom:"0",width:"100%"}}
      className="form-elements"
      type='date' 
      placeholder='Date' 
      id='date' 
      name='date'
      {...formik.getFieldProps("date")}/>
      <div>
      {formik.touched.date && formik.errors.date && 
      (<span style={{color:"red"}}>{formik.errors.date}</span>)}
      </div>
      </div>

      <div style={{marginBottom:"2rem"}}>
      <textarea style={{marginBottom:"0",width:"99%",height:"8rem"}} 
      
      className="form-elements"
      type='text' 
      placeholder='Description Here...' 
      id='description' 
      name='description'
      {...formik.getFieldProps("description")}/>
      </div>
      
     

      
      <input className="form-elements" id="submit" type="submit" value="Add Transaction" />
    </form>

  </div>
  <div className=' full-transaction-table'>
            {isFetching ? <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Fetching your Transaction Details... </Alert>:
            
            <div className='full-transaction'>
          <table >
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
              {transactionList?.map(transaction => (
                  <tr key={transaction._id} style={(transaction.type ==="income"?{backgroundColor:"#98FB98",fontWeight:"bold"}:{backgroundColor:"#FC567A",fontWeight:"bold"})} >
                    
                    <td>{new Date(transaction.date)
                    .toLocaleDateString('en-GB',{
                                                  day: 'numeric',
                                                  month: 'long',
                                                  year: 'numeric',
                                                 })}</td>
                    <td style={{textTransform:"capitalize"}}>{transaction.category}</td>
                    <td style={{textTransform:"capitalize"}}>{transaction.type}</td>
                    <td>₹{transaction.amount}</td>
                    <td><CloseButton onClick={()=>handleDelete(transaction._id)}/></td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>}
            

  
          </div>
        
      </div>

      </div>
    

  );
}

export default Transactions;
