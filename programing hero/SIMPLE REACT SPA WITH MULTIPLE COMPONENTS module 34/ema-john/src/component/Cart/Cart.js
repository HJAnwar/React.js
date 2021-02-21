import React from 'react';

const Cart = (props) => {
    //console.log(props);
    const cart = props.items;
    // const total  = cart.reduce((total, pd) => total + pd.price, 0);
    // const total2 = Math.ceil(total) 

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        product.quantity=1;
        total = total + product.price * product.quantity;

    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 12.99;
    }

    let tex = (total / 10);
    


    const Formating = num => {
        const cost = num.toFixed(2);
        return Number(cost)
    }
    return(
        <div>
            <h2>order items</h2>
            <h3> Order Items : {props.items.length}</h3>
            <p> shipping :$ {Formating(shipping)}</p>
            <p> Product Price : ${Formating(total)}</p>
            <p> Tax & VAT : ${Formating(tex)}</p>
            <h4> total Amount :${Formating(total+ shipping+ tex)}</h4>
        </div>
    );
};

export default Cart;