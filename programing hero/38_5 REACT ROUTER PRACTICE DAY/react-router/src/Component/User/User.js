import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Hello } from '../../App';
import UserDetail from '../UserDetail/UserDetail';

const User = (props) => {

    const a  = useContext(Hello)
    
    return (
        <div>
            <h1>{a}</h1>
            <UserDetail/>
        </div>
    );
};

export default User;