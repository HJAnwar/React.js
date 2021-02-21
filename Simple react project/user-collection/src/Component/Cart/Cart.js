import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const count = props.count;
    const user = props.userInfo;
    return (
        <div className='divFixed'>
            <h2>Add User: {count}</h2>
            <h3>Total Yearly Salary: {user}</h3>
            
        </div>
    );
};

export default Cart;