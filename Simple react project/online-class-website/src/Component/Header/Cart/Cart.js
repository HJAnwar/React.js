import React from 'react';
import './Cart.css';

const Cart = (props) => {
    

    const {course, img, title, price, id} = props.count;
    const deleteCourse = props.deleteCourse;
    // console.log(course);
    
    return (
        <div className="cartCourse" id={id}>
            <img  src={img} alt=""/>
            <h3>{course}</h3>
            
            <button  onClick={()=> deleteCourse({id,price})}>Delete</button>
            
        </div>
    );
};

export default Cart;