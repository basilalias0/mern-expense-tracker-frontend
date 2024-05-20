import { useQuery } from '@tanstack/react-query';
import { listTransactionAPI } from '../Services/transactions/transactionServices';
import '../public/css/home.css'
import CloseButton from 'react-bootstrap/CloseButton';

function Home() {
  const {data:transactionList,isFetched} = useQuery({
    queryKey:['transaction-list'],
    queryFn:listTransactionAPI,
  })
  return (
    <div>
      <div className='containerMain'> 
        <div className='display-transaction'>
          <div className='money-property'>
            <div className='balance-amount'>
              <div className="header">Balance Amount</div>
              <div className="transaction-body">$Amount</div>
            </div>
            <div className='total-income'>
            <div className="header">Total Income</div>
            <div className="transaction-body">$Amount</div>
            </div>
            <div className='total-expense'>
            <div className="header">Total Expense</div>
            <div className="transaction-body">$Amount</div>
            </div>
          </div>
          <div className='recent-transaction' style={{overflowY:"scroll"}}>
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
                  <tr key={transaction._id} style={(transaction.type ==="income"?{backgroundColor:"rgb(70, 187, 70)",fontWeight:"bold"}:{backgroundColor:"rgb(229, 102, 102)",fontWeight:"bold"})} >
                    
                    <td>{new Date(transaction.date)
                    .toLocaleDateString('en-GB',{
                                                  day: 'numeric',
                                                  month: 'long',
                                                  year: 'numeric',
                                                 })}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.type}</td>
                    <td>₹{transaction.amount}</td>
                    <td><CloseButton /></td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
