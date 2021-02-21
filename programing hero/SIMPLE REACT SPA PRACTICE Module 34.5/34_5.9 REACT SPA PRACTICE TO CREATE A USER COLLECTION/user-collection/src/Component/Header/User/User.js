import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const { first_name, last_name, sellary, email, photo, phone } = props.data;
    
    const addClick = props.addClick;
    const name = first_name + "  " + last_name;

 

    return (
        <div className='userDiv'>
            <img style={{ height: "130px", width: "130px" }} src={photo} alt="" />
            <h2> {name}</h2>
            <h3>{email}</h3>
            <p>phone: {phone}</p>
            <p>{sellary}</p>
            <br /><button onClick={()=> addClick(props.data)}><FontAwesomeIcon icon={faPlus} /> Add Info.</button>

        </div>
    );
};

export default User;