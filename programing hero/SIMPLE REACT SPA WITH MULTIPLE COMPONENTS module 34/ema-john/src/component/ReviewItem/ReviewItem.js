import React from 'react';

const ReviewItem = (props) => {
    const { name, price, seller, quantity,key } = props.data;
    const removeProduct = props.removeProduct;

    return (
       
            <div className="name-container">
                <h3 className='name'> {name}</h3>
                <h5>By : {seller}</h5>
                <h5>Quantity: {quantity}</h5>
                <h4>Price : ${price}</h4>

                <button id="btnBlock" onClick={()=> removeProduct(props.data)} className='btn-style'>   Delete</button>


            </div>
            
       
    );
};

export default ReviewItem;