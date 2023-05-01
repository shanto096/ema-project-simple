import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../fakeDb/FakeDb';
import { Link } from 'react-router-dom';


const Shop = () => {
    const [products, setProduct] = useState([])
    const[cart, setCart] = useState([])

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    useEffect(()=>{
       const shopCart = getShoppingCart()
       const saveCart = [];
       for(const id in shopCart){
        const addedProduct = products.find(product =>product.id === id);
        if (addedProduct) {
            const quantity = shopCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct)
        }
        setCart(saveCart)

        
        console.log(addedProduct);
       }
    },[products])
     
    const handelAddToCart = (product) =>{
        let newCart = [...cart, product]
        
        const exists = cart.find(pd=>pd.id === product.id)
            if (!exists) {
                product.quantity = 1;
                newCart = [...cart, product]
            }
            else{
                exists.quantity = exists.quantity +1;
                const remaining = cart.filter(pd =>pd.id !== product.id)
                newCart = [...remaining, exists]
            }

        setCart(newCart)
        addToDb(product.id)
     }

     const handleclearcart = () =>{
       setCart([])
       deleteShoppingCart()
     }
    return (
        <div className='shop-container'>
            <div className='product-container'> 
                {
                    products.map(product => <Product
                         key ={product.id} 
                         product = {product}
                          handelAddToCart = {handelAddToCart}
                         >
                         </Product>)
                }
            </div>
            <div className='order-container'>
                <Cart cart ={cart} handleclearcart={handleclearcart}>
                    <Link to="/oder review"><button className='review-order'>Review Order</button></Link>
                </Cart>
                
            </div>
            
        </div>
    );
};

export default Shop;