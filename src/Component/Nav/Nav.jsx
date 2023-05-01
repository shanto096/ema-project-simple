import React from 'react';
import logo from '../../img/Logo.svg'
import './Nav.css'
import { Link } from 'react-router-dom';
import Activelink from '../Activelink/Activelink';

const Nav = () => {
    return (
        <div className='nav-container'>
           <div>
              <img src={logo} alt=""/>
            </div>
            <div className='menu-list'>
                <Activelink to="/">Shop</Activelink>
                <Activelink to="/oder review">Order</Activelink>
                <Activelink to="/Inventory"> Inventory</Activelink>
                <Activelink to="/Login">Login</Activelink>
            </div> 
        </div>
    );
};

export default Nav;