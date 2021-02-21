import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Product = (props,handleProduct) => {
    const { name, price, img, seller,key } = props.product;
    ;
   
    
    // if (props.addToCart === "false") {
    //     document.getElementById('btnBlock').style.display = "none";
    // }else if (props.addToCart === "true") {
    //     document.getElementById('btnBlock').style.display = "block";
        
    // }

    
    return (
        <div className='product' >

            <div className="img-container">
                <img src={img} alt="" /> 
            </div>

            <div className="name-container">
                <h3 className='name'> <Link to={"/product/"+ key}>{name}</Link> </h3>
                <h5>By : {seller}</h5>
                <h4>Price : ${price}</h4>
                { props.addToCart > 0  &&
                <button id="btnBlock" onClick={()=> props.handleProduct(props.product)} className='btn-style'><FontAwesomeIcon icon={faShoppingCart} />    Add to Cart</button>

                }
            </div>

        </div>
    );
};

export default Product;