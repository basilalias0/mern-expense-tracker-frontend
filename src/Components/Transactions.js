import React from 'react';
import '../public/css/transactions.css'

function Transactions() {
  return (
    <div>
        <div className='containerTransaction'>
        <div className='full-transaction-table'>
        <div className='full-transaction'>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>00/00</td>
              <td>category</td>
              <td>IC/Ex</td>
              <td>2000</td>
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
