import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import '../public/css/transactions.css'


function Transactions() {

  return (
    <div>
        <div className='containerTransaction'>
        
        <div className='add-transaction'>
    <div className='form'>
      <input 
      className="form-elements"
      type='text' 
      placeholder='Category' 
      id='category' 
      name='category'/>
      <div>
              <input
                  type="radio"
                  id="income"
                  name="transaction-type"
                  value="income"

              />
              <label htmlFor="income">Income</label>
          </div >
          <div className="form-elements">
              <input
                  type="radio"
                  id="expense"
                  name="transaction-type"
                  value="expense"
              />
              <label htmlFor="expense">Expense</label>
          </div>
      
      <input 
      className="form-elements"
      type='number' 
      placeholder='Amount' 
      id='amount' 
      name='amount'/>
      
      <input 
      className="form-elements"
      type='text' 
      placeholder='Date' 
      id='date' 
      name='date'/>
      
      <input className="form-elements" id="submit" type="submit" value="Add Transaction" />
    </div>
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
