import {  useQuery } from '@tanstack/react-query';
import {  listTransactionAPI } from '../Services/transactions/transactionServices';
import '../public/css/home.css'
import Alert from 'react-bootstrap/Alert';
import { TransactionChart } from './TransactionChart';



function Home() {
  const {data:transactionList,isFetching} = useQuery({
    queryKey:['transaction-list'],
    queryFn:listTransactionAPI,
  })

   const totals = transactionList?.reduce((acc,transaction)=>{
    if(transaction.type==="income"){
      acc.income += transaction?.amount
      acc.balance += transaction?.amount
    }else{
      acc.expense -= transaction?.amount
      acc.balance -= transaction?.amount
    }
    return acc
  },{income:0,expense:0,balance:0})

  return (
    <div>
      <div className='containerMain'> 
        <div className='display-transaction'>
          <div className='money-property'>
            <TransactionChart  totals={totals}/>
          </div>
          {isFetching ? <Alert style={{fontWeight:"bold",textTransform:"uppercase"}} key={"info"} variant={'info'}> Fetching your Transaction Details... </Alert>:
          <div className='recent-transaction' style={{overflowY:"auto"}}>
          <div className='full-transaction' >
          <table >
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Description</th>

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
                    <td style={{textTransform:"capitalize"}}>{transaction.description}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>
          </div>
          }
        </div>
      </div>
      
    </div>
  );
}

export default Home;
