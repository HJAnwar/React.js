import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 20);
    //console.log(first10);
    const [product, setProduct] = useState(first10);

    const [cart, setCart] = useState([]);
    const handleProduct = (product)=> {
        const newCart = [...cart, product];
        setCart(newCart)


        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    product.map(pd => <Product addToCart={true} key={product.key} handleProduct={handleProduct} product={pd}/>)
                }
            </div>
            <div className="cart-container">
                <Cart items={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;