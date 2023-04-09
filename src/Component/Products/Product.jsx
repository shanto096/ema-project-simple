import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"
const Product = (props) => {
    const {img,name,price,category,seller,ratings} = props.product;
    const handelAddToCart = props.handelAddToCart;
    
    return (
           <div className='product' >
              <img src={img} alt="" />
             <div className='product-content'>
              <h3>{name}</h3>
              <h3>Price:${price}</h3>
              <p>category: {category}</p>
              <p>seller: {seller}</p>
              <p>ratings: {ratings}</p>
             </div>
              <button onClick={()=> handelAddToCart(props.product)} className='add-cart'>Add To Cart<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>  </button>
           </div>
       
    );
};

export default Product;