import '../public/css/home.css'

function Home() {
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
          <div className='recent-transaction'>
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

export default Home;
