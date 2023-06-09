import React from 'react';
import "./Cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart,handleclearcart,children}) => {
    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        product.quantity = product.quantity || 1

        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 10/100;
    const grendTotal = total + tax + totalShipping;
    return (
        <div className='cart-content'>
            <h2 style={{textAlign:"center",borderBottom:"4px solid red"}}>Order Summary</h2>
            <p>Order quantity: {quantity}</p>
            <p>Price: ${total}</p> 
            <p>shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grend Total :${grendTotal}</p>
            <button onClick={handleclearcart} className='clear-cart'>Clear Cart <span className='icon-t' ><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></span></button>
            {children}
        </div>
    );
};

export default Cart;