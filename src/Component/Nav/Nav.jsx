import React from 'react';
import logo from '../../img/Logo.svg'
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav-container'>
           <div>
              <img src={logo} alt=""/>
            </div>
            <div className='menu-list'>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </div> 
        </div>
    );
};

export default Nav;