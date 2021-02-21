import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart,removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
   

    const [cart, setCart] = useState([])

     const removeProduct = productKey => {

         const newCart = cart.filter(pd => pd.key !== productKey.key)
         setCart(newCart);
       removeFromDatabaseCart(productKey.key);
    };

    useEffect(() => {
        const data = getDatabaseCart()
        const productKeys = Object.keys(data);
        const counts = productKeys.map(key => {
            const product = fakeData.find(da => da.key === key)
            product.quantity = data[key]
            return product;
        })
        setCart(counts)

    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} data={pd} />)
                }

            </div>
            <div className="cart-container">
                <Cart items={cart}/>
            </div>
        </div>
    );
};

export default Review;