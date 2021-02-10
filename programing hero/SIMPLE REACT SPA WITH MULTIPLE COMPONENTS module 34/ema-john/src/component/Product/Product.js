import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = (props,handleProduct) => {
    const { name, price, img, seller } = props.product;
    
    return (
        <div className='product' >

            <div className="img-container">
                <img src={img} alt="" />
            </div>

            <div className="name-container">
                <h3 className='name'>{name}</h3>
                <h5>By : {seller}</h5>
                <h4>Price : ${price}</h4>
                <button onClick={()=> props.handleProduct(props.product)} className='btn-style'><FontAwesomeIcon icon={faShoppingCart} />    Add to Cart</button>
            </div>
(
        </div>
    );
};

export default Product;