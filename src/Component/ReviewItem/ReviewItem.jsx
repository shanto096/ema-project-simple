import React from 'react';
import "./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handletoremove}) => {
    return (
        <div className='review'>
        <img src={product.img} alt="" />
        <div className='review-content'>
            <div className='review-name'>
                <h3>{product.name}</h3>
                <p>Price <span>${product.price}</span></p>
                <p>Quantity <span>{product.quantity}</span></p>
            </div>
            
        </div>
                <button onClick={()=>{handletoremove(product.id)}} className='btn-delete'><span className='icon-remove'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default ReviewItem;