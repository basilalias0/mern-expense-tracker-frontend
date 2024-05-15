import React from 'react';
import '../public/css/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='list'>
            <ul>
                <li><a href='#'>IE Tracker</a></li>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Transactions</a></li>
                <li><a href='#'>Category</a></li>
                <li><a href='#'>Profile</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
