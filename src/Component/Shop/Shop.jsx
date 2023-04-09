import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../fakeDb/FakeDb';


const Shop = () => {
    const [products, setProduct] = useState([])
    const[cart, setCart] = useState([])

    useEffect(()=>{
        fetch("../../../public/Api/ProductData.json")
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
        const newCart = [...cart,product]

        // let newCart =[];
        // const exists = cart.find(pd=>pd.id === product.id)
        //     if (!exists) {
        //         product.quantity = 1;
        //         newCart = [...cart, product]
        //     }
        //     else{
        //         exists.quantity = exists.quantity +1;
        //         const remaining = cart.filter(pd =>pd.id !== product.id)
        //         newCart = [...remaining. exists]
        //     }

        setCart(newCart)
        addToDb(product.id)
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
                <Cart cart ={cart}></Cart>
                
            </div>
            
        </div>
    );
};

export default Shop;