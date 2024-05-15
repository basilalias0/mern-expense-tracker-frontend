import '../public/css/home.css'

function Home() {
  return (
    <div>
      <div className='container'>
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
            
            <input className="form-elements" id="submit" type="submit" value="Submit" />
          </div>
        </div>
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
          <div className='recent-transaction'></div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
