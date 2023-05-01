import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import "./Review.css"
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../fakeDb/FakeDb';

const Review = () => {
    const saveCart = useLoaderData()
    const [cart, setCart] = useState(saveCart)

    const handletoremove = (id) =>{
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    const handleclearcart = () =>{
        setCart([])
        deleteShoppingCart()
      }
    
    return (
        <div className='all-review'>
            <div className='all-review-item'>
                {
                    cart.map(product => <ReviewItem product ={product} handletoremove = {handletoremove}></ReviewItem>)
                }
            </div>
            <div>
                <Cart cart={cart} handleclearcart={handleclearcart}>
                <Link><button className='review-order1'>Proceed Checkout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;